'use client'
import SliderLayout from '@/components/layout/SliderLayout'
import React, { useEffect, useState } from 'react'
import CardBerita, { propsBerita } from '../CardBerita'

export default function NewsInformation() {
    const [dataBerita,setDataBerita]=useState<any>([])
    useEffect(()=>{
        async function getData(){

             const data =await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/berita`, { next: { revalidate: 60 } })
  // useEffect(() => {
                const response = await data.json();
                setDataBerita(response["data"])
        }
        getData();
    },[])
    return (
        <div>
            <SliderLayout shown={4} infinite={false}>
                {dataBerita.map(
                    (res: propsBerita, idx: number) => (
                        <CardBerita key={idx} {...res} />
                    ),
                )}
            </SliderLayout>
        </div>
    )
}
