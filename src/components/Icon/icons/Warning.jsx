/* eslint-disable max-len */
import React from 'react';

export default function Close({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" {...rest}>
      <path fill={color} fillRule="nonzero" d="M2 11H0V9h2v2zM1 0C.45 0 0 .525 0 1.1667v4.6666C0 6.475.45 7 1 7s1-.525 1-1.1667V1.1667C2 .525 1.55 0 1 0z" />
    </svg>
  );
}
