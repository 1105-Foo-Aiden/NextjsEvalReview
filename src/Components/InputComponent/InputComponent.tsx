
import React from 'react'
interface ChildProps{
    changeText: (test:string) => void
}

export default function InputComponent({changeText}: ChildProps) {
    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        changeText(e.target.value)
    }
  return (
    <div>
      <input type="text" onChange={HandleChange} />
    </div>
  )
}
