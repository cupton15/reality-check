/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  salary: Number;
};

export default function SalaryCheckForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="salary-input">
        Salary
        <input id="salary-input" type="number" {...register('salary')} />
      </label>
      <input type="submit" />
    </form>
  );
}
