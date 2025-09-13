import React from "react";
import { DropdownInput } from "./DropdownInput";
import { NumberInput } from "./NumberInput";
import { FormType, InvestmentType, Period } from "./types";
import { INVESTMENT_TYPE_OPTIONS, PERIOD_OPTIONS } from "./constants";

interface FormProps {
  form: FormType;
  setForm: (newValue: FormType) => void;
  onSubmit: () => void;
}

export const Form = ({ form, setForm, onSubmit }: FormProps) => {
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
  } = form;

  const partialUpdate = (partialForm: Partial<FormType>) => {
    setForm({
      ...form,
      ...partialForm,
    });
  };

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
        <button className="button" onClick={onSubmit}>
          Calculate
        </button>
      </div>
    </div>
  );
};
