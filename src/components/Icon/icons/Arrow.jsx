
/* eslint-disable max-len */
import React from 'react';

export default function Arrow({ color = '#1A1F18', direction = 'right', ...rest }) {
  let d = '';

  if (direction === 'left') {
    d = 'M15.08 6.082H3.148L7.65 1.58a.93.93 0 000-1.31.919.919 0 00-1.3 0L.27 6.35a.919.919 0 000 1.3l6.08 6.08a.919.919 0 101.3-1.3L3.148 7.926H15.08a.925.925 0 00.923-.922.925.925 0 00-.923-.923z';
  } else if (direction === 'right') {
    d = 'M.923 6.082h11.931L8.352 1.58a.93.93 0 010-1.31.919.919 0 011.301 0l6.08 6.08c.36.36.36.94 0 1.3l-6.08 6.08a.919.919 0 11-1.3-1.3l4.501-4.503H.923A.925.925 0 010 7.005c0-.508.415-.923.923-.923z';
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14"
      {...rest}
    >
      <path
        d={d}
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}
