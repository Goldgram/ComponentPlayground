import { FormType, Period, ResultObject, ResultsType } from "./types";

export const getYYYYMMDD = (date: Date) => {
  return date.toISOString().substring(0, 10);
};

export const getNowDateIso = () => {
  const nowDate = new Date();
  return getYYYYMMDD(nowDate);
};

export const isValidForm = (form: FormType) => {
  return (
    !!form &&
    form.investmentLength > 0 &&
    form.initialValue >= 0 &&
    form.interestRate > 0 &&
    form.interestDay >= 1 &&
    form.interestDay <= 28 &&
    form.contributionValue > 0 &&
    form.contributionDay >= 1 &&
    form.contributionDay <= 28
  );
};

export const getEndDateString = (form: FormType) => {
  const { startDate, investmentLength, investmentPeriod } = form;

  const dateObject = new Date(startDate);

  switch (investmentPeriod) {
    case "year":
      dateObject.setFullYear(dateObject.getFullYear() + investmentLength);
      break;
    case "month":
      dateObject.setMonth(dateObject.getMonth() + investmentLength);
      break;
    case "day":
      dateObject.setDate(dateObject.getDate() + investmentLength);
      break;
  }
  return getYYYYMMDD(dateObject);
};

export const getInterest = (form: FormType, investmentValue: number) => {
  const { interestPeriod, interestRate } = form;
  switch (interestPeriod) {
    case "year":
      return (investmentValue * interestRate) / 100;
    case "month":
      return (investmentValue * interestRate) / (100 * 12);
    case "day":
      return (investmentValue * interestRate) / (100 * 365); // probably should account for leap years
    default:
      return 0;
  }
};

export const calculateResults = (form: FormType): ResultsType => {
  const { initialValue, interestPeriod, startDate } = form;

  const endDate = getEndDateString(form);

  var resultArray: ResultObject[] = [];
  var calcDate = new Date(startDate);
  var calcDateString = getYYYYMMDD(calcDate);
  var totalInterest = 0;

  while (calcDateString !== endDate) {
    // update date
    switch (interestPeriod) {
      case "year":
        calcDate.setFullYear(calcDate.getFullYear() + 1);
        break;
      case "month":
        calcDate.setMonth(calcDate.getMonth() + 1);
        break;
      case "day":
        calcDate.setDate(calcDate.getDate() + 1);
        break;
    }
    calcDateString = getYYYYMMDD(calcDate);

    // update interest
    const interest = getInterest(form, initialValue + totalInterest);
    totalInterest += interest;

    // log/write
    // console.log(`${calcDateString} ${interest} ${totalInterest}`);
    resultArray.push({
      date: calcDateString,
      interest,
      totalInterest,
    });
  }

  return {
    endDate,
    resultArray,
  };
};
