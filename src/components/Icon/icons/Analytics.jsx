/* eslint-disable max-len */
import React from 'react';

export default function Animal({ color = '#1a1f18', ...rest }) {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clipPath="url(#clip0)">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.409 1.159a2.25 2.25 0 013.838 1.47l8.68 2.552a2.253 2.253 0 011.823-.931 2.25 2.25 0 11-2.247 2.37l-8.68-2.552a2.25 2.25 0 01-2.587.799L4.175 9.833a2.25 2.25 0 11-1.161-.95l4.063-4.966a2.25 2.25 0 01.333-2.758zm2.313 1.793a.707.707 0 00-.005.019.75.75 0 11.005-.019zM1.72 10.47a.75.75 0 111.06 1.06.75.75 0 01-1.06-1.06zm8.78-.97A1.5 1.5 0 009 11v12H7.5v-4.5A1.5 1.5 0 006 17H3a1.5 1.5 0 00-1.5 1.5V23H.75a.75.75 0 000 1.5h22.5a.75.75 0 000-1.5h-.75v-7.5A1.5 1.5 0 0021 14h-3a1.5 1.5 0 00-1.5 1.5V23H15V11a1.5 1.5 0 00-1.5-1.5h-3zm10.5 6V23h-3v-7.5h3zM13.5 11h-3v12h3V11zM6 18.5V23H3v-4.5h3zM21.22 5.97a.75.75 0 111.06 1.06.75.75 0 01-1.06-1.06z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

