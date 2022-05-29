import React from 'react';

export default function Book({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 94" {...rest}>
      <g stroke={color} strokeWidth="7" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 79c0-5.523 4.757-10 10.625-10H72" />
        <path d="M14.625 4H72v86H14.625C8.757 90 4 85.187 4 79.25v-64.5C4 8.813 8.757 4 14.625 4z" />
      </g>
    </svg>
  );
}
