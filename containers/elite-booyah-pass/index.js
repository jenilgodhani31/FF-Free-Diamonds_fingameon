import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React, { Fragment } from 'react'

function EliteBooyahPass() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>

        <div className='text-xl font-bold'>Free Fire Elite Pass & Booyah Pass: Unlock Exclusive Rewards</div>
        <div>In Free Fire, both the Elite Pass and Booyah Pass are premium subscription-based features that allow players to unlock a variety of exclusive rewards, such as skins, characters, emotes, and other in-game items. These passes are designed to enhance the gameplay experience by providing additional content that is not available through regular gameplay, making them highly sought after by many players.</div>
        <div>Both passes provide an exciting way to enhance your Free Fire experience with exclusive content, making them a great way for dedicated players to earn special rewards and show off their progress in the game.</div>

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
        <div className='text-2xl font-bold'>Elite Pass:</div>
        <div>The Elite Pass is a monthly subscription that offers players access to a range of exclusive rewards. Each season of the Elite Pass comes with a new theme, and players can earn rewards by completing missions and leveling up the pass. These rewards can include character skins, weapon skins, emotes, and other cosmetics that help players stand out on the battlefield.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Exclusive Skins & Outfits:   </strong> One of the main attractions of the Elite Pass is the variety of exclusive skins for characters and weapons. These skins not only offer aesthetic upgrades but often come with unique animations and effects.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Tier Rewards   </strong> One of the main attractions of the Elite Pass is the variety of exclusive skins for characters and weapons. These skins not only offer aesthetic upgrades but often come with unique animations and effects.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Tier Rewards </strong> Players who purchase the Elite Pass can unlock additional rewards faster and access the Elite Bundle, which includes special rewards at the start of the season.</div>

        <Ads
          data-ad-slot="3211837376"
          data-ad-format="auto"
          data-full-width-responsive="true" />

        <div className='text-2xl font-bold'>Booyah Pass:</div>
        <div>The Booyah Pass is another premium feature in Free Fire, offering players access to a special set of rewards for completing specific missions. The Booyah Pass typically runs alongside a particular event or season, giving players the opportunity to unlock limited-time rewards.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Event-Driven Rewards:    </strong>Unlike the Elite Pass, which focuses on overall progress, the Booyah Pass often includes rewards tied to seasonal events or collaborations.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Exclusive Emotes & Skins: </strong> Similar to the Elite Pass, the Booyah Pass provides exclusive emotes and skins that are available for a limited time, making them highly coveted by players.</div>


      </div>
    </Layout>
  )
}

export default EliteBooyahPass
