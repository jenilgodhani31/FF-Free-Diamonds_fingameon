import Layout from '@components/Layout'
import React, { useState } from 'react'

function Submit() {
  return (
    <Layout>
      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px]">
        <div className="border-y border-white/15 backdrop-blur pt-6 pb-3 px-6 mt-3 mb-6 relative overflow-hidden">
          <div className="text-white text-base font-semibold pe-3">
            Enter your <span className="text-[#8574E0]">Username</span> or <br />{' '}
            <span className="text-[#8574E0]">User ID</span> to Unlock Rewards.
          </div>

          <div className="mt-5">
            <div class="">
              <input type="text" class="w-full p-2 rounded-[42px] pl-10" placeholder="Enter User Id" id="leadingIconDefault" />
              <span class="input-group-text absolute left-9 mt-[9px] top-1/2 transform -translate-y-1/2">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user text-base-content/80">
                  <path d="M20 21V19a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
            </div>
            <a href='/success'>
            <div
              className="flex bg-[#34A852] rounded-[42px] items-center justify-center mt-4 py-3 cursor-pointer"
            >
            
                <div className="text-white text-base font-bold leading-5">SUBMIT</div>
            </div>
            </a>
           
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Submit
