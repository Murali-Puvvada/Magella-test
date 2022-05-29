import React from 'react';

import Headline from 'Components/Headline';
import InsuranceCard from 'Components/InsuranceCard';
import Paragraph from 'Components/Paragraph';
import Utils from 'Services/utils';

import copy from './copy.json';
import styles from './insuranceListing.module.css';

export default function InsurancesListing({ insurances }) {
  const config = { language: 'sv' };
  const sortFutureLast = (a, b) => a.isFutureInsurance - b.isFutureInsurance;

  const home = insurances.filter((ins) => /home/.test(ins.parentType)).sort(sortFutureLast);
  const car = insurances.filter((ins) => /vehicle/.test(ins.parentType)).sort(sortFutureLast);
  const person = insurances.filter((ins) => /person/.test(ins.parentType)).sort(sortFutureLast);
  const animal = insurances.filter((ins) => /animal/.test(ins.parentType)).sort(sortFutureLast);

  const other = insurances
    .filter((ins) => ([...home, ...car, ...person, ...animal].indexOf(ins) === -1))
    .sort(sortFutureLast);

  const lists = [];

  if (home.length) lists.push({ title: copy.homeInsurances[config.language], items: home });
  if (car.length) lists.push({ title: copy.vehicleInsurances[config.language], items: car });
  if (person.length) lists.push({ title: copy.personInsurances[config.language], items: person });
  if (animal.length) lists.push({ title: copy.animalInsurances[config.language], items: animal });
  if (other.length) lists.push({ title: copy.otherInsurances[config.language], items: other });

  return lists.map((list) => (
    <div key={list.title} className={styles.wrapper}>
      <Headline.Secondary>{list.title}</Headline.Secondary>
      <Paragraph.Primary className={styles.total}>
        <strong style={{ color: 'var(--greyDark)' }}>Total:</strong>
&nbsp;
        {Utils.addThousandSeparator(list.items.reduce((acc, ins) => acc + ins.info.premiumAmountYear, 0))}
        {' '}
        kr/mån
      </Paragraph.Primary>

      <ul className={styles.list}>
        {list.items.map((ins) => (
          <InsuranceCard key={ins.info.id} insurance={ins} className={styles.item} />
        ))}
      </ul>
    </div>
  ));
}
