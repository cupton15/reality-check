import React, { useState } from 'react';
import './App.css';
import SalaryResults from './components/salary results/SalaryResults';
import SalaryCheckForm from './components/salary check form/SalaryCheckForm';
import JobInformation from './types/JobInformation';
import Header from './components/header/Header';
import Button from './components/shared/Button';
import Octocat from './Octocat.png';

function App(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const [jobInfo, setJobInfo] = useState<JobInformation>();
  const onSubmit = (data: JobInformation) => {
    setSubmitted(true);
    setJobInfo(data);
  };

  const reset = () => {
    setSubmitted(false);
  };

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-header text-gray-500">
      <Header />

      <div className="App flex flex-col self-center items-center justify-items-center">
        {!submitted && <SalaryCheckForm onSubmit={onSubmit} />}
        {submitted && jobInfo && <SalaryResults jobInfo={jobInfo} />}
        {submitted && <Button text="Reset" onClick={reset} />}
      </div>

      <a
        href="https://github.com/cupton15/reality-check"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit the github repo for Reality check (opens in a new tab)"
        className="self-end m-2 w-12"
      >
        <img src={Octocat} alt="GitHub Octocat" className="h-12" />
      </a>
    </div>
  );
}

export default App;
