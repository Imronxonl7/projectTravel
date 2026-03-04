import React from 'react'
import Container from './Container'
import UnforgettableTravelText from './UnforgettableTravelText'
import UnforgettableTravelCards from './UnforgettableTravelCards'

const UnforgettableTravel = () => {
  return (
    <section>
      <Container className='Your style'>
        <div className='flex flex-col gap-20'>
            <UnforgettableTravelText/>
            <UnforgettableTravelCards/>
        </div>
      </Container>
    </section>
  )
}

export default UnforgettableTravel
