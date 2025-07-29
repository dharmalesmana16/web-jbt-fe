"use client"
import React, { PropsWithChildren, useEffect, useState } from 'react'
import {  isBrowser, isMobile } from 'react-device-detect'
import SliderLayout from './SliderLayout'

export default function ResponsiveLayout(props: PropsWithChildren) {
     const [deviceType, setDeviceType] = useState("");

      useEffect(() => {
        if (typeof window !== 'undefined') {
          if (isMobile) {
            setDeviceType('mobile');
          } else if (isBrowser) {
            setDeviceType('browser');
          } else {
            setDeviceType('other');
          }
        }
      }, []);
    return (
        <div>
            {deviceType == 'mobile' && (
                <SliderLayout shown={1} center={true} infinite={true} >
              {props.children}

                </SliderLayout>
          )}
            {deviceType == 'browser' && (
                          <div className="grid grid-cols-5 ">
              
              {props.children}
              </div>
            
                
          )}
        </div>
    )
}
