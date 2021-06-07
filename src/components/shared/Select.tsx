/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormContext } from 'react-hook-form';

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
    <>
      <label htmlFor={id} className="sr-only">
        {`Select ${formattedName}`}
      </label>
      <select
        id={id}
        {...register(name)}
        className="w-full border border-gray-200 rounded-md p-2 bg-white appearance-none"
      >
        {children}
      </select>
    </>
  );
}
