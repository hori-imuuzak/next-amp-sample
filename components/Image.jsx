import * as React from 'react'
import { useAmp } from 'next/amp'

export default function Image({ src, width, height }) {
  const isAmp = useAmp()
  return isAmp ? (
      <amp-img src={src} layout="fixed-height" height={height} />
  ) : (
      <img src={src} width={width} height={height} />
  )
}
