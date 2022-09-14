import {
  ChartOptions,
  Chart as ChartJS,
  Tooltip,
  ChartData,
  ArcElement,
  Legend,
  AnimationOptions,
  ChartDataset,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { formatIntervalMinMax } from '../../../utils/formatters';

export interface BooleanPieChartProps {
  data: {
    labels: string[];
    counts: number[];
    ratios: number[];
  };
  animation?: AnimationOptions<'pie'>['animation'];
}
/**
 * A pie chart that visualizes boolean dataset
 * @param data the counts labels & values
 * @returns a pie chart that shows the composition: null + invalid + trues + falses = 100%
 */
export function BooleanPieChart({
  data: { counts, labels, ratios },
  animation = false,
}: BooleanPieChartProps) {
  ChartJS.register(ArcElement);
  const chartOptions = getBooleanPieChartOptions(
    {
      animation,
    },
    ratios,
  );
  const chartData = getBooleanPieChartData(labels, {
    data: counts,
  });
  return (
    <Pie data={chartData} options={chartOptions} plugins={[Tooltip, Legend]} />
  );
}

/**
 * @param labels labels for each pie slice
 * @param dataset single dataset for the pie
 */
export const getBooleanPieChartData = (
  labels: string[],
  dataset: ChartDataset<'pie'>,
): ChartData<'pie'> => {
  return {
    labels,
    datasets: [
      {
        borderWidth: 0,
        backgroundColor: ['#63B3ED', '#D9D9D9', '#FF0861', '#FFCF36'],
        hoverOffset: 4,
        ...dataset,
      },
    ],
  };
};
/**
 * @param param0  chart option overrides
 * @param ratios list of {v} / total ratio metric
 */
export const getBooleanPieChartOptions = (
  { ...configOverrides }: ChartOptions<'pie'> = {},
  ratios: BooleanPieChartProps['data']['ratios'],
): ChartOptions<'pie'> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        position: 'left',
        labels: {
          textAlign: 'left',
          boxHeight: 15,
          boxWidth: 15,
          generateLabels({ data: { datasets, labels } }) {
            return datasets[0].data.map((data, i) => ({
              text: `${labels?.[i]} \n ${formatIntervalMinMax(
                ratios[i],
              )} / ${data}`,
              fillStyle: datasets?.[0]?.backgroundColor?.[i],
            }));
          },
        },
      },
    },
    ...configOverrides,
  };
};
