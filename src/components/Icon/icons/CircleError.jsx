/* eslint-disable max-len */
import React from 'react';

export default function CircleError({ color = '#FB6620', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...rest}>
      <g fill="none" fillRule="evenodd">
        <circle stroke={color} strokeWidth="2" cx="16" cy="16" r="15" />
        <path d="M21.734 10.275a.906.906 0 00-1.283 0L16 14.717l-4.45-4.45a.906.906 0 10-1.284 1.282L14.716 16l-4.45 4.45a.906.906 0 101.283 1.284L16 17.284l4.45 4.45a.906.906 0 101.284-1.284L17.284 16l4.45-4.45a.912.912 0 000-1.275z" fill={color} />
      </g>
    </svg>
  );
}
