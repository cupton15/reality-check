import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="w-72 bg-blue-400 h-10 border rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none text-white font-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
