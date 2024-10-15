import React from "react";

interface IChildren {
  children: React.ReactNode;
}

function Container({ children }: IChildren) {
  return <div className=" container mx-auto">{children}</div>;
}

export default Container;
