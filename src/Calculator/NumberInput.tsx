import React from "react";

interface NumberInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
}

export const NumberInput = ({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  min,
  max,
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
          min={min}
          max={max}
        />
        {suffix && <p>{suffix}</p>}
      </div>
    </div>
  );
};
