import React from "react";
import AppItem from "./AppItem";
import graphApps from "./graphApps";

interface Props {}

function AppListIndex(props: Props) {
  const {} = props;

  return (
    <div className="grid grid-cols-3 gap-x-12">
      {graphApps.map((graphApp) => (
        <AppItem app={graphApp} key={graphApp.id} />
      ))}
    </div>
  );
}

export default AppListIndex;
