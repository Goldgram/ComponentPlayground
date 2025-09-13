export type Period = "daily" | "weekly" | "monthly" | "annually";

export type InvestmentType = "savings" | "loan/mortgage";

export interface FormType {
  investmentType: InvestmentType; // savings vs loan/mortgage
  investmentLength: number; // years
  initialValue: number; // currency
  // interest
  interestRate: number; // percentage rate
  interestPeriod: Period;
  interestDay: number; // 1-28
  // contribution
  contributionValue: number; // currency
  contributionPeriod: Period;
  contributionDay: number; // 1-28
}

export interface ResultsType {
  totalValue: number;
}

export interface State {
  form: FormType;
  results: ResultsType | undefined;
}
