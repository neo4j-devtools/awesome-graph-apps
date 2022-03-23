import React, { useState } from "react";
import Input from "../../components/Input";

interface Props {}

const formFields = [
  {
    name: "connection-url",
    label: "Connection URL",
    placeholder: "Enter connection URL",
    defaultValue: "neo4j://localhost",
  },
  {
    name: "username",
    label: "Username",
    placeholder: "Enter database username",
    defaultValue: "neo4j",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter database password",
    defaultValue: "neo4j://localhost",
  },
  {
    name: "database",
    label: "Database",
    placeholder: "Enter database name",
    defaultValue: "neo4j",
  },
];

const getFormDefaultValues = () => {
  const returnValue: any = {};
  formFields.forEach((field) => {
    returnValue[field.name] = field.defaultValue;
  });
  return returnValue;
};

function ConnectionForm(props: Props) {
  const {} = props;

  const [formValues, setFormValues] = useState<any>(getFormDefaultValues());
  console.log(formValues);

  return (
    <div className="grid grid-cols-4 gap-x-8">
      {formFields.map((field) => {
        return (
          <Input
            key={field.name}
            label={field.label}
            type="text"
            name={field.name}
            value={formValues[field.name]}
          />
        );
      })}
    </div>
  );
}

export default ConnectionForm;
