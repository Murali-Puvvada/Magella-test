import classNames from 'classnames';
import React from 'react';

import styles from '../paragraph.module.css';

import secondaryStyles from './secondary.module.css';

export default ({
  children,
  className,
  margin,
  color,
  center,
  ...props
}) => {
  const cls = classNames(
    className,
    styles.paragraph,
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
    <p className={cls} {...props}>
      {children}
    </p>
  );
};
