import React, { useState } from 'react';
import './App.css';
import SalaryResults from './components/salary results/SalaryResults';
import SalaryCheckForm from './components/salary check form/SalaryCheckForm';
import JobInformation from './types/JobInformation';
import Header from './components/header/Header';
import Button from './components/shared/Button';

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
    <div className="grid h-screen grid-cols-1 grid-rows-header">
      <Header />

      <div className="App flex flex-col self-center items-center justify-items-center">
        {!submitted && <SalaryCheckForm onSubmit={onSubmit} />}
        {submitted && jobInfo && <SalaryResults jobInfo={jobInfo} />}
        {submitted && <Button text="Reset" onClick={reset} />}
      </div>
    </div>
  );
}

export default App;
