/* eslint-disable max-len */
import React from 'react';

export default function Chevron({ color = '#1A1F18', direction = 'right', ...rest }) {
  let d = '';

  if (direction === 'down') {
    d = 'M.293 3.293a1 1 0 011.32-.083l.094.083L8 9.585l6.293-6.292a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-7 7a1 1 0 01-1.32.083l-.094-.083-7-7a1 1 0 010-1.414z';
  } else if (direction === 'right') {
    d = 'M4.293 15.707a1 1 0 01-.083-1.32l.083-.094L10.585 8 4.293 1.707A1 1 0 014.21.387l.083-.094A1 1 0 015.613.21l.094.083 7 7a1 1 0 01.083 1.32l-.083.094-7 7a1 1 0 01-1.414 0z';
  } else if (direction === 'up') {
    d = 'M.293 11.707a1 1 0 001.32.083l.094-.083L8 5.415l6.293 6.292a1 1 0 001.32.083l.094-.083a1 1 0 00.083-1.32l-.083-.094-7-7a1 1 0 00-1.32-.083l-.094.083-7 7a1 1 0 000 1.414z';
  } else if (direction === 'left') {
    d = 'M11.707 15.707a1 1 0 00.083-1.32l-.083-.094L5.415 8l6.292-6.293a1 1 0 00.083-1.32l-.083-.094a1 1 0 00-1.32-.083l-.094.083-7 7a1 1 0 00-.083 1.32l.083.094 7 7a1 1 0 001.414 0z';
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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
