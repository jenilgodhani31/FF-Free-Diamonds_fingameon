import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function Players() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className='text=xl font-bold'>Understanding Free Fire Player Categories: Find Your Style and Climb the Ranks</div>
        <div>In Free Fire, players can be categorized based on their playstyles, skills, and strategies. Understanding these player categories is essential for identifying your strengths and weaknesses, allowing you to improve your gameplay and climb the ranks effectively. Here’s a breakdown of the main player categories in Free Fire and how they can influence your success.</div>
        <div className="flex flex-col gap-4">
          {gameData.players.map((weapon) => (
            <a href='/level'>
              <div
                key={weapon.id}
                className="flex justify-between items-center border border-white/50 bg-white/15 backdrop-blur-[6px]  px-5 rounded-2xl cursor-pointer"

              >

                <div className="text-white text-lg font-semibold leading-6 py-3.5" >{weapon.name}</div>
                <img
                  alt={weapon.name}
                  className=" w-[50px] "
                  src={weapon.url}
                />
              </div>
            </a>

          ))}

        </div>

        <div className='text-xl font-bold'>1. Aggressive Players</div>
        <div>Aggressive players thrive on fast-paced action, often engaging enemies head-on. They excel in close-quarters combat, utilizing weapons like SMGs and shotguns to secure quick eliminations. This playstyle is perfect for players who enjoy high-risk, high-reward scenarios. By mastering movement and aiming skills, aggressive players can dominate matches and quickly rise in rank. However, it’s crucial for them to manage their health and positioning strategically to maintain their edge.</div>

        <div className='text-xl font-bold'>2. Strategic Players</div>
        <div>Strategic players focus on tactics and positioning rather than sheer firepower. They excel in planning their moves, often using cover and environmental advantages to outsmart opponents. This category includes players who prefer sniping or utilizing gloo walls effectively. Strategic players can climb the ranks by carefully analyzing the battlefield and making informed decisions, often leading their teams to victory through smart gameplay.</div>

        <Ads
          data-ad-slot="3211837376"
          data-ad-format="auto"
          data-full-width-responsive="true" />

        <div className='text-xl font-bold'>3. Support Players</div>
        <div>Support players play a crucial role in team dynamics. They focus on healing teammates, providing cover fire, and using characters with supportive abilities, like DJ Alok or K. These players ensure that their squad remains in the fight longer, contributing to overall success. Climbing the ranks as a support player involves understanding team dynamics and knowing when to engage or fall back.</div>
        <div>Understanding the different player categories in Free Fire can help you identify your playstyle and improve your skills. Whether you’re an aggressive player, a strategic thinker, or a dedicated support member, recognizing your strengths allows you to develop effective strategies and climb the ranks. Embrace your playstyle and elevate your gameplay on the battlefield</div>

      </div>
    </Layout>
  )
}

export default Players
