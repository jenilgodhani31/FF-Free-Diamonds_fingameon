import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Pets() {
  const route = useRouter()
  function goToPetsDetails(name, type) {
    route.push({
      pathname: `/tools/pets/${name}`,
      query: { item: name, category: type },
    })
  }

  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px]">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className='text-xl font-bold'>The Role of Pets in Free Fire: Boost Your Gameplay</div>
        <div>In Free Fire, pets are more than just companions; they offer unique abilities that can significantly enhance your gameplay and help you climb the ranks. Each pet has special skills that provide tactical advantages, making them essential for players looking to gain an edge in competitive matches. Here’s an overview of some of the most popular pets and how they can improve your performance.</div>
        <div className="grid grid-cols-2 gap-4 pb-10">
          {gameData.pets.map((pets) => (
            <div key={pets.id} className="flex cursor-pointer justify-center relative" onClick={() => goToPetsDetails(pets.name, "pets")}>
              <div className="h-36 w-[67px] bg-transparent relative z-20">
                <img
                  className="h-full w-full object-contain bg-transparent"
                  src={pets.url}
                  alt={pets.name}
                />
              </div>

              <div className="z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden"></div>

              <div className="border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name">
                {pets.name}
              </div>
            </div>
          ))}
        </div>

        <div className='text-xl font-bold'>1. Types of Emotes</div>
        <div>Free Fire offers a wide range of emotes, each with unique animations and themes. From dance moves to humorous gestures, players can find emotes that resonate with their personality. Some popular choices include the Dance Emote, which allows you to celebrate victories, and the Taunt Emote, perfect for teasing opponents after a successful elimination. Using these emotes effectively can enhance your gameplay experience and foster camaraderie with teammates.</div>

        <div className='text-xl font-bold'>2. Ranking Advantages</div>
        <div>While emotes may seem purely cosmetic, they can influence your ranking in Free Fire. Using emotes strategically can distract opponents or boost team morale during intense matches. Celebrating a well-executed play with a dance emote can not only lighten the mood but also create a positive atmosphere, helping your team perform better. Emotes can also serve as a means of communication in situations where voice chat isn’t possible, allowing for coordination and tactical plays.</div>

        <Ads
          data-ad-slot="3211837376"
          data-ad-format="auto"
          data-full-width-responsive="true" />

        <div className='text-xl font-bold'>3. Unlocking Emotes</div>
        <div>Emotes can be unlocked through various means, including in-game events, the Elite Pass, or by purchasing them in the store. Investing in unique emotes can showcase your style and dedication to the game, making you stand out among competitors.</div>

        
      </div>
    </Layout>
  )
}

export default Pets 
