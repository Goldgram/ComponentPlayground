import { getNowDateIso } from "./functions";
import { FormType, InvestmentType, Period, State } from "./types";

export const PERIOD_OPTIONS: Period[] = ["year", "month", "day"];

export const INVESTMENT_TYPE_OPTIONS: InvestmentType[] = [
  "savings",
  "loan/mortgage",
];

// export const DAYS_OF_MONTH = Array.from({ length: 28 }, (_, i) => i + 1);

export const DEFAULT_FORM: FormType = {
  investmentType: "loan/mortgage",
  investmentLength: 1,
  investmentPeriod: "year",
  initialValue: 100000,
  // startDate: "2028-02-29T14:48:34.179Z",
  startDate: getNowDateIso(),

  // interest
  interestRate: 3,
  interestPeriod: "day",
  interestDay: 1,
  // contribution
  contributionValue: 1000,
  contributionPeriod: "month",
  contributionDay: 1,
};

export const DEFAULT_STATE: State = {
  form: DEFAULT_FORM,
  results: undefined,
};
