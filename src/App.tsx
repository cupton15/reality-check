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
    <>
      <Header />
      <div className="App h-auto grid justify-center content-center">
        {!submitted && <SalaryCheckForm onSubmit={onSubmit} />}
        {submitted && jobInfo && <SalaryResults jobInfo={jobInfo} />}
      </div>
    </>
  );
}

export default App;
