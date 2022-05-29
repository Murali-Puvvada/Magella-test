/* eslint-disable react/no-unknown-property */
import React from 'react';

export default function Avanza({ className, ...rest }) {
  return (
    <svg className={className} viewBox="0 0 152 152" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g transform="translate(1 1)" fillRule="nonzero" fill="none">
        <circle stroke="#E1E1E1" strokeWidth="2" cx="75" cy="75" r="75" />
        <g fill="#00C281">
          <path d="M37 86h12v34H37zM59 76h12v43H59zM80 63h12v56H80zM102 31h12v88h-12z" />
        </g>
      </g>
    </svg>
  );
}
