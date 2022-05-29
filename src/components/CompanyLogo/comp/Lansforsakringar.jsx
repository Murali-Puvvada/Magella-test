/* eslint-disable max-len */
import React from 'react';

export default ({ className, ...rest }) => (
  <svg className={className} viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <defs><circle id="a" cx="75" cy="75" r="75" /></defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff"><use xlinkHref="#a" /></mask>
      <use fill="#FFF" xlinkHref="#a" />
      <g mask="url(#b)" fillRule="nonzero">
        <path fill="#E30613" d="M55 52h43v43H55z" />
        <path fill="#005AA0" d="M55 42.857V0h95v150h-42.222V42.857z" />
        <path fill="#005AA0" d="M42.222 0v107.143H95V150H0V0z" />
      </g>
    </g>
  </svg>
);
