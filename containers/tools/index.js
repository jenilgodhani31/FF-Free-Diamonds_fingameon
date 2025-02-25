import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React, { Fragment } from 'react'

function Tools() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px]">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">Free Fire:  </strong> Ultimate Guide to Tools, Characters, Skins, Weapons, Pets, Emotes, and Diamonds </div>
        <div>In Free Fire, tools are indispensable items that provide players with tactical advantages, helping them survive and thrive in the intense battle royale environment. These tools range from healing items to explosive gadgets, each serving a unique purpose in gameplay. Here’s a look at some of the most important tools available in Free Fire.</div>
        <div className="flex items-center justify-center px-5 ">
          <a href='/tools/characters'>

            <img src="/resources/buttons/tool/charecter.png" className="w-full" />
          </a>
        </div>

        <div className="flex items-center justify-center px-5  cursor-pointer">
          <a href='/tools/weapons'>
            <img src="/resources/buttons/tool/weapons.png" className="w-full" />
          </a>
        </div>

        <div className="flex items-center justify-center px-5 pt-[5px] cursor-pointer">
          <a href='/tools/pets'>
            <img src="/resources/buttons/tool/pets.png" className="w-full" />
          </a>
        </div>

        <div className="flex items-center justify-center px-5 cursor-pointer">
          <a href='/tools/emotes'>
            <img src="/resources/buttons/tool/emotes.png" className="w-full" />
          </a>
        </div>

        <div className="flex items-center justify-center px-5 pb-10 cursor-pointer">
          <a href='/free-diamonds-coin/diamonds'>
            <img src="/resources/buttons/tool/diamonds.png" className="w-full" />
          </a>
        </div>

        <div className='text-xl font-bold'>Healing Tools: </div>
        <div >Survival is key in Free Fire, and healing items like Medkits, Bandages, and Adrenaline Syringes help players recover lost health during combat. Medkits provide full health restoration, while Bandages offer quicker but smaller healing. The Adrenaline Syringe not only restores health but also boosts energy points (EP), enhancing overall performance.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">Grenades & Explosives : </strong> Grenades are a game-changer in Free Fire. Frag Grenades deal area damage and are perfect for flushing enemies out of cover, while Smoke Grenades create vision-blocking clouds, offering cover for strategic repositioning. Flashbangs temporarily blind opponents, and Incendiary Grenades create fire zones that damage enemies over time. </div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">Gloo Walls : </strong> The Gloo Wall is a versatile and highly valued tool that creates temporary barriers of protection. These deployable shields help block enemy fire, offering crucial cover during intense battles or while healing.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">Utility Tools : </strong> Items like Vending Machines provide a way to quickly acquire weapons, armor, or healing supplies, enhancing in-game resource management. Additionally, Speed Boosters like Energy Drinks temporarily increase player movement speed, aiding in evasion or quick positioning.</div>

        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>

        <div className=' '><strong className="text-[20px] md:text-[18px]">Pets as Tools: </strong> Though not traditional tools, pets like Falco and Shiba offer useful passive abilities, such as increased gliding speed or better healing efficiency, complementing player strategies.</div>
        <div className='text-xl font-bold'>How Tools Impact Gameplay:</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Survival :  </strong> The most obvious advantage of tools in Free Fire is their role in sustaining your survival. Healing tools like Medkits, Bandages, and Adrenaline Syringes allow players to recover from damage, ensuring they have the health to continue fighting. In tight battles, the difference between victory and defeat can come down to whether you have the right healing item at the right time.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Tactical Advantage :  </strong>Tools like grenades, Smoke Grenades, and Gloo Walls give players the chance to control the battlefield. Whether you're flushing an enemy out of a hiding spot with a Frag Grenade, blocking their vision with a Smoke Grenade, or using a Gloo Wall for cover, these tools provide a tactical edge in almost every situation.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Mobility :  </strong> Some tools, like the Speed Boosters or Falco (pet), enhance player mobility, allowing you to move more quickly across the map. The ability to reposition faster is an essential skill in Free Fire, especially as the safe zone shrinks and players must be constantly on the move.</div>
        <div className=' '><strong className="text-[20px] md:text-[18px]">•	Strategy :  </strong> Tools open up numerous possibilities for strategic gameplay. Whether you’re setting up ambushes with Flashbangs, controlling the flow of battle with Smoke Grenades, or deploying Gloo Walls for protection, the right combination of tools can outsmart even the most prepared opponents.</div>
      </div>
    </Layout>
  )
}

export default Tools
