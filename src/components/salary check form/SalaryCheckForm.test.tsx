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
      'Must provide a salary'
    );
    expect(mockSubmit).not.toBeCalled();
  });

  it('should display positive error when a negative salary is entered', async () => {
    fireEvent.input(
      await screen.getByRole('textbox', { name: 'Enter Salary' }),
      {
        target: {
          value: '-1000',
        },
      }
    );
    fireEvent.submit(screen.getByRole('button'));
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Must provide a positive salary'
    );
    expect(mockSubmit).not.toBeCalled();
  });
});
