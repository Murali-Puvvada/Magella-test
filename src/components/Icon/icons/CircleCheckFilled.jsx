import React from 'react';

export default function CircleCheckFilled({ color = '#279a84', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" {...rest}>
      <g fill="none" fillRule="evenodd">
        <circle fill={color} cx="13" cy="13" r="13" />
        <path d="M11 19.42l-5-5 1.41-1.41L11 16.59 18.59 9 20 10.42z" fill="#FFF" />
      </g>
    </svg>
  );
}
