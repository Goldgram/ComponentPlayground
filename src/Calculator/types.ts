export type Period = "year" | "month" | "day";

export type InvestmentType = "savings" | "loan/mortgage";

export interface FormType {
  investmentType: InvestmentType; // savings vs loan/mortgage
  investmentLength: number; // amount of investment periods
  investmentPeriod: Period; // year/month/week/day
  initialValue: number; // currency
  startDate: string; // YYYY-MM-DD
  // interest
  interestRate: number; // percentage rate per year
  interestPeriod: Period; // year/month/week/day
  interestDay: number; // 1-28
  // contribution
  contributionValue: number; // currency
  contributionPeriod: Period; // year/month/week/day
  contributionDay: number; // 1-28
}

export interface ResultObject {
  date: string; // YYYY-MM-DD
  interest: number;
  totalInterest: number;
}

export interface ResultsType {
  endDate: string; // YYYY-MM-DD
  resultArray: ResultObject[];
}

export interface State {
  form: FormType;
  results: ResultsType | undefined;
}
