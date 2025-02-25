import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function Booyah() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className='text-xl font-bold'>Unleashing the Power of the Free Fire Booyah Pass: Elevate Your Gameplay and Climb the Ranks</div>
        <div>The Booyah Pass in Free Fire is a fantastic opportunity for players looking to enhance their gaming experience without the pressure of a seasonal timeline. This pass rewards players for simply engaging with the game, making it an ideal choice for those who want to accumulate valuable in-game items while focusing on improving their skills and climbing the ranks.</div>
        {gameData.booyah.map((booyah) => (
          <div
            key={booyah.id}
            className="bg-no-repeat bg-black py-4 ps-3 pe-5 overflow-hidden rounded-xl"
            style={{ backgroundImage: `url("/resources/elite-bg.png")`, backgroundSize: '100% 100%' }}
          >
            <a href='/players'>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="text-[#A8C5F3] text-lg leading-6 font-bold">{booyah.name}</div>
                  <div className="text-xs text-white font-semibold">{booyah.description}</div>
                </div>
                <img className="object-contain w-[91px] cursor-pointer" alt="booyah-button" src="/resources/booyah-btn.png" />
              </div>
            </a>

          </div>
        ))}

        <div className='text-xl font-bold'>1. Exclusive Rewards</div>
        <div>The Booyah Pass offers a range of exciting rewards, including unique character skins, weapon skins, and various accessories. By completing daily and weekly challenges, players can unlock these exclusive items, which not only beautify your character but can also enhance your performance on the battlefield. Stylish skins can boost your confidence and make you stand out in matches, creating a memorable gaming experience.</div>

        <div className='text-xl font-bold'>2. Earn While You Play</div>
        <div>One of the main advantages of the Booyah Pass is that it allows you to earn rewards just by playing the game. Completing missions and challenges grants you points, which can be exchanged for valuable items. This system encourages players to explore different gameplay modes and strategies, ultimately improving their skills and ranking potential.</div>

        <Ads
          data-ad-slot="3211837376"
          data-ad-format="auto"
          data-full-width-responsive="true" />

        <div className='text-xl font-bold'>3. Community Engagement</div>
        <div>The Booyah Pass fosters community engagement, as players often share strategies and tips for completing challenges. This collaborative environment can enhance your gameplay experience and provide valuable insights into effective tactics, helping you to advance in rank more efficiently.</div>
        <div>The Free Fire Booyah Pass is an excellent way to enhance your gameplay while enjoying exclusive rewards. By participating in challenges and engaging with the community, you can accumulate valuable items that will help you climb the ranks. Don’t miss out on the chance to level up your Free Fire experience—grab your Booyah Pass today and start dominating the battlefield!</div>


      </div>
    </Layout>
  )
}

export default Booyah
