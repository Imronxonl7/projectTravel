import React from 'react'
import Container from './Container'
import ClearPriceText from './ClearPriceText'
import ClearPriceCards from './ClearPriceCards'

const ClearPrice = () => {
  return (
    <section>
      <Container className='Your style'>
        <div className='flex flex-col gap-21'>
            <ClearPriceText/>
            <ClearPriceCards/>
        </div>
      </Container>
    </section>
  )
}

export default ClearPrice
