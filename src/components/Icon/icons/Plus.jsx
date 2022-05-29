/* eslint-disable max-len */
import React from 'react';

export default function Close({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...rest}>
      <path fill={color} fillRule="evenodd" d="M15.008 4.872a1.137 1.137 0 00-1.134 1.134l-.008 7.86H5.998a1.133 1.133 0 100 2.268h7.868v7.868a1.133 1.133 0 102.268 0v-7.868h7.868a1.133 1.133 0 100-2.268h-7.868V5.998a1.14 1.14 0 00-1.126-1.126z" />
    </svg>
  );
}
