import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function Reward() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className='text-xl font-bold'>Maximizing Free Fire Rewards: Boost Your Gameplay and Climb the Ranks</div>
        <div>In Free Fire, rewards play a crucial role in enhancing your gaming experience and improving your performance on the battlefield. From in-game currency to exclusive skins, understanding how to maximize these rewards can significantly impact your ability to climb the ranks and achieve victory.</div>
        {gameData.rewards.map((rewards) => (
          <div
            key={rewards.id}
            className="bg-no-repeat bg-black py-4 ps-3 pe-5 overflow-hidden rounded-xl"
            style={{ backgroundImage: `url("/resources/elite-bg.png")`, backgroundSize: '100% 100%' }}
          >
            <a href='/players/'>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="text-[#A8C5F3] text-lg leading-6 font-bold">{rewards.name}</div>
                  <div className="text-xs text-white font-semibold">{rewards.description}</div>
                </div>
                <img className="object-contain w-[91px] cursor-pointer" alt="rewards-button" src="/resources/reward-btn.png" />
              </div>
            </a>


          </div>
        ))}

        <div className='text-xl font-bold'>1. Daily and Weekly Missions</div>
        <div>One of the best ways to earn rewards in Free Fire is by completing daily and weekly missions. These challenges range from eliminating a specific number of enemies to surviving for a set duration. By actively participating in these missions, players can accumulate valuable resources like diamonds, gold, and unique items. Completing missions not only boosts your inventory but also helps refine your skills, making it easier to secure wins and rank up.</div>

        <div className='text-xl font-bold'>2. Events and Promotions</div>
        <div>2. Events and Promotions.</div>

        <Ads
          data-ad-slot="3211837376"
          data-ad-format="auto"
          data-full-width-responsive="true" />

        <div className='text-xl font-bold'>3. Elite Pass and Booyah Pass</div>
        <div>Investing in the Elite Pass or Booyah Pass can further amplify your rewards. The Elite Pass offers exclusive seasonal rewards, while the Booyah Pass allows you to earn valuable items simply by playing the game. Both passes encourage active gameplay and reward dedication, making them worthwhile investments for players focused on improving their ranks.</div>
      </div>
    </Layout>
  )
}

export default Reward
