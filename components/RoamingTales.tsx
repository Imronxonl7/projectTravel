import React from 'react'
import Container from './Container'
import RoamingTalesUp from './RoamingTalesUp'
import RoamingTalesLeft from './RoamingTalesLeft'
import RoamingTalesRight from './RoamingTalesRight'

const RoamingTales = () => {
  return (
    <section>
        <Container className='Your style'>
            <div className='flex flex-col gap-20'>
                <RoamingTalesUp/>
                <div className='grid grid-cols-2'>
                    <RoamingTalesLeft/>
                    <RoamingTalesRight/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default RoamingTales
