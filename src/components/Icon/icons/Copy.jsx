/* eslint-disable max-len */
import React from 'react';

export default function Copy({ color = '#1a1f18', ...rest }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M13.364 14.546h-8V4.364h8v10.181zm0-11.637h-8c-.804 0-1.455.651-1.455 1.455v10.181C3.91 15.35 4.56 16 5.364 16h8c.803 0 1.454-.651 1.454-1.454V4.364c0-.804-.651-1.455-1.454-1.455zM11.182 0H2.455C1.65 0 1 .651 1 1.455v10.181h1.455V1.455h8.727V0z" fill={color} />
    </svg>
  );
}

