/* eslint-disable max-len */
import React from 'react';

export default function Clock({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...rest}>
      <path fill={color} fillRule="evenodd" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-.636 6c.69 0 1.26.513 1.35 1.179l.013.185v7.067l4.519 2.258c.617.309.898 1.023.681 1.658l-.071.171c-.309.618-1.023.899-1.659.682l-.17-.072-5.273-2.636c-.404-.202-.678-.589-.74-1.028L14 17.272V9.364C14 8.61 14.61 8 15.364 8z" />
    </svg>
  );
}
