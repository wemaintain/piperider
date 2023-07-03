import { Icon } from '@chakra-ui/react';
import { ChangeStatus } from '../../lib';
import { getIconForChangeStatus } from '../Icons';

type Props = {
  added?: number;
  removed?: number;
  modified?: number;
  implicit?: number;
};

function ChangeStatusOne({
  value,
  changeStatus,
}: {
  value?: number;
  changeStatus: ChangeStatus;
}) {
  const { icon, color } = getIconForChangeStatus(changeStatus);

  return (
    <>
      <Icon as={icon} color={color} /> {value}
    </>
  );
}

export function ChangeStatusWidget({
  added,
  removed,
  modified,
  implicit,
}: Props) {
  const items: any[] = [];
  let first = true;

  if (added) {
    items.push(<>{first ? '(' : ', '}</>);
    items.push(<ChangeStatusOne value={added} changeStatus="added" />);
    first = false;
  }
  if (removed) {
    items.push(<>{first ? '(' : ', '}</>);
    items.push(<ChangeStatusOne value={removed} changeStatus="removed" />);
    first = false;
  }
  if (modified) {
    items.push(<>{first ? '(' : ', '}</>);
    items.push(<ChangeStatusOne value={modified} changeStatus="modified" />);
    first = false;
  }
  if (implicit) {
    items.push(<>{first ? '(' : ', '}</>);
    items.push(<ChangeStatusOne value={implicit} changeStatus="implicit" />);
    first = false;
  }
  if (!first) {
    items.push(<>{')'}</>);
  }

  return <>{items}</>;
}
