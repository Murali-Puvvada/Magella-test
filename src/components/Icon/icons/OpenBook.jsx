import React from 'react';

export default function OpenBook({ ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20" {...rest}>
      <g
        fill="none"
        fillRule="evenodd"
        className="stroke-black-when-active"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path className="fill-green-when-active" d="M1 1h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H1V1z" />
        <path d="M21 1h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V1z" />
      </g>
    </svg>
  );
}
