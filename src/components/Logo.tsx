import React from 'react'
import Image from 'next/image'
export default function Logo({className}:any) {
  return (
      <Image
      src={"/image/logo-jbt.png"}
      alt='logo-jbt'
      width={0}
      height={0}
      sizes='100vh'
      className={className ? className : `w-full h-12`}
      />
     


  )
}
