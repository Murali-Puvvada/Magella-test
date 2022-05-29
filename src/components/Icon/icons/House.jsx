/* eslint-disable max-len */
import React from 'react';

export default function House({ color = '#1a1f18', ...rest }) {
  return (
    <svg viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.535.157a.78.78 0 01.94 0L22.83 7.97l.06.05a1.905 1.905 0 01.609 1.335v11.937A1.715 1.715 0 0121.79 23H15.573a.78.78 0 01-.78-.78v-5.002a2.793 2.793 0 00-5.587 0v5c0 .43-.349.78-.78.78H2.21A1.714 1.714 0 01.5 21.287V9.355l.001-.043A1.901 1.901 0 011.17 7.97L11.535.157zM2.148 9.185a.342.342 0 00-.088.198v11.901a.155.155 0 00.153.154h5.434v-4.22a4.352 4.352 0 018.706 0v4.223h5.433a.156.156 0 00.154-.155V9.383a.345.345 0 00-.089-.198l-9.846-7.429-9.857 7.43z" fill={color} />
    </svg>
  );
}
