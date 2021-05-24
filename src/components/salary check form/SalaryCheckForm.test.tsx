import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SalaryCheckForm from './SalaryCheckForm';

describe('SalaryCheckForm', () => {
  beforeEach(() => {
    render(<SalaryCheckForm />);
  });

  it('should display required error when no salary entered', async () => {
    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Salary is required'
    );
  });
});
