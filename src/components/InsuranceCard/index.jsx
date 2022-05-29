import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import CompanyLogo from 'Components/CompanyLogo';
import Headline from 'Components/Headline';
import { SESSION_PAGE_ROUTE } from 'Services/routes';
import Utils from 'Services/utils';

import copy from './copy.json';
import styles from './insuranceCard.module.css';

export default function InsuranceCard({ insurance, className }) {
  const config = { language: 'sv' };

  const { info: { employerPaid } } = insurance;
  const link = `${SESSION_PAGE_ROUTE}/${insurance.info.id}`;

  function getMonthlyPayment() {
    if (employerPaid) return <span>Betalas av arbetsgivare</span>;
    return `${Utils.calculateMonthly(insurance.info.premiumAmountYear)} kr/mån`;
  }

  function getDateText() {
    if (insurance.expired) return `${copy.expired[config.language]} ${insurance.info.paidUntil}`;
    if (insurance.isFutureInsurance) return `${copy.activeFrom[config.language]} ${insurance.info.startDate}`;
    if (insurance.info.paidUntil) return `${copy.paidUntil[config.language]} ${insurance.info.paidUntil}`;
    return '';
  }

  function printStatus() {
    let cls = styles.status;
    let text = copy.activeStatus[config.language];

    if (insurance.isFutureInsurance && insurance.info.startDate >= new Date().toLocaleDateString('sv-SE')) {
      cls = classNames(cls, styles.statusYellow);
      text = copy.isFutureStatus[config.language];
    }

    if (insurance.expiresSoon) {
      cls = classNames(cls, styles.statusYellow);
      text = copy.expireSoonStatus[config.language];
    }

    if (insurance.expired) {
      cls = classNames(cls, styles.statusRed);
      text = copy.hasExpiredStatus[config.language];
    }

    return (
      <p className={cls}>
        {text}
      </p>
    );
  }

  return (
    <Link
      className={classNames(styles.card, className, {
        [styles.future]: insurance.isFutureInsurance,
      })}
      to={link}
    >
      <div className={styles.top}>
        <CompanyLogo className={styles.logo} company={insurance.company.insuranceCompany} />

        <div className={styles.topContent}>
          <Headline.Subtitle className={styles.title}>
            {insurance.displayType}
          </Headline.Subtitle>
          <p className={styles.info}>{insurance.displayName}</p>
        </div>

        {printStatus()}
      </div>

      <div className={styles.bottom}>
        <div>
          <Headline.Small>{getMonthlyPayment()}</Headline.Small>
          <p className={styles.dateText}>{getDateText()}</p>
        </div>
        {insurance.info.otherInsuranceHolder && (
          <div>
            <Headline.Small>{copy.otherInsuranceHolder[config.language]}</Headline.Small>
          </div>
        )}
      </div>
    </Link>
  );
}
