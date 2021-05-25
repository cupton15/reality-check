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
    const text = 'Your salary is 90.00% lower than the national median';
    const element = screen.getByText(text);
    expect(element).not.toBeNull();
  });

  it('should display correct text when salary is higher than the median', async () => {
    render(<MedianText salary={110} />);
    const text = 'Your salary is 10.00% higher than the national median';
    const element = screen.getByText(text);
    expect(element).not.toBeNull();
  });

  it('should display correct text when salary is equal to the median', async () => {
    render(<MedianText salary={100} />);
    const text = 'Your salary is the exact same as the national median';
    const element = screen.getByText(text);
    expect(element).not.toBeNull();
  });
});
