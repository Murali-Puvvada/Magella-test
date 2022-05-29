/* eslint-disable max-len */
import React from 'react';

export default function Compare({ color = '#1a1f18', ...rest }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M5.608 9.2H0v1.6h5.608v2.4L8.8 10 5.608 6.8v2.4zm4.784-.8V6H16V4.4h-5.608V2L7.2 5.2l3.192 3.2z" fill={color} />
    </svg>
  );
}
