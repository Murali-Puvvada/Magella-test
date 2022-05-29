/* eslint-disable max-len */
import React from 'react';

export default function CircleCheck({ color = '#279a84', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...rest}>
      <g fill="none" fillRule="evenodd">
        <circle stroke={color} strokeWidth="2" cx="16" cy="16" r="15" />
        <path d="M14 21.42l-5-5 1.41-1.41L14 18.59 21.59 11 23 12.42z" fill={color} />
      </g>
    </svg>
  );
}
