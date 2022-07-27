import { Flex } from '@chakra-ui/react';
import type { TableSchema } from '../../sdlc/single-report-schema';
import { ZColSchema } from '../../types';
import { ColumnCard } from '../shared/ColumnCard';
import { nanoid } from 'nanoid';

interface Props {
  data: TableSchema['columns'];
}
export function SRTabProfilingDetails({ data }: Props) {
  return (
    <Flex direction="row" flexWrap={'wrap'} gap={4} justify={'center'}>
      {Object.keys(data).map((key) => {
        const column = data[key];
        ZColSchema.parse(column);

        return <ColumnCard key={nanoid()} columnDatum={column} />;
      })}
    </Flex>
  );
}
