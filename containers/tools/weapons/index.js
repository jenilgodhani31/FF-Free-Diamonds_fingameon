import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Weapons() {
    const route = useRouter()
    function goToWeaponDetails(name, type) {
        route.push({
            pathname: `/tools/weapons/${name}`,
            query: { item: name, category: type },
        })
    }
    return (
        <Layout>

            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
                <div className='pb-10'>
                    <Ads
                        data-ad-slot="3211837376"
                        data-ad-format="auto"
                        data-full-width-responsive="true" />
                </div>
                <div className='text-xl font-bold'>Understanding Free Fire Weapon Types: Elevate Your Gameplay</div>
                <div>In Free Fire, weapon selection plays a vital role in determining your success on the battlefield. With various types of weapons available, each serving different purposes, understanding their characteristics can significantly enhance your gameplay and help you climb the ranks. Here’s a closer look at the primary weapon types in Free Fire and their advantages.</div>

                <div className="flex flex-col gap-4">
                    {gameData.weapons.map((weapon) => (
                        <div
                            key={weapon.id}
                            className="flex  justify-between items-center border border-white/50 bg-white/15 backdrop-blur-[6px] py-3.5 px-5 rounded-2xl cursor-pointer"
                            onClick={() => goToWeaponDetails(weapon.name, "weapon")}
                        >
                            <div className="text-white text-lg font-semibold leading-6" >{weapon.name}</div>
                            <img
                                alt={weapon.name}
                                className="h-7 w-14 object-contain"
                                src={weapon.url}
                            />
                        </div>
                    ))}

                </div>
                
                <div className='text-xl font-bold'>1. Assault Rifles</div>
                <div>Assault rifles are versatile and well-rounded weapons, perfect for various combat scenarios. The M4A1 and AK47 are popular choices among players. The M4A1 offers low recoil and decent fire rate, making it ideal for both medium and close-range engagements. In contrast, the AK47 delivers high damage per shot, making it lethal in skilled hands. Mastering assault rifles can greatly improve your chances of securing eliminations and advancing in rank.</div>

                <div className='text-xl font-bold'>2. Submachine Guns (SMGs)</div>
                <div>Submachine guns, such as the MP40 and UMP, excel in close-quarters combat. Their high rate of fire and manageable recoil make them perfect for aggressive players who prefer rushing enemies. The MP40, in particular, is favored for its rapid-fire capability, allowing players to overwhelm opponents quickly. Incorporating SMGs into your arsenal is essential for dominating close-range encounters.</div>

                <Ads
                    data-ad-slot="3211837376"
                    data-ad-format="auto"
                    data-full-width-responsive="true" />

                <div className='text-xl font-bold'>3. Shotguns</div>
                <div>Shotguns are devastating at close range, capable of delivering high damage with a single shot. Weapons like the M1014 and SPAS12 are effective for players who enjoy close-quarters combat. Their ability to eliminate enemies quickly makes them a great choice for aggressive strategies, particularly in tight spaces.</div>

                <div className='text-xl font-bold'>4. Sniper Rifles</div>
                <div>For those who prefer long-range engagements, sniper rifles like the AWM and Kar98k are indispensable. They provide high damage and precision, allowing players to take out enemies from a distance. Mastering sniping can give you a significant advantage in competitive play, especially during late-game situations.</div>




            </div>
        </Layout>
    )
}

export default Weapons 
