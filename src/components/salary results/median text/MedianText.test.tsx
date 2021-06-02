import { render, screen } from '@testing-library/react';
import React from 'react';
import MedianText from './MedianText';

jest.mock(
  '../../../data/UK salaries.json',
  () => ({
    fullTime: [
      {
        location: 'United Kingdom',
        medianSalary: 100,
      },
    ],
  }),
  { virtual: true }
);

describe('SalaryResults', () => {
  it('should display correct text when salary is lower than the median', async () => {
    render(<MedianText salary={10} />);
    const text = '90.00% lower than';
    const element = screen.getByText(text);
    expect(element).not.toBeNull();
  });

  it('should display correct text when salary is higher than the median', async () => {
    render(<MedianText salary={110} />);
    const text = '10.00';
    const element = screen.getByText(text, { exact: false });
    expect(element).not.toBeNull();
  });

  it('should display correct text when salary is equal to the median', async () => {
    render(<MedianText salary={100} />);
    const text = 'the exact same as';
    const element = screen.getByText(text);
    expect(element).not.toBeNull();
  });
});
