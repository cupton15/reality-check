import React from 'react';

type ButtonProps = {
  text: string;
};

export default function SubmitButton({ text }: ButtonProps): JSX.Element {
  return (
    <button
      type="submit"
      className="bg-blue-400 h-10 border rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-white font-bold"
    >
      {text}
    </button>
  );
}
