import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import { VideoHomeBg } from '../Assets'

const PageHero = (props) => {
  return (
    <div className="bg-primary overflow-hidden h-[75px]">
      <div className="w-screen">
        <div className="bg-video">
          {/* <video autoPlay muted loop className="w-full h-full object-cover brightness-50">
            <source
              src={VideoHomeBg}
              type="video/webm"
            />
          </video> */}
        </div>
      </div>
      <div className="inset-0  flex justify-center items-center">
        <div className=" bg-no-repeat bg-center w-full">
          <Navbar menuItems={props.menu} scroll={false} />
        </div>
      </div>
    </div>
  )
}

export default PageHero