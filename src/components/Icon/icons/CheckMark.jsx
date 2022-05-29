/* eslint-disable max-len */
import React from 'react';

export default function CheckMark({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...rest}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.25 11.742L0.875 7.367 2.109 6.134 5.25 9.266 11.891 2.625 13.125 3.868z"
      />
    </svg>
  );
}
