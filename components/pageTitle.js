import React from "react";
import Head from "next/head";

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - Bunitta Quer Saber</title>
    </Head>
  )
}

export default PageTitle