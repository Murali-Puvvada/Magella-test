/* eslint-disable max-len */
import React from 'react';

export default function Umbrella({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <path fill="none" fillRule="evenodd" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 12c-.541-5.67-5.304-10-11-10S1.541 6.33 1 12h22zm-5 7c0 1.657-1.343 3-3 3s-3-1.343-3-3v-7" />
    </svg>
  );
}
