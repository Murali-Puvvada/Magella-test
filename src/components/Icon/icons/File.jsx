/* eslint-disable max-len */
import React from 'react';

export default function File({ ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <g fill="none" fillRule="evenodd">
        <g className="stroke-black-when-active" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
          <path d="M13 3v7h7" className="fill-green-when-active" />
        </g>
      </g>
    </svg>
  );
}
