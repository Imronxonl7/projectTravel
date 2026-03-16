import AboutBanner from '@/components/AboutBanner'
import AboutCustomerStories from '@/components/AboutCustomerStories'
import AboutGuides from '@/components/AboutGuides'
import AboutNews from '@/components/AboutNews'
import AboutNextAdventure from '@/components/AboutNextAdventure'
import AboutPriceDetails from '@/components/AboutPriceDetails'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutGuides/>
      <AboutNextAdventure/>
      <AboutCustomerStories/>
      <AboutPriceDetails/>
      <AboutNews/>
    </div>
  )
}

export default AboutPage
