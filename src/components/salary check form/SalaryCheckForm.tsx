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
    getValues,
    formState: { errors },
  } = useForm<JobInformation>({ resolver: yupResolver(schema) });
  const submitHandler = handleSubmit((data) => onSubmit(data));

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-screen md:w-1/2 p-5 space-y-8 max-w-2xl text-gray-400 "
    >
      <div className="relative focus-within:text-gray-600 ">
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
            className="focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none w-full border border-gray-200 rounded-md text-sm placeholder-gray-400 py-2 pl-10"
            defaultValue=""
            {...register('salary', { required: true })}
          />
        </label>
        {errors.salary && (
          <ValidationMessage>{errors.salary.message}</ValidationMessage>
        )}
      </div>
      <div className="flex justify-around">
        <div>
          <input
            id="full-time"
            aria-label="Full Time"
            type="radio"
            value="FullTime"
            {...register('type')}
            className="hidden"
            defaultChecked
          />
          <label
            htmlFor="full-time"
            className="label-checked:bg-blue-400 label-checked:text-white label-checked:font-bold label-checked:border-blue-400 border border-gray-200 rounded-md p-3 cursor-pointer"
          >
            Full-Time
          </label>
        </div>
        <div>
          <input
            id="part-time"
            aria-label="Part Time"
            type="radio"
            value="PartTime"
            {...register('type')}
            className="hidden"
          />
          <label
            htmlFor="part-time"
            className="label-checked:bg-blue-400 label-checked:text-white label-checked:font-bold label-checked:border-blue-400 border border-gray-200 rounded-md p-3 cursor-pointer"
          >
            Part-Time
          </label>
        </div>
      </div>
      <SubmitButton text="Compare Salary" />
    </form>
  );
}
