import os
import uuid
from ruamel import yaml
from piperider_cli.workspace import Configuration
from piperider_cli.event.collector import Collector

PIPERIDER_USER_HOME = os.path.expanduser('~/.piperider')
PIPERIDER_USER_PROFILE = os.path.join(PIPERIDER_USER_HOME, 'profile.yml')

_collector = Collector()
_yml = yaml.YAML(typ='safe')


def init():
    api_key = os.environ.get('PIPERIDER_EVENT_API_KEY', None)
    user_id = None

    if not os.path.exists(PIPERIDER_USER_PROFILE):
        user_id = _generate_user_id()
    else:
        with open(PIPERIDER_USER_PROFILE, 'r') as f:
            profile = _yml.load(f)
            user_id = profile.get('user_id', None)

    if user_id is None:
        user_id = _generate_user_id()

    _collector.set_api_key(api_key)
    _collector.set_user_id(user_id)


def _generate_user_id():
    try:
        os.makedirs(PIPERIDER_USER_HOME, exist_ok=True)
    except Exception:
        # TODO: should show warning message but not raise exception
        print('Please disable command tracking to continue.')
        exit(1)

    user_id = uuid.uuid4().hex
    with open(PIPERIDER_USER_PROFILE, 'w+') as f:
        _yml.dump({'user_id': user_id}, f)
    return user_id


def _obtain_project_info(datasource=None):
    info = dict(project_id=[], project_type=[], datasource=[],)
    try:
        configuration = Configuration.load()
        for ds in configuration.dataSources:
            if datasource and ds.name != datasource:
                continue
            dbt = ds.args.get('dbt')
            info['project_id'].append(ds.get_id())
            info['project_type'].append('dbt' if dbt else '-')
            info['datasource'].append(ds.type_name)
        return info
    except:
        return {}

def log_event(command, params, status):
    if not _collector.is_ready():
        return

    ds = params.get('datasource')
    project_info = _obtain_project_info(datasource=ds)
    prop = dict(
        **project_info,
        command=command,
        status=status,
    )
    _collector.log_event(prop, 'usage')
    if command in ['run', 'generate-report', 'compare-report'] or status == False:
        _collector.send_events_if_ready()
