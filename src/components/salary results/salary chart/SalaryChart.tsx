import React from 'react';
import { Bar } from 'react-chartjs-2';
import Percentile from '../../../types/Percentile';

type ChartProps = {
  title: string;
  salary: number;
  percentiles: Percentile[];
};

export default function SalaryChart({
  title,
  salary,
  percentiles,
}: ChartProps): JSX.Element {
  const data: number[] = percentiles.flatMap((p) => p.value);
  data.push(salary);
  data.sort((a, b) => a - b);

  percentiles.sort((a, b) => a.value - b.value);
  const labels: string[] = percentiles.flatMap((p) => p.percentile);
  const salaryIndex = data.indexOf(salary);
  labels.splice(salaryIndex, 0, 'Your salary');

  const backgroundColor: string[] = Array(percentiles.length).fill(
    'rgba(75, 192, 192, 1)'
  );
  backgroundColor.splice(salaryIndex, 0, 'rgba(255, 99, 132, 1)');

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
      },
    ],
  };

  const accessibilityArray: string[] = labels.map(
    (l, i) => `${l} percentile: £${data[i]}`
  );

  return (
    <Bar
      type="bar"
      data={chartData}
      aria-label={`A bar chart showing the ${title} into percentiles which are as follows: ${accessibilityArray.join(
        ', '
      )}`}
      options={{
        scales: {
          xAxis: {
            title: { display: true, text: 'Percentile' },
          },
          yAxis: {
            title: { display: true, text: 'Median salary' },
            ticks: {
              format: {
                style: 'currency',
                currency: 'GBP',
              },
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: title,
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
