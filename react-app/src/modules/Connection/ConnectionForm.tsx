import React from "react";
import Input from "../../components/Input";
import { formFields } from "./formConstants";

interface Props {
  formValues: any;
  onChange: any;
}

function ConnectionForm(props: Props) {
  const { formValues, onChange } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
      {formFields.map((field) => {
        return (
          <Input
            onChange={onChange}
            key={field.name}
            label={field.label}
            type={"text"}
            name={field.name}
            value={formValues[field.name]}
          />
        );
      })}
    </div>
  );
}

export default ConnectionForm;
