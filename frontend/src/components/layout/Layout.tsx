import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div className=" bg-slate-50 text-gray-700 ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
