import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function Level() {
    return (
        <Layout>

            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>
                <div className='text-xl font-bold'>Understanding Free Fire Levels: Enhance Your Gameplay and Climb the Ranks</div>
                <div>In Free Fire, player levels are an integral part of the gaming experience, reflecting your progress and achievements within the game. Each level brings new challenges, rewards, and opportunities for growth, making it essential for players to understand how levels work and how to maximize their potential. Here’s a breakdown of Free Fire levels and how they can influence your journey to climb the ranks.</div>
                <div className="flex flex-col gap-4">
                    {gameData.level.map((level) => (
                        <a href='/apply'>
                            <div
                                key={level.id}
                                className="flex justify-center text-center border border-white/50 bg-white/15 backdrop-blur-[6px]  px-5 rounded-2xl cursor-pointer">

                                <div className="text-white text-lg text-center font-semibold leading-6 py-3.5" >{level.name}</div>

                            </div>

                        </a>

                    ))}

                </div>
                <div className='text-xl font-bold'>1. Leveling Up</div>
                <div>Players start at level 1 and progress by earning experience points (XP) through various activities, such as completing matches, winning battles, and finishing missions. The more you play and achieve, the faster you level up. Higher levels unlock access to advanced features, including new characters, weapon skins, and special events. Focusing on leveling up not only enhances your gameplay but also prepares you for higher-ranked matches.</div>

                <div className='text-xl font-bold'>2. Ranked Mode</div>
                <div>As you reach level 10, you can access Ranked Mode, where your skills are put to the test against other players. This mode introduces a ranking system—Bronze, Silver, Gold, Platinum, Diamond, and beyond. Climbing through these ranks is a testament to your skills and strategy, offering prestige and rewards. To rank up, players must not only win matches but also demonstrate consistent performance.</div>

                <Ads
                    data-ad-slot="3211837376"
                    data-ad-format="auto"
                    data-full-width-responsive="true" />

                <div className='text-xl font-bold'>3. Rewards for Leveling Up</div>
                <div>Each level achieved grants players rewards, such as coins, skins, and items that enhance your gameplay. These rewards can be instrumental in acquiring better gear, allowing you to compete effectively in higher ranks.</div>
                <div>Understanding Free Fire levels is crucial for enhancing your gameplay and climbing the ranks. By focusing on leveling up and performing well in Ranked Mode, you can unlock valuable rewards and improve your skills. Embrace the leveling system, and watch your performance soar as you dominate the battlefield!</div>


            </div>
        </Layout>
    )
}

export default Level
