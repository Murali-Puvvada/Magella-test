
function removeCookie(name) {
  document.cookie = `${name} =; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  document.cookie = `${name} =; path=/app; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function getCookie(name) { // eslint-disable-line
  // Read cookie (http://stackoverflow.com/questions/10730362/get-cookie-by-name)
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  removeCookie(name);
}

function datetimeToDate(d) {
  return new Date(d).toISOString().substr(0, 10);
}

function cleanString(string) {
  // Remove everything that is not: letter, number och whitespace
  return string.replace(/[^a-zA-Zé'æøßçüåÅäÄöÖ0-9-\s/]/g, '');
}

function addThousandSeparator(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function calculateMonthly(premiumYear) {
  if (typeof premiumYear !== 'number') return premiumYear;
  return addThousandSeparator(parseFloat(premiumYear / 12).toFixed(0));
}

function getDateString(inputDate) {
  return new Date(inputDate.split('.')[0]).toLocaleDateString('sv-SE');
}

function upperCaseFirstLetter(string) {
  if (!string) return null;
  return cleanString(string).charAt(0).toUpperCase() + cleanString(string).toLowerCase().slice(1);
}

function capitalize(string) {
  if (!string) return null;

  string = cleanString(string).toLowerCase() // eslint-disable-line
  string = string.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()) // eslint-disable-line

  return string;
}

function getTimeStringSinceUpdate(time) {
  if (!time) {
    return '- - -';
  }

  if (typeof time === 'string') time = time.split('.')[0] // eslint-disable-line

  const t = new Date().getTime() - new Date(time).getTime();
  const days = Math.floor(t / (1000 * 60 * 60 * 24));

  const date = new Date();
  date.setDate(date.getDate() - 1);
  const wasYesterday = date.toLocaleDateString('sv-SE') === new Date(time).toLocaleDateString('sv-SE');

  if (days > 10) {
    return new Date(time).toLocaleDateString('sv-SE');
  } if (days > 1) {
    return `${days} dagar sedan`;
  } if (wasYesterday) {
    return 'Igår';
  }

  return 'Idag';
}

const Utils = {
  getCookie,
  capitalize,
  removeCookie,
  getDateString,
  calculateMonthly,
  addThousandSeparator,
  upperCaseFirstLetter,
  getTimeStringSinceUpdate,
  datetimeToDate,
};

export default Utils;
