import { Button, HeroIcon } from "@neo4j-ndl/react";
import React from "react";
import Divider from "../../components/Divider";
import { GraphAppItem } from "./graphApps";

interface Props {
  app: GraphAppItem;
  formValues: any;
}

function AppItem(props: Props) {
  const { app, formValues } = props;

  const getAppUrl = (url: string) => {
    return url
      .replace("$connectionUrl", formValues.connectionUrl || "")
      .replace("$username", formValues.username || "")
      .replace("$password", formValues.password || "")
      .replace("$database", formValues.database || "");
  };

  return (
    <div className="card p-0">
      <div className="p-8 flex flex-col gap-y-4 text-center">
        <div>
          <h5>{app.name}</h5>
          <p className="n-text-neutral-60">{app.author}</p>
        </div>
        <div className="mx-auto">
          <img className="w-24" src={app.logo} />
        </div>
      </div>
      <div>
        <Divider />
        <div className="py-4 px-8 flex gap-x-2 justify-center">
          <HeroIcon iconName="AdjustmentsIcon" className="w-4" />
          <HeroIcon iconName="AdjustmentsIcon" className="w-4" />
          <HeroIcon iconName="AdjustmentsIcon" className="w-4" />
          <HeroIcon iconName="AdjustmentsIcon" className="w-4" />
        </div>
        <Divider />
      </div>
      <div className="flex flex-col gap-y-4 text-center py-4">
        <div>
          <Button fill="outlined" href={getAppUrl(app.baseUrl)} target="_blank">
            Open
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppItem;
