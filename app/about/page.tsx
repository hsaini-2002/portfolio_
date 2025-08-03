import React from 'react'
import Abt_hero from './abt_hero'
import Navbar from '@/components/navbar'
import Abt_button_animation from './abt_button_animation'
import Abt_core_values from './abt_core_values'
import Abt_works_with from './abt_works_with'
import Abt_how_works from './abt_how_works'
import Abt_carousel from './abt_carousel'
import AbtReachout from './abt_reachout'
import AbtFeatures from './abt_features'
import Abt_work_showcase from './abt_work_showcase'

const AbtHome = () => {
  return (
    <div className="overflow-x-hidden md:overflow-x-visible">
      <div>
        <Navbar />
        <Abt_hero />
        <Abt_button_animation />
        <Abt_core_values />
        <Abt_work_showcase />
        <Abt_works_with />
        <Abt_how_works />
        <Abt_carousel />
        <AbtFeatures />
        <AbtReachout />
      </div>
    </div>
  )
}

export default AbtHome
