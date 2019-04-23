import * as React from 'react'
import { useAmp, withAmp } from 'next/amp'

const Component = () => {
  const isAmp = useAmp()

  return <div>This is {isAmp ? 'amp ' : ' '}homepage</div>
}
  
export default withAmp(Component, { hybrid: true })
