import Head from "next/head";
import React from "react";
import { Navbar, Footer } from "../";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="layout">
      <Head>
        <title>E-commerce</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
