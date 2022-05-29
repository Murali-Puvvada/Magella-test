import React from 'react';
import { NavLink } from 'react-router-dom';

import Color from 'Components/Color';
import Icon from 'Components/Icon';

import styles from './pageHeader.module.css';

export default function PageHeader({
  breadcrumbs = [],
}) {
  return (
    <header className={styles.header}>
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.name}>
          <NavLink to={breadcrumb.url} className={styles.link}>{breadcrumb.name}</NavLink>
          {index + 1 !== breadcrumbs.length && (
            <Icon.Chevron direction="right" className={styles.chevron} width="14px" color={Color.GREY_LIGHT} />
          )}
        </div>
      ))}
    </header>
  );
}
