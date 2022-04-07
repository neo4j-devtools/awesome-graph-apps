import React from "react";
import AppItem from "./AppItem";
import graphApps from "./graphApps";

interface Props {
  formValues: any;
}

function AppListIndex(props: Props) {
  const { formValues } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
      {graphApps.map((graphApp) => (
        <AppItem app={graphApp} key={graphApp.id} formValues={formValues} />
      ))}
    </div>
  );
}

export default AppListIndex;
