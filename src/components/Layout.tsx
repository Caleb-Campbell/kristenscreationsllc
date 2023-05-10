import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({ children, bg }: {bg?: string, children: React.ReactNode}) => (
  <>
    <Header />
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
