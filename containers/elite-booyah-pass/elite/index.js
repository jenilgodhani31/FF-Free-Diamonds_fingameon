import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function Elite() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className='text-xl font-bold'>Unlocking the Free Fire Elite Pass: Elevate Your Gameplay and Climb the Ranks</div>
        <div>The Elite Pass in Free Fire is an essential tool for dedicated players looking to enhance their gaming experience and climb the ranks. This seasonal subscription offers a host of exclusive rewards, from unique skins and emotes to valuable in-game items. Investing in the Elite Pass not only boosts your character’s aesthetics but also provides significant gameplay advantages.</div>
        {gameData.elite.map((elite) => (
          <div
            key={elite.id}
            className="bg-no-repeat bg-black py-4 ps-3 pe-5 overflow-hidden rounded-xl"
            style={{ backgroundImage: `url("/resources/elite-bg.png")`, backgroundSize: '100% 100%' }}
          >
            <a href='/players/'>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="text-[#A8C5F3] text-lg leading-6 font-bold">{elite.name}</div>
                  <div className="text-xs text-white font-semibold">{elite.description}</div>
                </div>
                <img className="object-contain w-[91px] cursor-pointer" alt="elite-button" src="/resources/elite-btn.png" />
              </div>
            </a>

          </div>
        ))}

        <div className='text-xl font-bold'>1. Exclusive Rewards</div>
        <div>Each season, the Elite Pass features a specific theme, offering a variety of exclusive items. Players can earn skins for weapons, characters, and vehicles, as well as unique emotes that add flair to your gameplay. These rewards not only make your character stand out but can also enhance your overall performance in matches. High-quality weapon skins, for instance, can improve your aim and accuracy, crucial for securing victories and advancing in rank.</div>

        <div className='text-xl font-bold'>2. Increased Earnings</div>
        <div>Purchasing the Elite Pass allows you to earn Elite Tokens by completing daily and weekly challenges. These tokens can be exchanged for additional rewards, maximizing the benefits of your investment. This system encourages players to engage actively with the game, honing their skills and strategies as they progress through the ranks.</div>

        <Ads
          data-ad-slot="3211837376"
          data-ad-format="auto"
          data-full-width-responsive="true" />

        <div className='text-xl font-bold'>3. Competitive Edge</div>
        <div>The Elite Pass is designed for players who want to gain a competitive advantage. With exclusive access to premium items, you can customize your gameplay experience to suit your style. Whether you prefer aggressive tactics or strategic play, the Elite Pass provides the tools necessary to enhance your performance and secure crucial victories.</div>
        <div>The Free Fire Elite Pass is more than just a subscription; it’s an investment in your gaming journey. By unlocking exclusive rewards and increasing your earnings, the Elite Pass can significantly improve your gameplay and help you climb the ranks. Don’t miss out on this opportunity to elevate your Free Fire experience—grab your Elite Pass today and dominate the battlefield!</div>


      </div>
    </Layout>
  )
}

export default Elite
