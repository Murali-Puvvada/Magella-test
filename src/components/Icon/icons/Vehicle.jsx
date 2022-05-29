/* eslint-disable max-len */
import React from 'react';

export default function Vehicle({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23" {...rest}>
      <g stroke={color} strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 14.61c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2v-4c0-1.1045695.8954305-2 2-2l.27-4.09 2-3h13.49l2 3L21 8.61c1.1045695 0 2 .8954305 2 2v4z" />
        <path d="M5.73 16.61v2.73c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2v-6.25M23 13.48v5.86c0 1.1045695-.8954305 2-2 2h-.73c-1.1045695 0-2-.8954305-2-2v-2.73M3 8.61h18M4.47 12.71h2.52M17.03 12.71h2.53" />
      </g>
    </svg>
  );
}
