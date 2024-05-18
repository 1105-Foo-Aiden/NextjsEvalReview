import { useRouter } from 'next/navigation'
import React from 'react'
interface ChildProps{
  PageLink: string,
  name: string
}


export default function ButtonComponent({PageLink, name}:ChildProps) {
    let router = useRouter()
    const HandleClick = () =>{
        router.push(PageLink)
    }
  return (
    <div>
      <button className="text-white bg-red-600 rounded-md p-6" onClick={HandleClick}>{name}</button>
    </div>
  )
}
