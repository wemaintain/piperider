import { InfoIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Tag, Text, Tooltip } from '@chakra-ui/react';
import { TimeUnit } from 'chart.js';
import {
  Comparable,
  ComparableData,
  DBTBusinessMetricGroupItem,
} from '../../lib';
import { BMLineChart } from '../Charts/BMLineChart';

interface Props extends Comparable {
  data: ComparableData<DBTBusinessMetricGroupItem>;
}
/**
 * A Widget container for displaying BM Charts (line).
 */
export function BMWidget({ data: { base, target }, singleOnly }: Props) {
  // Determines the datasets shown by BM*Chart
  const bmGroupList = singleOnly ? [base] : [base, target];

  //shared timeGrain selection + options (SR+CR+Dimensions)
  const fallbackBMData = target || base;
  const dateRangeStartEnd = [
    fallbackBMData?.data[0][0],
    fallbackBMData?.data[0].slice(-1),
  ].map((v) => String(v));

  return (
    <Box p={3}>
      <Box pb={3}>
        <Flex className="widget-header" alignItems={'center'} gap={2} mb={2}>
          <Tag colorScheme={'blue'} variant={'subtle'} fontWeight={'medium'}>
            {fallbackBMData?.label}
          </Tag>
          <Tooltip
            shouldWrapChildren
            label={fallbackBMData?.description}
            placement={'right'}
          >
            <Icon as={InfoIcon} />
          </Tooltip>
        </Flex>
        <Flex>
          <Text color={'gray.500'} fontSize={'sm'}>
            from {dateRangeStartEnd[0]} to {dateRangeStartEnd[1]}
          </Text>
        </Flex>
      </Box>
      <Flex maxH={'300px'}>
        <BMLineChart
          data={bmGroupList}
          timeGrain={fallbackBMData?.grain as TimeUnit}
        />
      </Flex>
    </Box>
  );
}
