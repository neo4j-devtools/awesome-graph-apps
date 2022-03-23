import React from "react";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <div>
      <h1 className="h2">Neo4j Graph Apps</h1>
      <h5 className="font-normal">Curated set of Online Graph Tools</h5>
    </div>
  );
}

export default Header;
