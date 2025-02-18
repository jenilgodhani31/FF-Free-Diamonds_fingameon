import Layout from '@components/Layout'
import React from 'react'

function Apply() {
    return (
        <Layout>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px]">
                <div className="flex flex-col gap-4 w-full">
                    <a href='/submit'>
                    <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
                            <div className="text-white text-lg font-bold text-center">Current Simulator</div>
                    </button>
                    </a>
                   
                    <a href='/submit'>
                        <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
                            <div className="text-white text-lg font-bold text-center">Other User ID</div>
                        </button>
                    </a>


                </div>
            </div>
        </Layout>
    )
}

export default Apply
