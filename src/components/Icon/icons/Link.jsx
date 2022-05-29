/* eslint-disable max-len */
import React from 'react';

export default function Link({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 10" {...rest}>
      <g fill="none" fillRule="evenodd" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M11.1818 1h2.1818A3.6364 3.6364 0 0 1 17 4.6364c0 2.0083-1.628 3.6363-3.6364 3.6363h-2.1818m-4.3636 0H4.6364A3.6364 3.6364 0 0 1 1 4.6364C1 2.628 2.628 1 4.6364 1h2.1818M6.091 4.6364h5.818" />
      </g>
    </svg>
  );
}
