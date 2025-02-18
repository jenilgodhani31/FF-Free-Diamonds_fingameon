import Layout from '@components/Layout'
import React from 'react'

function EliteBooyahPass() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px]">
        <div class="text-center text-white text-xl font-bold">Choose Pass &amp; Rewards</div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <a href="/elite-booyah-pass/elite">
            <img
              className="object-contain max-w-full"
              alt="Unlock Diamonds"
              src="/resources/buttons/elitePass/elite.png"
            />
          </a>
          <a href="/elite-booyah-pass/booyah">
            <img
              className="object-contain max-w-full"
              alt="Unlock Coins"
              src="/resources/buttons/elitePass/booyah-pass.png"
            />
          </a>
          <a href="/elite-booyah-pass/reward">
            <img
              className="object-contain max-w-full"
              alt="Unlock Coins"
               src="/resources/buttons/elitePass/reward.png"
            />
          </a>
        </div>


      </div>
    </Layout>
  )
}

export default EliteBooyahPass
