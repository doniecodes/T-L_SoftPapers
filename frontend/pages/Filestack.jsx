import React from 'react'
import { PickerInline } from "filestack-react"

const Filestack = () => {
  return (
    <>
    <PickerInline apikey={import.meta.env.VITE_FILESTACK_KEY}
    onSuccess={(res) => console.log(res)}/>
    </>
  )
}

export default Filestack