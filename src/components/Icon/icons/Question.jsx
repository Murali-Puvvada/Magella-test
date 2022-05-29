/* eslint-disable max-len */
import React from 'react';

export default function Close({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...rest}>
      <path fill={color} fillRule="evenodd" d="M6.8 12.9h2.1V15H6.8v-2.1M8.2 1c3.745.154 5.376 3.934 3.15 6.769-.581.7-1.519 1.162-1.981 1.75C8.9 10.1 8.9 10.8 8.9 11.5H6.8c0-1.169 0-2.156.469-2.856.462-.7 1.4-1.113 1.981-1.575C10.944 5.501 10.524 3.282 8.2 3.1c-1.16 0-2.1.94-2.1 2.1H4C4 2.88 5.88 1 8.2 1z" />
    </svg>
  );
}
