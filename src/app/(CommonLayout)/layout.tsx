import Footer from "@/components/shared/Footer";
import { Navbar1 } from "@/components/shared/navbar1";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar1 className="px-16"></Navbar1>

      {children}
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
