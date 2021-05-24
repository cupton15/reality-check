/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

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
    <form onSubmit={onSubmit}>
      <label htmlFor="salary">
        Salary
        <input
          id="salary"
          type="number"
          aria-invalid={errors.salary ? 'true' : 'false'}
          {...register('salary', { required: true })}
        />
      </label>
      {errors.salary && errors.salary.type === 'required' && (
        <span role="alert">Salary is required</span>
      )}
      <input type="submit" />
    </form>
  );
}
