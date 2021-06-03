import React from 'react';
import { render, screen } from '@testing-library/react';
import PercentileText from './PercentileText';

describe('PercentileText', () => {
  const percentiles = [
    { percentile: '10th', value: 10 },
    { percentile: '25th', value: 25 },
    { percentile: '75th', value: 75 },
    { percentile: '90th', value: 90 },
  ];

  it('should show the correct percentile', () => {
    render(<PercentileText percentiles={percentiles} salary={46} />);
    const element = screen.getByText('This puts you in the 25th percentile');
    expect(element).not.toBeNull();
  });

  it('should show the correct lowest percentile', () => {
    render(<PercentileText percentiles={percentiles} salary={9} />);
    const element = screen.getByText('This puts you in the lowest percentile');
    expect(element).not.toBeNull();
  });

  it('should show the correct highest percentile', () => {
    render(<PercentileText percentiles={percentiles} salary={100} />);
    const element = screen.getByText('This puts you in the 90th percentile');
    expect(element).not.toBeNull();
  });

  it('should show the correct percentile when salary is the exact same', () => {
    render(<PercentileText percentiles={percentiles} salary={75} />);
    const element = screen.getByText('This puts you in the 75th percentile');
    expect(element).not.toBeNull();
  });
});
