import React from 'react';
import './App.css';
import SalaryCheckForm from './components/salary check form/SalaryCheckForm';

function App() {
  const onSubmit = (data: { salary: number }) => {
    console.log(data);
  };

  return (
    <div className="App">
      <SalaryCheckForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
