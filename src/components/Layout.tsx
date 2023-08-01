import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "@mdx-js/react/lib";

interface LayoutPropsTypes {
  children: ReactNode;
}

const Layout = ({ children }: LayoutPropsTypes) => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
