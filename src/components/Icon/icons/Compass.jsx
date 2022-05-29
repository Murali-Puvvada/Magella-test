/* eslint-disable max-len */
import React from 'react';

export default function Compass({ ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill="none" fillRule="evenodd">
        <path d="M-26-20h75v64h-75z" />
        <g className="stroke-black-when-active" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(2 2)">
          <circle cx="10" cy="10" r="10" />
          <path className="fill-green-when-active" d="M14.24 5.76l-2.12 6.36-6.36 2.12 2.12-6.36z" />
        </g>
      </g>
    </svg>
  );
}
