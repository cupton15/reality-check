/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ReactComponent as Chevron } from '../../chevron-down-solid.svg';

type SelectProps = {
  id: string;
  name: string;
  children: React.ReactNode;
};

export default function Select({
  id,
  name,
  children,
}: SelectProps): JSX.Element {
  const { register } = useFormContext();
  const formattedName = name.replace(/([A-Z])/g, ' $1').toLowerCase();
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {`Select an ${formattedName}`}
      </label>
      <Chevron className="w-6 h-6 absolute right-2 top-3" fill="currentColor" />
      <select
        id={id}
        {...register(name)}
        className="focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none w-full border border-gray-200 rounded-md p-2 bg-white appearance-none"
      >
        {children}
      </select>
    </div>
  );
}
