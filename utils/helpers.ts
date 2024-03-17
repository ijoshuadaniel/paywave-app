import {banks} from './bank';

export const validateEmail = (email: string) => {
  if (
    email
      .toLowerCase()
      .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      )
  ) {
    return true;
  }
  return false;
};

export const splitCC = (number: string) => {
  return number.replace(/(\d{4}(?!\s))/g, '$1 ');
};

export const allBanks = () => {
  const bank: object[] = [];
  Object.keys(banks).map(k => bank.push({label: k, value: k}));
  return bank;
};

export function validateCardNumber(number: string) {
  var regex = new RegExp('^[0-9]{16}$');
  if (!regex.test(number)) {
    return false;
  }
  return luhnCheck(number);
}

function luhnCheck(val: string) {
  var sum = 0;
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
}

export const checkExpiry = (selectedMonth: string, selectedYear: string) => {
  const year = new Date().toLocaleDateString('en', {year: 'numeric'});
  const month = new Date().toLocaleDateString('en', {month: '2-digit'});

  if (selectedYear.toString() === year.toString()) {
    if (month < selectedMonth) {
      return false;
    }
  }

  return true;
};
