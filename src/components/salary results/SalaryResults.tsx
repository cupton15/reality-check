import React from 'react';
import ukJobData from '../../data/UK salaries.json';
import JobInformation from '../../types/JobInformation';

type ResultProps = {
  jobInfo: JobInformation;
};

export default function SalaryResults({ jobInfo }: ResultProps) {
  const medianPercentage: number =
    (jobInfo.salary / ukJobData.fullTime[0].medianSalary) * 100;

  let resultText: string;
  if (medianPercentage < 100) {
    resultText = `${(100 - medianPercentage).toFixed(2)}% lower than`;
  } else if (medianPercentage > 100) {
    resultText = `${(medianPercentage - 100).toFixed(2)}% higher than`;
  } else {
    resultText = 'the exact same as';
  }

  return <span>Your salary is {resultText} the national median</span>;
}
