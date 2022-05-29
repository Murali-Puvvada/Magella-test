import classNames from 'classnames';
import React from 'react';

import styles from '../paragraph.module.css';

export default ({
  children,
  margin,
  center,
  className,
  ...props
}) => {
  const cls = classNames(
    className,
    styles.paragraph,
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
