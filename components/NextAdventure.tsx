import React from 'react'
import Container from './Container'
import NextAdventureText from './NextAdventureText'
import NextAdventureCards from './NextAdventureCards'

const NextAdventure = () => {
  return (
    <section className='py-20'>
      <Container className='Your style'>
        <div className='flex flex-col gap-15'>
            <NextAdventureText/>
            <NextAdventureCards/>
        </div>
      </Container>
    </section>
  )
}

export default NextAdventure
