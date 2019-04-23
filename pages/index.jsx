import * as React from 'react'
import { useAmp, withAmp } from 'next/amp'
import Image from '../components/Image'

const imagePath = 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/187/600/U00024187600/U00024187600_001L.JPG'

const Component = () => {
  const isAmp = useAmp()

  return (
    <>
      <div>This is {isAmp ? 'amp ' : ' '}homepage</div>
      <Image src={imagePath} height={300} />
    </>
  )
}
  
export default withAmp(Component, { hybrid: true })
