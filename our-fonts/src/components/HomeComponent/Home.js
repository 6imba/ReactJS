import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import CrouselComponent from './CrouselComponent/CrouselComponent'
import ContentComponent from './ContentComponent/ContentComponent'

import FooterComponent from '../FooterComponent/FooterComponent'
const Home = () => {
  return (
    <>
      <HeaderComponent/>
      <CrouselComponent/>
      <ContentComponent/>
      <FooterComponent/>
    </>
  )
}

export default Home