import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import React, { Fragment } from 'react'

function Coin() {

    return (
        <Layout>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>

                <div className='text-xl font-bold'>Unlocking Free Coins in Free Fire: Boost Your Gameplay and Climb the Ranks</div>
                <div>In Free Fire, coins are an essential in-game currency that can significantly enhance your gaming experience. Accumulating free coins allows players to purchase valuable items, including characters, skins, and weapons. For those looking to improve their gameplay and climb the ranks, finding effective ways to earn free coins is crucial. Here’s how you can maximize your coin collection in Free Fire.</div>
                <div className="grid grid-cols-2 justify-between mt-6 gap-9">
                    {gameData.coins.map((coins) => (

                        <div key={coins}>
                            <a href='/players/'>  <div className="">
                                <img
                                    className="w-full object-contain"
                                    alt="diamond"
                                    src={coins.url}
                                />
                            </div></a>


                        </div>
                    ))}
                </div>

                <div className='text-xl font-bold'>1. Daily Missions and Challenges</div>
                <div>One of the easiest ways to earn free coins is by completing daily missions and challenges. These tasks can vary from participating in matches to achieving specific objectives, such as getting a certain number of kills. By consistently engaging in these missions, you can accumulate a steady stream of coins, which can be reinvested in enhancing your character and equipment.</div>

                <div className='text-xl font-bold'>2. Participate in Events</div>
                <div>Free Fire frequently hosts events that reward players with coins and other in-game items. These events often have unique themes and tasks that players can complete to earn substantial coin rewards. Keeping an eye on the events section and actively participating can lead to significant earnings, allowing you to unlock valuable resources that enhance your gameplay.</div>

                <Ads
                    data-ad-slot="3211837376"
                    data-ad-format="auto"
                    data-full-width-responsive="true" />

                <div className='text-xl font-bold'>3. Playing Ranked Matches</div>
                <div>Engaging in ranked matches not only helps you improve your skills but also rewards you with coins based on your performance. The better you play, the more coins you can earn. This incentivizes players to focus on strategy and teamwork, which are essential for climbing the ranks.</div>

                <div className='text-xl font-bold'>5. Spin the Luck Royale:</div>
                <div>Free Fire features a Luck Royale system where players can spend diamonds for a chance to win valuable items, including diamonds themselves. Although the chances are low, participating in the Luck Royale can sometimes grant free diamonds or other premium rewards.</div>

            </div>

        </Layout>

    )
}

export default Coin
