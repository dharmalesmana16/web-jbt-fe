
import React from 'react'
import apiMisi from '../../api/misi.json'
import {  FaRegCheckCircle } from 'react-icons/fa';
import SliderLayout from '../layout/SliderLayout';
export type propsMisi = {
    id: number;
    nama: string;

}
export default async function CardMisi() {

    return (
        <SliderLayout shown={3} infinite={true}>

            {
                apiMisi["data"].map((res: propsMisi, key: number) => (
                    <div key={key} className="p-4">
                        <div className="rounded-3xl p-5 h-[150px] max-w-md bg-white shadow-lg pointer-none hover:translate-y-1 hover:scale-105 hover:transition hover:duration-500 hover:text-main">
                            <ul className="max-w-md text-gray-500 list-outside dark:text-gray-400">
                                <li className="flex  items-top">
                                    {/* <img src="/image/Icon/check-circle.png" className='inline-block' alt="" srcSet="" /> */}
                                    <FaRegCheckCircle className="w-5 h-5  text-main font-bold text-4xl me-2 shrink-0" />
                                    {res?.nama}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </SliderLayout>
    )
}
