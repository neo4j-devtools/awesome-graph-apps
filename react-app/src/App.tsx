import { useState } from "react";
import AppListIndex from "./modules/AppList/AppListIndex";
import ConnectionForm from "./modules/Connection/ConnectionForm";
import ConnectionIndex from "./modules/Connection/ConnectionIndex";
import { formFields } from "./modules/Connection/formConstants";
import Header from "./modules/Header/Header";

const getFormDefaultValues = () => {
  const returnValue: any = {};
  const search = new URLSearchParams(window.location.search);
  formFields.forEach((field) => {
    returnValue[field.name] = search.get(field.name) || field.defaultValue;
  });
  return returnValue;
};

function App() {
  const [formValues, setFormValues] = useState<any>(getFormDefaultValues());

  const handleChange = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container mx-auto flex flex-col gap-y-12 mt-16">
      <Header />
      <ConnectionIndex
        form={
          <ConnectionForm formValues={formValues} onChange={handleChange} />
        }
      />
      <AppListIndex formValues={formValues} />
    </div>
  );
}

export default App;
