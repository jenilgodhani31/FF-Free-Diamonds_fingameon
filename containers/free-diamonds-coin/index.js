import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { Fragment } from 'react'

function FreeDiamondsCoin() {
    return (
        <Layout>

            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>
                <div className='text-xl font-bold'>How to Get Free Diamonds and Unlock Rewards in Free Fire</div>
                <div>Diamonds are the premium in-game currency in Free Fire, allowing players to unlock exclusive rewards, such as character skins, weapon skins, emotes, and more. While purchasing diamonds is the quickest way to obtain them, there are several methods to get free diamonds and unlock exciting rewards without spending real money. Here’s a guide to help you get diamonds and unlock rewards in Free Fire.</div>
                <div class="text-center text-white text-xl font-bold">Choose Pass &amp; Rewards</div>
                <div className="mt-6 flex items-center justify-between gap-4">
                    <a href="/free-diamonds-coin/diamonds">
                        <img
                            className="object-contain max-w-full"
                            alt="Unlock Diamonds"
                            src="/resources/buttons/diamondCoin/unlock-diamond.png"
                        />
                    </a>
                    <a href="/free-diamonds-coin/coin">
                        <img
                            className="object-contain max-w-full"
                            alt="Unlock Coins"
                            src="/resources/buttons/diamondCoin/unlock-coin.png"
                        />
                    </a>
                </div>
                <div className='text-xl font-bold'>1. Free Fire Events:</div>
                <div>Garena frequently hosts special events where players can earn free diamonds by completing certain tasks or missions. These events are time-limited and usually involve simple activities such as playing matches, logging in daily, or completing specific challenges. Players can accumulate event points and exchange them for diamonds or other in-game items.</div>

                <div className='text-xl font-bold'>2. Google Opinion Rewards:</div>
                <div>Google Opinion Rewards is an app where users can participate in surveys and earn credits, which can then be used to buy Google Play gift cards. These gift cards can be redeemed for diamonds in Free Fire. By completing surveys regularly, you can gather enough credits to purchase diamonds for free.</div>

                <div className='text-xl font-bold'>3. Redeem Codes:</div>
                <div>Occasionally, Garena releases redeem codes through official social media channels or special collaborations. These codes often contain free diamonds, skins, or other rewards. Players can enter these codes on the official Free Fire website or within the game to redeem their rewards.</div>

                <Ads
                    data-ad-slot="3211837376"
                    data-ad-format="auto"
                    data-full-width-responsive="true" />

                <div className='text-xl font-bold'>4. Membership and Daily Login Rewards:</div>
                <div>Certain membership programs like the Booyah Pass or the Elite Pass offer diamonds as part of the rewards for logging in and completing missions daily. Even without purchasing a pass, logging into Free Fire daily may reward you with free diamonds over time.</div>

                <div className='text-xl font-bold'>5. Spin the Luck Royale:</div>
                <div>Free Fire features a Luck Royale system where players can spend diamonds for a chance to win valuable items, including diamonds themselves. Although the chances are low, participating in the Luck Royale can sometimes grant free diamonds or other premium rewards.</div>

                <div>By leveraging these methods, players can earn free diamonds and unlock a variety of rewards to enhance their Free Fire experience.</div>

            </div>
        </Layout>
    )
}

export default FreeDiamondsCoin
