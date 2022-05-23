import React from "react";
import AppItem from "./AppItem";
import {ecosystemApps, GraphAppItem, neo4jApps} from "./graphApps";

interface Props {
  formValues: any;
}

type ProductListingProps = {
  title: string;
  apps: GraphAppItem[];
}

function AppListIndex(props: Props) {
  const { formValues } = props;
  const search = new URLSearchParams(window.location.search);

  const ProductListing = (props: ProductListingProps) => (
    <div>
    <h4 className="mb-4">{props.title}</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
      {props.apps.map((app) => (
        <AppItem app={app} key={app.id} formValues={formValues} />
      ))}
    </div>
  </div>
  )

  return (
    <div className="flex flex-col gap-y-16">
      {["1", "true"].indexOf(search.get('showNeoProducts') as string) > -1 && <ProductListing title="Neo4j Products" apps={neo4jApps} />}
      <ProductListing title="Ecosystem Tools" apps={ecosystemApps} />
    </div>
  );
}

export default AppListIndex;
