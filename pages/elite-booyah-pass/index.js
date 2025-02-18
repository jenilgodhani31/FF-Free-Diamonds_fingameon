import Head from "next/head";
import { Fragment } from "react";

import FreeDiamondsCoin from "@containers/free-diamonds-coin";
import EliteBooyahPass from "@containers/elite-booyah-pass";

export default function index   () {
  return (
    <Fragment>
      <Head>
        <title>{"FF Free Diamonds"}</title>
</Head>
      <div
        
      >
        <EliteBooyahPass />
      </div>
    </Fragment>
  );
}
