import classNames from 'classnames';
import React from 'react';

import styles from '../headline.module.css';

import primaryStyles from './primary.module.css';

export default function Primary({
  children,
  className,
  margin,
  center,
  large,
  ...props
}) {
  const cls = classNames(
    className,
    styles.headline,
    primaryStyles.primary,
    {
      [styles.center]: center,
      [primaryStyles.large]: large,
      [styles.verticalSpaceTop]: margin && margin.split(' ').includes('top'),
      [styles.verticalSpaceTopLarge]: margin && margin.split(' ').includes('top-large'),
      [styles.verticalSpaceBottom]: margin && margin.split(' ').includes('bottom'),
      [styles.verticalSpaceBottomLarge]: margin && margin.split(' ').includes('bottom-large'),
    },
  );

  return (
    <h1 className={cls} {...props}>
      {children}
    </h1>
  );
}
