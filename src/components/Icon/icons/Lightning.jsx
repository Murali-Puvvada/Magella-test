/* eslint-disable max-len */
import React from 'react';

export default function Notepad({ color = '#1a1f18', ...rest }) {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clipPath="url(#clip0)">
        <path d="M17.789.5h-7.7a1.5 1.5 0 00-1.375.9l-4.59 10.5a1.501 1.501 0 00.667 1.92c.22.117.465.178.714.177h2.959l-4.052 9.454c-.325.76.636 1.41 1.22.826l13.72-13.716A1.5 1.5 0 0018.292 8H14.91l4.05-5.063A1.499 1.499 0 0017.788.5zm-7.7 1.5h7.7l-4.05 5.064a1.5 1.5 0 001.17 2.436h3.383L7.324 20.465l2.52-5.877a1.501 1.501 0 00-.667-1.91l-.095-.048a1.5 1.5 0 00-.616-.133H5.5L10.09 2z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

