import React from 'react'
import Container from './Container'
import DestinationText from './DestinationText'
import DestinationLocation from './DestinationLocation'
import DestinationCard from './DestinationCard'

const DreamDestination = () => {
  return (
    <section>
      <Container className='px-15'>
        <div className='flex flex-col gap-20'>
            <DestinationText/>
            <DestinationLocation/>
            <DestinationCard/>
        </div>
      </Container>
    </section>
  )
}

export default DreamDestination
