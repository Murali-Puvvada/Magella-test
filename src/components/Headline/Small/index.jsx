import classNames from 'classnames';
import React from 'react';

import styles from '../headline.module.css';

import smallStyles from './small.module.css';

export default function Small({
  children,
  className,
  margin,
  color,
  center,
  ...props
}) {
  const cls = classNames(
    className,
    styles.headline,
    smallStyles.small,
    {
      [styles.center]: center,
      [styles.verticalSpaceTop]: margin && margin.split(' ').includes('top'),
      [styles.verticalSpaceTopLarge]: margin && margin.split(' ').includes('top-large'),
      [styles.verticalSpaceBottom]: margin && margin.split(' ').includes('bottom'),
      [styles.verticalSpaceBottomLarge]: margin && margin.split(' ').includes('bottom-large'),
    },
  );

  return (
    <h4 className={cls} {...props}>
      {children}
    </h4>
  );
}
