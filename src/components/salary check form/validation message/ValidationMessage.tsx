import React from 'react';
import { ReactComponent as WarningSign } from '../../../exclamation_triangle_solid.svg';

type ValidationProps = {
  children: React.ReactNode;
};

export default function ValidationMessage({
  children,
}: ValidationProps): JSX.Element {
  return (
    <div className="flex gap-x-2 py-1">
      <WarningSign className="w-5 h-5 text-red-600" fill="currentColor" />
      <p role="alert" className="text-sm text-red-600 text-left">
        {children}
      </p>
    </div>
  );
}
