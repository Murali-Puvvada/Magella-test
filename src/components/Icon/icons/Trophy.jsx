/* eslint-disable max-len */
import React from 'react';

export default function Trophy({ color = '#1a1f18', ...rest }) {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clipPath="url(#clip0)">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.22 2.22A.75.75 0 013.75 2h16.5a.75.75 0 01.75.75v3.751a9 9 0 01-18 0V2.75a.75.75 0 01.22-.53zm8.026 14.754A10.5 10.5 0 011.5 6.5V2.75A2.25 2.25 0 013.75.5h16.5a2.25 2.25 0 012.25 2.25v3.751a10.5 10.5 0 01-9.754 10.473v1.563a7.502 7.502 0 016.322 4.963.75.75 0 01-.707 1H5.631a.75.75 0 01-.707-1 7.501 7.501 0 016.322-4.963v-1.563zM17.03 5.09a.75.75 0 00-1.06-1.06L10.5 9.499 8.78 7.781a.75.75 0 00-1.06 1.06l1.72 1.719a1.5 1.5 0 002.12 0l5.47-5.469zm-8.499 16.01A6.001 6.001 0 0117.193 23H6.8a6.002 6.002 0 011.732-1.9z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
