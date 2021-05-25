import React from 'react';
import ukJobData from '../../data/UK 2020 salaries.json';
import JobInformation from '../../types/JobInformation';

type ResultProps = {
  jobInfo: JobInformation;
};

export default function SalaryResults({ jobInfo }: ResultProps) {
  const medianPercentage: number =
    (jobInfo.salary / ukJobData.fullTime[0].medianSalary) * 100;

  const percentageText: string =
    medianPercentage < 100
      ? `${(100 - medianPercentage).toFixed(2)}% lower`
      : `${(medianPercentage - 100).toFixed(2)} greater`;

  return <span>Your salary is {percentageText} than the national median</span>;
}
