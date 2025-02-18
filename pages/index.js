import Head from "next/head";
import { Fragment } from "react";
import Home from "../containers/home";

export default function Homepage() {
  return (
    <Fragment>
      <Head>
        <title>{"FF Free Diamonds"}</title>
      </Head>
      <div
        
      >
        <Home />
      </div>
    </Fragment>
  );
}
