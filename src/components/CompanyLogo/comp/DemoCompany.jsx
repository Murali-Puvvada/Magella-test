import React from 'react';

export default function DemoCompany({ ...rest }) {
  return (
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#000" fillRule="nonzero" cx="75" cy="75" r="75" />
        <g transform="translate(48 31)" fill="#FFF">
          <circle cx="41.667" cy="74.167" r="13.333" />
          <path d="M0 0h16.667v87.5H0z" />
        </g>
      </g>
    </svg>
  );
}
