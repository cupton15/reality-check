/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ValidationMessage from './validation message/ValidationMessage';
import JobInformation from '../../types/JobInformation';
import { ReactComponent as PoundSign } from '../../solid_pound_sign.svg';
import SubmitButton from '../shared/SubmitButton';

type FormProps = {
  onSubmit: (data: JobInformation) => void;
};

const schema = yup.object().shape({
  salary: yup
    .number()
    .transform((x) => (Number.isNaN(x) ? undefined : x))
    .positive('Must provide a positive salary')
    .required('Must provide a salary'),
});

export default function SalaryCheckForm({ onSubmit }: FormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobInformation>({ resolver: yupResolver(schema) });
  const submitHandler = handleSubmit((data) => onSubmit(data));

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-screen md:w-1/2 p-5 gap-y-8"
    >
      <div className="relative text-gray-400 focus-within:text-gray-600 ">
        <label htmlFor="salary">
          <PoundSign
            className="w-6 h-6 absolute left-2 top-2"
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
        {errors.salary && (
          <ValidationMessage>{errors.salary.message}</ValidationMessage>
        )}
      </div>
      <SubmitButton text="Compare Salary" />
    </form>
  );
}
