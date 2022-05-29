import classNames from "classnames";
import React from "react";
import { Helmet } from "react-helmet";

import ScrollToTop from "Components/ScrollToTop";

import styles from "./page.module.css";
import PageHeader from "./PageHeader";

export default function Page({
  title,
  className,
  scrollToTop,
  breadcrumbs,
  children,
}) {
  return (
    <div className={classNames(styles.page, className)}>
      <Helmet>
        <title itemProp="name" lang="en">{`${title}`}</title>
      </Helmet>

      {scrollToTop && <ScrollToTop />}

      {breadcrumbs && <PageHeader breadcrumbs={breadcrumbs} />}

      <div className={styles.content}>{children}</div>
    </div>
  );
}
