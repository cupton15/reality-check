import React, { Fragment, useState } from 'react';
import './App.css';
import SalaryResults from './components/salary results/SalaryResults';
import SalaryCheckForm from './components/salary check form/SalaryCheckForm';
import JobInformation from './types/JobInformation';
import Header from './components/header/Header';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [jobInfo, setJobInfo] = useState<JobInformation>();
  const onSubmit = (data: JobInformation) => {
    setSubmitted(true);
    setJobInfo(data);
  };

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-header">
      <Header />

      <div className="App self-center">
        {!submitted && <SalaryCheckForm onSubmit={onSubmit} />}
        {submitted && jobInfo && <SalaryResults jobInfo={jobInfo} />}
      </div>
    </div>
  );
}

export default App;
