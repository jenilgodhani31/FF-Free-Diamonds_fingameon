import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Characters() {
  const route = useRouter()
  function goToCharacterDetails(name, type) {
    route.push({
      pathname: `/tools/characters/${name}`,
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

        <div>Free Fire Characters: Unique Abilities for Strategic Advantage</div>
        <div>In Free Fire, characters play a crucial role in determining a player’s success on the battlefield. Each character comes with unique abilities that offer different strategic advantages, allowing players to choose the one that best complements their playstyle. These abilities range from enhancing movement speed to improving healing and offering defensive benefits, adding a tactical layer to the game.</div>

        <div className="grid grid-cols-2 gap-4">
          {gameData.characters.map((character) => (
            <div key={character.id} className="flex cursor-pointer justify-center relative" onClick={() => goToCharacterDetails(character.name, "characters")}>
              <div className="h-36 w-[67px] bg-transparent relative z-20">
                <img
                  className="h-full w-full object-contain bg-transparent"
                  src={character.url}
                  alt={character.name}
                />
              </div>

              <div className="z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden"></div>

              <div className="border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name">
                {character.name}
              </div>
            </div>
          ))}
        </div>

        <div className='text-xl font-bold'>1. DJ Alok</div>
        <div>DJ Alok is a fan favorite due to his ability, Drop the Beat. This skill creates a healing aura that restores health and boosts movement speed for teammates. His supportive role is invaluable in team fights, making him essential for players aiming to rank up.</div>

        <div className='text-xl font-bold'>2. Chrono</div>
        <div>Chrono, inspired by football star Cristiano Ronaldo, brings a unique blend of speed and protection. His active ability, Time Turner, creates a shield that blocks damage while enhancing movement speed. This makes him ideal for aggressive players looking to dominate their opponents and secure key eliminations.</div>

        <Ads
          data-ad-slot="3211837376"
          data-ad-format="auto"
          data-full-width-responsive="true" />

        <div className='text-xl font-bold'>3. K</div>
        <div>K is another versatile character with the ability called Master of All. He can switch between two modes—one that enhances healing and another that boosts EP recovery. K is perfect for players who want to adapt their strategy mid-game, offering a tactical edge in various scenarios.</div>

        <div className='text-xl font-bold'>4. Skyler</div>
        <div>Skyler's ability, Riptide Rhythm, allows him to unleash a sonic wave that damages enemies and destroys gloo walls. This makes him a powerful choice for players who prefer aggressive tactics and want to break through enemy defenses.</div>

      </div>
    </Layout>
  )
}

export default Characters 
