/* eslint-disable max-len */
import React from 'react';

export default function Profile({ ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" {...rest}>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <path className="fill-green-when-active" d="M16 18.7V16a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v2.7" />
        <path className="stroke-black-when-active" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 18v-2a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v2" />
        <circle cx="8" cy="4" r="4" className="stroke-black-when-active" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
