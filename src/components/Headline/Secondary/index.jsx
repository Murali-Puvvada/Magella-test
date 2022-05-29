import classNames from 'classnames';
import React from 'react';

import styles from '../headline.module.css';

import secondaryStyles from './secondary.module.css';

export default function Secondary({
  children,
  className,
  color,
  center,
  margin,
  ...props
}) {
  const cls = classNames(
    className,
    styles.headline,
    secondaryStyles.secondary,
    {
      [styles.center]: center,
      [styles.verticalSpaceTop]: margin && margin.split(' ').includes('top'),
      [styles.verticalSpaceTopLarge]: margin && margin.split(' ').includes('top-large'),
      [styles.verticalSpaceBottom]: margin && margin.split(' ').includes('bottom'),
      [styles.verticalSpaceBottomLarge]: margin && margin.split(' ').includes('bottom-large'),
    },
  );

  return (
    <h2 className={cls} {...props}>
      {children}
    </h2>
  );
}
