import React from 'react'
import Container from './Container'
import NextAdventureText from './NextAdventureText'
import NextAdventureCards from './NextAdventureCards'

const NextAdventure = () => {
  return (
    <section>
      <Container className='Your style'>
        <div>
            <NextAdventureText/>
            <NextAdventureCards/>
        </div>
      </Container>
    </section>
  )
}

export default NextAdventure
