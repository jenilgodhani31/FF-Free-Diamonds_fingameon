import Ads from '@components/Ads';
import Layout from '@components/Layout';
import React, { Fragment } from 'react'

function Diamonds() {
    const diamondOptions = [100, 310, 520, 1060, 2180, 5600];
    return (
        <Layout>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>

                <div className='text-xl font-bold'>Unlocking Free Diamonds in Free Fire: Boost Your Game and Climb the Ranks</div>
                <div>In Free Fire, diamonds are the premium currency that unlocks a plethora of in-game items, including skins, characters, and emotes. For players looking to enhance their gaming experience and climb the ranks, accumulating free diamonds can be a game-changer. Here’s how you can earn these valuable resources without spending real money.</div>
                <div className="grid grid-cols-2 justify-between mt-6 gap-x-9 gap-y-6">
                    {diamondOptions.map((amount) => (
                        <div key={amount}>
                            <a href='/players/'>
                                <div
                                    className="rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5"
                                    style={{
                                        boxShadow: 'rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset',
                                        background: 'rgb(160, 29, 186)',
                                    }}
                                >

                                    <div className="h-7">
                                        <img
                                            className="size-[27px] object-contain"
                                            alt="diamond"
                                            src="/resources/heart.png"
                                        />
                                    </div>
                                    <div className="text-white text-xs font-medium mt-2.5">
                                        Get Free Diamonds
                                    </div>
                                    <div className="mt-0.5 text-white text-[22px] font-medium leading-[29px]">
                                        {amount}
                                    </div>
                                </div>
                            </a>

                        </div>
                    ))}
                </div>

                <div className='text-xl font-bold'>1. Participate in Events</div>
                <div>Assault rifles are versatile and well-rounded weapons, perfect for various combat scenarios. The M4A1 and AK47 are popular choices among players. The M4A1 offers low recoil and decent fire rate, making it ideal for both medium and close-range engagements. In contrast, the AK47 delivers high damage per shot, making it lethal in skilled hands. Mastering assault rifles can greatly improve your chances of securing eliminations and advancing in rank.</div>

                <div className='text-xl font-bold'>2. Use the Free Fire Membership</div>
                <div>Free Fire offers a membership program that grants players daily bonuses, including free diamonds. By subscribing to this program, you can receive diamonds regularly, providing a steady supply for purchasing items that enhance your gameplay. This membership can significantly improve your performance and contribute to your ranking efforts.</div>

                <Ads
                    data-ad-slot="3211837376"
                    data-ad-format="auto"
                    data-full-width-responsive="true" />

                <div className='text-xl font-bold'>3. Complete Missions and Challenges</div>
                <div>Regularly completing daily and weekly missions is another effective way to earn free diamonds. These missions often require you to engage in gameplay activities, encouraging you to explore different modes and strategies. By fulfilling these challenges, you not only accumulate diamonds but also improve your skills, making it easier to climb the ranks.</div>

                <div className='text-xl font-bold'>4. Utilize Third-Party Apps and Surveys</div>
                <div>Certain third-party apps and websites offer rewards for completing surveys or tasks, which can be exchanged for diamonds in Free Fire. Ensure that you use reputable platforms to avoid scams.</div>
            </div>

        </Layout>

    )
}

export default Diamonds
