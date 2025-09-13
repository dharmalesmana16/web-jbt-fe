"use client"
import axios from '@/app/lib/utils/axios'
import React, { useState } from 'react'

const initialValues = {
        nama_direksi: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        deskripsi: "",
        jabatan: "",
        tipe_direksi: "",
        file: "",
};
export default function DireksiForm() {
const [value,setValues] = useState(initialValues);

  return (
    <div>

    </div>
  )
}
