import React from "react";

interface Props {
  form: any;
}

function ConnectionIndex(props: Props) {
  const { form } = props;

  return (
    <div className="card flex flex-col gap-y-4">
      <div>
        The apps below are additions to Neo4j that provide new capabilities,
        like Monitoring, Import, Analysis, Running Graph Algorithms,
        Visualization and much more
      </div>
      {form}
    </div>
  );
}

export default ConnectionIndex;
