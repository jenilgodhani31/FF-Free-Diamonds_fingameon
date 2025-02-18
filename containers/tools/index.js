import Layout from '@components/Layout'
import React from 'react'

function Tools() {
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px]">

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

      </div>
    </Layout>
  )
}

export default Tools
