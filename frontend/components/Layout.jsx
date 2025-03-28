import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <link rel="icon" href="/imgs/images/fav-tra.png" />
        <title>{title}</title>
      </Head>

      <Header />
      <Toaster />

      <main>{children}</main>

      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Traveloways - Explore the World",
  description: "Discover the best travel deals and destinations.",
  keywords: "travel, hotels, flights, vacation",
  author: "Traveloways Team",
};

export default Layout;