/* eslint-disable max-len */
import React from 'react';

export default function Close({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...rest}>
      <path fill={color} fillRule="evenodd" d="M15.167.844a1.137 1.137 0 00-1.603 0L8 6.396 2.436.833A1.133 1.133 0 10.833 2.436L6.396 8 .833 13.564a1.133 1.133 0 101.603 1.603L8 9.604l5.564 5.563a1.133 1.133 0 101.603-1.603L9.604 8l5.563-5.564a1.14 1.14 0 000-1.592z" />
    </svg>
  );
}
