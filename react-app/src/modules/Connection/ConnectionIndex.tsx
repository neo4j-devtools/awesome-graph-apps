import React from "react";
import ConnectionForm from "./ConnectionForm";

interface Props {}

function ConnectionIndex(props: Props) {
  const {} = props;

  return (
    <div className="card flex flex-col gap-y-4">
      <h4>Step 1: Enter database credentials (optional)</h4>
      <div>
        The apps below are additions to Neo4j that provide new capabilities,
        like Monitoring, Import, Analysis, Running Graph Algorithms,
        Visualization and much more
      </div>
      <ConnectionForm />
    </div>
  );
}

export default ConnectionIndex;
