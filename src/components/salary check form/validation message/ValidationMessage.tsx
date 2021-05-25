import React from 'react';

type ValidationProps = {
  children: React.ReactNode;
};

export default function ValidationMessage({ children }: ValidationProps) {
  return <span role="alert">{children}</span>;
}
