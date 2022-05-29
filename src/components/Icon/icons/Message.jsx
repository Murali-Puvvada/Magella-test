/* eslint-disable max-len */
import React from 'react';

export default function Message({ color = '#1a1f18', ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...rest}>
      <path fill={color} fillRule="evenodd" d="M16.806.313H3.194C1.603.313.313 1.603.313 3.193V18.75l.008.128c.097.748 1.032 1.094 1.592.535l3.614-3.616 11.279.002c1.591 0 2.881-1.29 2.881-2.882V3.194c0-1.591-1.29-2.881-2.881-2.881zM3.194 2.188h13.612c.556 0 1.006.45 1.006 1.006v9.723c0 .556-.45 1.007-1.006 1.007H5.139l-.148.011c-.194.031-.374.123-.515.263l-2.288 2.287V3.195c0-.557.45-1.007 1.006-1.007z" />
    </svg>
  );
}
