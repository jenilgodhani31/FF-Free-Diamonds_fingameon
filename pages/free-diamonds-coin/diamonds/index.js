
import Diamonds from '@containers/free-diamonds-coin/diamonds'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
  return (
    <Fragment>
    <Head>
      <title>{"FF Free Diamonds"}</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
        crossorigin="anonymous"></script>

    </Head>
    <Diamonds />
  </Fragment>
  )
}

export default index
