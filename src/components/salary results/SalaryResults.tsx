import React from 'react';
import ukJobData from '../../data/UK salaries.json';
import JobInformation from '../../types/JobInformation';
import MedianText from './median text/MedianText';
import PercentileText from './percentile text/PercentileText';
import SalaryChart from './salary chart/SalaryChart';

type ResultProps = {
  jobInfo: JobInformation;
};

export default function SalaryResults({ jobInfo }: ResultProps): JSX.Element {
  const salaryData =
    jobInfo.type === 'FullTime'
      ? ukJobData.fullTime[0].ageRanges[0].all
      : ukJobData.partTime[0].ageRanges[0].all;

  if (salaryData === undefined) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center text-xl md:text-4xl p-5 gap-y-2">
      <MedianText
        salary={jobInfo.salary}
        medianSalary={salaryData.medianSalary}
      />
      <PercentileText
        percentiles={salaryData.percentiles}
        salary={jobInfo.salary}
      />
      <SalaryChart
        title="UK National median salaries"
        salary={jobInfo.salary}
        percentiles={salaryData.percentiles}
      />
    </div>
  );
}
