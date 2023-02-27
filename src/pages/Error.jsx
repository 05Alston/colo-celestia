import React from 'react'
import { Backdrop } from '../components'
const Error = () => {
  return (
    <div className="relative h-screen bg-space-bg overflow-hidden">
        <Backdrop/>
        <div className="container relative z-30 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
            <div className="relative z-10 flex flex-col items-center w-full font-mono">
                <h1 className="mt-4 text-5xl font-black text-white leading-tight text-center">
                    You&#x27;re alone here
                </h1>
                <p className="font-black text-white text-8xl my-44 animate-bounce">
                    404
                </p>
            </div>
        </div>
    </div>
  )
}

export default Error