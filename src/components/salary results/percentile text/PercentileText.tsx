import React from 'react';

type PercentileProps = {
  percentiles: { percentile: string; value: number }[];
  salary: number;
};

export default function PercentileText({
  percentiles,
  salary,
}: PercentileProps): JSX.Element {
  percentiles.sort((a, b) => b.value - a.value);
  const percentileString: string | undefined = percentiles.find(
    (x) => x.value <= salary
  )?.percentile;

  if (percentileString != null) {
    return <p>This puts you in the {percentileString} percentile</p>;
  }
  return <p>This puts you in the lowest percentile</p>;
}
