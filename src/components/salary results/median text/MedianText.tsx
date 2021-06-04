import React from 'react';

type MedianProps = {
  salary: number;
  medianSalary: number;
};

export default function MedianText({
  salary,
  medianSalary,
}: MedianProps): JSX.Element {
  const medianPercentage: number = (salary / medianSalary) * 100;

  let resultText: JSX.Element;
  if (medianPercentage < 100) {
    resultText = (
      <span>{`${(100 - medianPercentage).toFixed(2)}% lower than`}</span>
    );
  } else if (medianPercentage > 100) {
    resultText = (
      <span>
        <span style={{ color: '#32CD32' }}>
          {(medianPercentage - 100).toFixed(2)}
        </span>
        % higher than
      </span>
    );
  } else {
    resultText = <span>the exact same as</span>;
  }

  return (
    <p>
      Your salary is {resultText} the national median of&nbsp;
      {Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      }).format(medianSalary)}
    </p>
  );
}
