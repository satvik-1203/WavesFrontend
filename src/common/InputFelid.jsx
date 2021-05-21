import React from "react";

const InputFelid = ({ input }) => {
  return (
    <div>
      <div className={input.name}>
        <label htmlFor={`input${input.name}`}>
          {input.label} <span>*</span>
        </label>
        <input
          type={input.type}
          name={`input${input.name}`}
          placeholder={input.label}
        />
      </div>
    </div>
  );
};

export default InputFelid;
