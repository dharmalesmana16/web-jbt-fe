import React from 'react'
import apiSaham from '@/api/saham.json'
import { TbRectangleFilled } from 'react-icons/tb'
 type propsSaham = {
  id: number,
  warna:string,
  nama: string,
  jumlah_saham: string,
  jumlah: string,
  kepemilikan: string,
}
export default function TableSaham() {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-white uppercase bg-main-500 dark:bg-main-500 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Jumlah Saham (Lembar)
              </th>
              
              <th scope="col" className="px-6 py-3">
                Kepemilikan (%)
              </th>

            </tr>
          </thead>
          <tbody>
            {
              apiSaham["data"].map((res: propsSaham, idx: number) => (
                <tr key={idx}  className="odd:bg-white odd:dark:bg-white even:bg-gray-50 even:dark:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {res.id}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className="flex items-center">
                        <TbRectangleFilled style={{ color:`${res.warna}` }} className={"h-5 w-5 rounded-sm me-2"} /> {res.nama}
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {res.jumlah_saham}
                  </td>
                 
                  <td className="px-6 py-4">
                    {res.kepemilikan}
                  </td>
                </tr>))
            }

          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 ">
                <th scope="row"></th>
                <th scope="row" className="px-6 py-3 text-base">Total</th>
                <td className="px-6 py-3">945.434</td>
                <td className="px-6 py-3">100.00</td>
            </tr>
        </tfoot>
        </table>
      </div>

    </div>
  )
}
