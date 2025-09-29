'use client'
import SliderLayout from '@/components/layout/SliderLayout'
import React, { useEffect, useState } from 'react'
import CardBerita, { propsBerita } from '../CardBerita'
import axios from 'axios'


export default function NewsInformation() {
    const [dataBerita,setDataBerita]=useState<any>([])
    useEffect(()=>{
        axios.get('http://202.46.152.202:8001/api/berita').then(function(resp){
            setDataBerita(resp.data.data);
        })
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
