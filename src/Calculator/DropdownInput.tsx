import React from "react";

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
