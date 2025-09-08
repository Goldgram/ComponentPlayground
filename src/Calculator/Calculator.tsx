import React from "react";
import "./Calculator.css";

type Period = "daily" | "weekly" | "monthly" | "annually";
const PERIOD_OPTIONS: Period[] = ["annually", "monthly", "weekly", "daily"];

type InvestmentType = "savings" | "loan/mortgage";
const INVESTMENT_TYPE_OPTIONS: InvestmentType[] = ["savings", "loan/mortgage"];

// const DAYS_OF_MONTH = Array.from({ length: 28 }, (_, i) => i + 1);

interface State {
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

const DEFAULT_STATE: State = {
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

export const Calculator = () => {
  const [state, setState] = React.useState<State>(DEFAULT_STATE);

  const partialUpdate = (partialState: Partial<State>) => {
    setState((currentState) => {
      return {
        ...currentState,
        ...partialState,
      };
    });
  };

  const calculate = () => {
    alert("cal");
  };

  const {
    investmentType,
    investmentLength,
    initialValue,

    interestRate,
    interestPeriod,
    interestDay,

    contributionValue,
    contributionPeriod,
    contributionDay,
  } = state;

  return (
    <div className="calculator">
      <div className="form-group">
        <DropdownInput<InvestmentType>
          id="investment-type"
          label="Investment type"
          options={INVESTMENT_TYPE_OPTIONS}
          value={investmentType}
          onChange={(newValue) => partialUpdate({ investmentType: newValue })}
        />
        <NumberInput
          id="investment-length"
          label="Investment length"
          value={investmentLength}
          onChange={(newValue) => partialUpdate({ investmentLength: newValue })}
          suffix="year"
        />
        <NumberInput
          id="monthlyAddition"
          label="Initial value"
          value={initialValue}
          onChange={(newValue) => partialUpdate({ initialValue: newValue })}
          prefix="€"
        />
        <div className="spacer" />
        <NumberInput
          id="interest-rate"
          label="Interest rate"
          value={interestRate}
          onChange={(newValue) => partialUpdate({ interestRate: newValue })}
          suffix="%"
        />
        <DropdownInput<Period>
          id="interest-period"
          label="Interest period"
          options={PERIOD_OPTIONS}
          value={interestPeriod}
          onChange={(newValue) => partialUpdate({ interestPeriod: newValue })}
        />
        {/* interest day input */}
        <div className="spacer" />
        <NumberInput
          id="contribution-value"
          label="contribution value"
          value={contributionValue}
          onChange={(newValue) =>
            partialUpdate({ contributionValue: newValue })
          }
          prefix="€"
        />
        <DropdownInput<Period>
          id="contribution-period"
          label="contribution period"
          options={PERIOD_OPTIONS}
          value={contributionPeriod}
          onChange={(newValue) =>
            partialUpdate({ contributionPeriod: newValue })
          }
        />
        {/* contribution day input */}
        <div className="spacer" />
        <button className="button" onClick={calculate}>
          Calculate
        </button>
      </div>
    </div>
  );
};

interface NumberInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  prefix?: string;
  suffix?: string;
}

export const NumberInput = ({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
}: NumberInputProps) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}:</label>
      <div className="input-container">
        {prefix && <p>{prefix}</p>}
        <input
          id={id}
          name={id}
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.valueAsNumber)}
          min={0}
        />
        {suffix && <p>{suffix}</p>}
      </div>
    </div>
  );
};

interface DropdownInputProps<T> {
  id: string;
  label: string;
  options: T[];
  value: T;
  onChange: (newValue: T) => void;
}

export const DropdownInput = <T extends string>({
  id,
  label,
  options,
  value,
  onChange,
}: DropdownInputProps<T>) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}:</label>
      <div className="input-container">
        <select
          name={id}
          id={id}
          value={value}
          onChange={(e) => {
            onChange(e.target.value as any); // oh no!
          }}
        >
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
