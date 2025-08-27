import React from 'react'

export default function Index() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="left">
          <h1>Halaman Tarif Tol</h1>
        </div>
        <div className="right">
          <a href="/dashboard/tarif/create" target="_blank" className="text-white bg-main hover:bg-main-800 focus:outline-none focus:ring-4 focus:ring-main-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">Tambah Data </a>
        </div>
      </div>

    </div>
  )
}
