/* eslint-disable no-param-reassign, compat/compat, no-console, max-len */
import Insurance from 'Services/Insurance';

// eslint-disable-next-line arrow-body-style
const b64EncodeUnicode = (str) => {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
    // eslint-disable-next-line arrow-body-style
    (match, p1) => {
      return String.fromCharCode(`0x${p1}`);
    }));
};

const hashCode = (str) => {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = ((hash << 5) - hash) + char;
    // eslint-disable-next-line no-bitwise
    hash &= hash; // Convert to 32bit integer
  }
  return hash;
};

// eslint-disable-next-line no-confusing-arrow
const wash = (string) => string == null ? '' : string.replace('försäkring', '').replace('Insurance', '');

const expiresSoon = (ins) => {
  const inNinetyDays = new Date();
  const ninetyDaysAgo = new Date();
  inNinetyDays.setDate(inNinetyDays.getDate() + 90);
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
  return ins.paidUntil > new Date().toLocaleDateString('sv-SE')
    && ins.paidUntil < inNinetyDays.toLocaleDateString('sv-SE')
    && ins.startDate < ninetyDaysAgo.toLocaleDateString('sv-SE');
};

export default class InsurancesService {
  static fetchSessions() {
    const sessionsPromise = fetch.get(`${API_URL}/advisory/session/associated-sessions`);

    return sessionsPromise;
  }

  static fetchInsurance(collectionId) {
    const insurancePromise = fetch.get(`${API_URL}/advisory/insurances/${collectionId}`);

    return insurancePromise;
  }

  static exportInsurance(collectionId) {
    return fetch.postBlob(`${API_URL}/advisory/insurances/export`, { collectionId })
      .then((response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `Report ${collectionId}.pdf`;
        link.click();
      }).catch((e) => console.log(e));
  }

  static cancellationTemplate(collectionId, externalId) {
    return fetch.postBlob(`${API_URL}/advisory/insurances/cancellation`, { collectionId, externalId })
      .then((response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `Cancel ${externalId}.pdf`;
        link.click();
      }).catch((e) => console.log(e));
  }

  static mapInsuranceTypeToFE(type) {
    if (type === 'houseContentInsurance') {
      return 'home';
    }
    if (type === 'vehicleInsurance') {
      return 'vehicle';
    }
    if (type === 'personInsurance') {
      return 'person';
    }
    if (type === 'animalInsurance') {
      return 'animal';
    }
    if (type === 'groupInsurance') {
      return 'group';
    }
    if (type === 'generalInsurance') {
      return 'general';
    }
    if (type === 'futureInsurance') {
      return 'future';
    }
    if (type === 'cardInsurance') {
      return 'card';
    }
    return 'general';
  }

  static setupInsurances(insurances, companies) {
    const fixedInsurances = [];

    for (let j = 0; j < insurances.length; j += 1) {
      const {
        insurance: item, parameters, displayType, termsUrl,
      } = insurances[j];
      const type = InsurancesService.mapInsuranceTypeToFE(item.insuranceType);
      const insurance = new Insurance();
      insurance.info = item;
      insurance.collectionId = 'collectionId';
      insurance.info.id = item.externalId || hashCode(b64EncodeUnicode(JSON.stringify(item)));
      insurance.parentType = type;
      insurance.parameters = parameters || [];
      insurance.expired = insurance.paidUntil < new Date().toLocaleDateString('sv-SE');
      insurance.expiresSoon = expiresSoon(item);
      insurance.isFutureInsurance = item.coming || false;
      insurance.displayType = wash(displayType);
      insurance.termsUrl = termsUrl;

      if (type === 'future') {
        insurance.isFutureInsurance = true;
        insurance.originType = 'future';
        insurance.parentType = wash(item.insurance.insuranceType);
        if (insurance.parentType === 'houseContent') insurance.parentType = 'home';
      }

      if (insurance.info.insuranceSubType) {
        insurance.type = wash(insurance.info.insuranceSubType);
      }

      if (insurance.parentType === 'general') {
        insurance.parentType = wash(insurance.info.insuranceType);
      }

      if (insurance.info.premiumAmountYear) {
        const premiumYear = Math.round(parseInt(insurance.info.premiumAmountYear, 10));
        insurance.info.premiumAmountYear = premiumYear;
      } else {
        insurance.info.premiumAmountYear = 0;
      }

      insurance.setupInsurance();
      insurance.company = companies.find((comp) => comp.insuranceCompany === insurance.info.insuranceCompany);
      fixedInsurances.push(insurance);
    }

    return fixedInsurances;
  }

  static calculateInsuranceTotals(insurances) {
    const premiumAmountYear = insurances.reduce((tot, ins) => {
      if (!ins.info.employerPaid && !ins.isFutureInsurance) {
        return tot + parseInt(ins.info.premiumAmountYear, 10);
      }
      return tot;
    }, 0);

    return { premiumAmountYear };
  }
}
