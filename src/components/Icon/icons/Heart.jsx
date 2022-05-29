/* eslint-disable max-len */
import React from 'react';

export default function Heart({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...rest}>
      <path fill={color} fillRule="evenodd" d="M11.273 1.338c-1.128.05-2.2.52-3.001 1.322l-.273.271-.272-.271a4.525 4.525 0 10-6.401 6.401l6.202 6.203c.26.26.683.26.943 0l6.203-6.203a4.526 4.526 0 00-3.201-7.728l-.2.005zm.2 1.329a3.19 3.19 0 013.194 3.193l-.005.17a3.19 3.19 0 01-.93 2.088L7.998 13.85 2.27 8.12a3.195 3.195 0 014.516-4.517l.743.744c.26.26.683.26.943 0l.744-.744a3.193 3.193 0 012.258-.935z" />
    </svg>
  );
}
