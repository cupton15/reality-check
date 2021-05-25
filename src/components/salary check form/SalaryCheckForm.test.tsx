import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SalaryCheckForm from './SalaryCheckForm';

const mockSubmit = jest.fn(({ data: JobInformation }) =>
  Promise.resolve({ data: JobInformation })
);

describe('SalaryCheckForm', () => {
  beforeEach(() => {
    render(<SalaryCheckForm onSubmit={mockSubmit} />);
  });

  it('should display required error when no salary entered', async () => {
    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Salary is required'
    );
    expect(mockSubmit).not.toBeCalled();
  });
});
