import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { menuItems } from "../data/menues";
import { useRefs } from '../context/RefsContex';

const Layout = () => {
  const refs=useRefs();
 
  return (
    <>
      <Header logoText="1811Construction" menuItems={menuItems} refs={refs} />
      <main className="main" id="home">
        <Outlet  />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
