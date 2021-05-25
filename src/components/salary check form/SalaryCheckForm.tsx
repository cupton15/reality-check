/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import ValidationMessage from './validation message/ValidationMessage';

type FormData = {
  salary: number;
};

export default function SalaryCheckForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-6 space-x-2">
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
