import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

function Input(props: Props) {
  const { label, ...inputProps } = props;

  return (
    <label className="input-wrapper">
      <span>{label}</span>
      <input {...inputProps} />
    </label>
  );
}

export default Input;
