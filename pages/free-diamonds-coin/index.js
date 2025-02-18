import Head from "next/head";
import { Fragment } from "react";

import FreeDiamondsCoin from "@containers/free-diamonds-coin";

export default function index   () {
  return (
    <Fragment>
      <Head>
        <title>{"FF Free Diamonds"}</title>
        
     </Head>
      <div
        
      >
        <FreeDiamondsCoin />
      </div>
    </Fragment>
  );
}
