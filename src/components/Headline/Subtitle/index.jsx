import classNames from 'classnames';
import React from 'react';

import styles from '../headline.module.css';

import subtitleStyles from './subtitle.module.css';

export default function Subtitle({
  children,
  className,
  margin,
  center,
  color,
  ...props
}) {
  const cls = classNames(
    className,
    styles.headline,
    subtitleStyles.subtitle,
    {
      [styles.center]: center,
      [styles.verticalSpaceTop]: margin && margin.split(' ').includes('top'),
      [styles.verticalSpaceTopLarge]: margin && margin.split(' ').includes('top-large'),
      [styles.verticalSpaceBottom]: margin && margin.split(' ').includes('bottom'),
      [styles.verticalSpaceBottomLarge]: margin && margin.split(' ').includes('bottom-large'),
    },
  );

  return (
    <h3 className={cls} {...props}>
      {children}
    </h3>
  );
}
