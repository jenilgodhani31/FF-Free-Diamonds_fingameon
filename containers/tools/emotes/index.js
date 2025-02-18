import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React from 'react'

function Emotes() {
  const route = useRouter()
  function goToEmotesDetails(name, type) {
    route.push({
      pathname: `/tools/emotes/${name}`,
      query: { item: name, category: type },
    })
  }
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px]">
        <div className="grid grid-cols-2 gap-4 pb-10">
          {gameData.emotes.map((emotes) => (
            <div key={emotes.id} className="flex cursor-pointer justify-center relative" onClick={() => goToEmotesDetails(emotes.name, "emotes")}>
              <div className="h-36 w-[67px] bg-transparent relative z-20">
                <img
                  className="h-full w-full object-contain bg-transparent"
                  src={emotes.url}
                  alt={emotes.name}
                />
              </div>

              <div className="z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden"></div>

              <div className="border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name">
                {emotes.name}
              </div>
            </div>
          ))}
        </div>


      </div>
    </Layout>
  )
}

export default Emotes 
