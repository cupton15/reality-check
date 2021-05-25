import React from 'react';
import ukJobData from '../../../data/UK salaries.json';

type MedianProps = {
  salary: number;
};

export default function MedianText({ salary }: MedianProps): JSX.Element {
  const medianPercentage: number =
    (salary / ukJobData.fullTime[0].medianSalary) * 100;

  let resultText: string;
  if (medianPercentage < 100) {
    resultText = `${(100 - medianPercentage).toFixed(2)}% lower than`;
  } else if (medianPercentage > 100) {
    resultText = `${(medianPercentage - 100).toFixed(2)}% higher than`;
  } else {
    resultText = 'the exact same as';
  }

  return <p>Your salary is {resultText} the national median</p>;
}
