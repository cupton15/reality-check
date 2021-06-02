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
  return (
    <div className="text-4xl p-5">
      <MedianText salary={jobInfo.salary} />
      <PercentileText
        percentiles={ukJobData.fullTime[0].percentiles}
        salary={jobInfo.salary}
      />
      <SalaryChart
        title="UK National median salaries"
        salary={jobInfo.salary}
        percentiles={ukJobData.fullTime[0].percentiles}
      />
    </div>
  );
}
