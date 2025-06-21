import React from 'react'
import Link from 'next/link'
export default function Logo() {
  return (
   
      <Link
        href="/"
        className="flex items-center  ">
        <img src="/image/logojbt.png" className="w-full h-10 " alt="Dalsfindo Logo" />
      </Link>


  )
}
