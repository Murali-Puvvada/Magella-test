import Utils from 'Services/utils';

function lowerCaseCar(string) {
  if (string === 'VW' || string === 'BMW') return string;
  if (string) return Utils.upperCaseFirstLetter(string);
  return '';
}

export default class Insurance {
  constructor() {
    this.info = {};
    this.deductible = {};
    this.parameters = [];
    this.parentType = '';
    this.type = null;
  }

  setupInsurance() {
    if (this.type === 'pregnancy') {
      this.displayName = this.info.insuranceHolderName || '- - -';
    }
    if (this.parentType === 'home') {
      this.displayName = this.info.insuranceObjectAddress || this.info.insuranceName;
    } else if (this.type === 'car') {
      this.displayName = this.info.carBrand !== null ? `${lowerCaseCar(this.info.carBrand)} - ` : '';
      this.displayName += this.info.registrationNo;
    } else if (this.type === 'otherVehicle') {
      this.displayName = this.info.insuranceName;
    } else if (this.type === 'boat') {
      this.displayName = this.info.boatModel;
    } else if (['motorcycle', 'trailer', 'motorhome', 'caravan'].includes(this.type)) {
      this.displayName = this.info.registrationNo;
    } else if (this.parentType === 'person' && this.type !== 'pregnancy') {
      this.displayName = Utils.capitalize(this.info.insuranceHolderName || this.info.insuranceName);
    } else if (this.parentType === 'animal') {
      this.displayName = Utils.capitalize(this.info.animalName);
    } else if (this.parentType === 'group') {
      this.displayName = Utils.capitalize(this.info.insuranceHolderName || this.info.payingCompany);
    } else if (this.parentType === 'card') {
      this.displayName = this.info.cardName;
    }

    this.info.insuranceHolderName = Utils.capitalize(this.info.insuranceHolderName);
    this.info.paymentMethod = Utils.upperCaseFirstLetter(this.info.paymentMethod);

    if (this.info.insuredAmount) {
      if (/^\d+$/.test(this.info.insuredAmount)) {
        this.info.insuredAmount = `${Utils.addThousandSeparator(this.info.insuredAmount)} kr`;
      } else if (/^\w+$/.test(this.info.insuredAmount)) {
        // Do nothing
      } else {
        const split = this.info.insuredAmount.split('-');
        if (/^\d+$/.test(split[0]) && split[1] === 'Fullvärde') {
          this.info.insuredAmount = `${Utils.addThousandSeparator(split[0])} kr - Fullvärde`;
        } else if (/^\d+$/.test(split[0]) && /^\d+$/.test(split[1])) {
          // eslint-disable-next-line
          this.info.insuredAmount = `${Utils.addThousandSeparator(split[0])} kr - ${Utils.addThousandSeparator(split[1])} kr`
        }
      }
    }

    if (!this.displayName) this.displayName = '- - -';
  }
}
