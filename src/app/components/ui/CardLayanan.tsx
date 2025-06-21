import { headers } from 'next/headers';
import React from 'react';
import Link from 'next/link';
export type propsLayanan = {
    id:number;
    nama:string;
    icon:string;
    deskripsi:string;

}

export default async function CardLayanan(props:propsLayanan) {
    
           const headerList = await headers();
           const pathname = headerList.get('x-pathname');
           const url = new URL(pathname ? pathname : "","http://localhost:3000")
        url.searchParams.set("layanan", "true");
        url.searchParams.set("idlayanan", props.id.toString());
    return (
        <Link href={url.toString()} scroll={false}>
        <div  className="flex p-5 flex-col max-w-xl rounded-3xl hover:-translate-y-1 hover:scale-100 hover:transition hover:duration-500  h-full text-center bg-white border border-gray-200  shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                      <div className={"p-4  rounded-xl block mx-auto bg-[#B8C5EF]" }>
                                                    {/* <IoDocumentText className="inline-block w-7 h-7 text-main" /> */}
                                                    <img src={props.icon} className=' w-7 h-7 ' alt="" srcSet="" />
                                                </div>
                                        <div className="py-2 h-full">
                                        <h5 className="text-xl font-semibold tracking-tight text-main dark:text-white">{props.nama}</h5>
                                        
                                        </div>
                                        <div className="h-full">
                                            <p className="text-gray-500 text-sm">{props.deskripsi}</p>
                                        </div>
                                </div>
        </Link>
    )
}
