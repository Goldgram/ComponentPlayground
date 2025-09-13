import { FormType, InvestmentType, Period, State } from "./types";

export const PERIOD_OPTIONS: Period[] = [
  "annually",
  "monthly",
  "weekly",
  "daily",
];

export const INVESTMENT_TYPE_OPTIONS: InvestmentType[] = [
  "savings",
  "loan/mortgage",
];

// export const DAYS_OF_MONTH = Array.from({ length: 28 }, (_, i) => i + 1);

export const DEFAULT_FORM: FormType = {
  investmentType: "savings",
  investmentLength: 10,
  initialValue: 0,
  // interest
  interestRate: 3,
  interestPeriod: "annually",
  interestDay: 1,
  // contribution
  contributionValue: 1000,
  contributionPeriod: "monthly",
  contributionDay: 1,
};

export const DEFAULT_STATE: State = {
  form: DEFAULT_FORM,
  results: undefined,
};
