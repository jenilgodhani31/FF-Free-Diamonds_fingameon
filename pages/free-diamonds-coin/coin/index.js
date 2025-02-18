import Head from "next/head";
import { Fragment } from "react";

import Coin from "@containers/free-diamonds-coin/coin";

export default function index   () {
  return (
    <Fragment>
      <Head>
        <title>{"FF Free Diamonds"}</title>
       
     </Head>
      <div
        
      >
        <Coin />
      </div>
    </Fragment>
  );
}
