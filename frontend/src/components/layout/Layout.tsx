import React from "react";
import Header from "../header/Header";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
