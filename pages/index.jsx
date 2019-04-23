import * as React from 'react'
import { useAmp, withAmp } from 'next/amp'
import Image from '../components/Image'

const imagePath = 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/187/600/U00024187600/U00024187600_001L.JPG'

const Component = () => {
  const isAmp = useAmp()

  return (
    <>
      <div>This is {isAmp ? 'amp ' : ' '}homepage</div>
      <Image src={imagePath} height={220} />
      {isAmp ? (
        <div>
          現在ページを表示しています。
          購入する場合は、より詳細なページを開いてください。
          <a href="/" target="_blank">こちら</a>
        </div>
      ) : (
        <div>
          <button onClick={() => alert('ありがとうございます')}>購入する</button>
        </div>
      )}
    </>
  )
}
  
export default withAmp(Component, { hybrid: true })
