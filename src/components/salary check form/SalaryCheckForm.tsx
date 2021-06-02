/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import ValidationMessage from './validation message/ValidationMessage';
import JobInformation from '../../types/JobInformation';
import { ReactComponent as PoundSign } from '../../solid_pound_sign.svg';
import Button from '../shared/Button';

type FormProps = {
  onSubmit: (data: JobInformation) => void;
};

export default function SalaryCheckForm({ onSubmit }: FormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobInformation>();
  const submitHandler = handleSubmit((data) => onSubmit(data));

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-screen md:w-3/4 p-5 gap-y-8"
    >
      <label htmlFor="salary" className="relative">
        <PoundSign
          className="w-6 h-6 text-gray-400 absolute left-2 top-1/6"
          fill="currentColor"
        />
        <input
          id="salary"
          type="text"
          placeholder="Enter Salary"
          aria-label="Enter Salary"
          aria-invalid={errors.salary ? 'true' : 'false'}
          className="focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none w-full border border-gray-200 rounded-md text-sm text-black placeholder-gray-500 py-2 pl-10"
          {...register('salary', { required: true })}
        />
      </label>
      {errors.salary && errors.salary.type === 'required' && (
        <ValidationMessage>Salary is required</ValidationMessage>
      )}
      <Button text="Compare Salary" />
    </form>
  );
}
