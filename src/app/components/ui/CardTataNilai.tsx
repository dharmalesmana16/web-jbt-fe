'use client'
import React from 'react'
import apiTataNilai from '../../api/tatanilai.json'

import SliderLayout from '../layout/SliderLayout';
export type propsTataNilai = {
    id: number;
    nama: string;
    deskripsi: string;

}

export default function CardTataNilai() {
   
    return (
           <SliderLayout infinite={false} shown={3} center={false}>
                {
                    apiTataNilai["data"].map((res: propsTataNilai, key: number) => (
                        <div key={key} className="p-2">

                        <div className="rounded-3xl p-5 h-[125px] max-w-sm bg-white text-center shadow-lg pointer-none hover:translate-y-1 hover:scale-105 hover:transition hover:duration-500 hover:text-main">
                                <h1 className='text-main font-semibold text-2xl'>{res?.nama.toUpperCase()}</h1>
                                <p className='inline-block text-sm text-gray-500 tracking-wide'>{res?.deskripsi}</p>
                            </div>
                        </div>
                    ))
                }
            </SliderLayout>
    )
}
