"use client"
import React from 'react'
import CardLayanan, { propsLayanan } from '../ui/CardLayanan'
import apiLayanan from '../../api/layanan.json'
import {  MobileView } from 'react-device-detect'
import SliderLayout from './SliderLayout'
export default function HomeLayanan() {
  return (
    <div>
        <MobileView>
        <SliderLayout>

        {
            apiLayanan["data"].map((res: propsLayanan, idx: number) => (
                
                <CardLayanan key={idx} {...res} />
                
            ))
        }
        </SliderLayout>
        </MobileView>
    </div>
  )
}
