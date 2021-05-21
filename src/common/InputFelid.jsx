import React from "react";

const InputFelid = ({ input, handleInputChange }) => {
  return (
    <div>
      <div className={input.name}>
        <label htmlFor={`input${input.name}`}>
          {input.label} <span>*</span>
        </label>
        <input
          value={input.value}
          onChange={(e) => {
            handleInputChange(input.id, { value: e.target.value });
          }}
          type={input.type}
          name={`input${input.name}`}
          placeholder={input.label}
        />
      </div>
    </div>
  );
};

export default InputFelid;
