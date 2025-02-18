import Players from '@containers/players'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
  return (
<Fragment>
    <Head   >
      <title>{"FF Free Diamonds"}</title>
    
    </Head>
    <div
      
    >
      <Players/>
    </div>
  </Fragment>
  )
}

export default index
