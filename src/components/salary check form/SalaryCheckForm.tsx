/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import ValidationMessage from './validation message/ValidationMessage';
import JobInformation from '../../types/JobInformation';

type FormProps = {
  onSubmit: (data: JobInformation) => void;
};

export default function SalaryCheckForm({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobInformation>();
  const submitHandler = handleSubmit((data) => onSubmit(data));

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col space-y-6 space-x-2"
    >
      <label htmlFor="salary">
        Salary
        <input
          id="salary"
          type="text"
          aria-invalid={errors.salary ? 'true' : 'false'}
          {...register('salary', { required: true })}
        />
      </label>
      {errors.salary && errors.salary.type === 'required' && (
        <ValidationMessage>Salary is required</ValidationMessage>
      )}
      <button type="submit">Compare Salary</button>
    </form>
  );
}
