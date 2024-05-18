'use client'
import ButtonComponent from '@/Components/ButtonComponent/buttonComponent'
import InputComponent from '@/Components/InputComponent/InputComponent'
import { PaginationComponent } from '@/Components/PaginationCompoinent/PaginationComponent'
import React, { useState } from 'react'


export default function page() {

  //function to put into the component as a "Prop"
  const [changeText, setChangeText] = useState<string>("")
  const ChangeTextFunc = (text: string) =>{
    setChangeText(text)
  }
  
  return (
    <div className='flex min-h-screen flex-col items-center gap-5 p-24 bg-gray-600'>
      <ButtonComponent PageLink='/' name='Back Home'/>
      <p className="text-3lg text-white text-center">We are changing the text color in our page from our component</p>
      <InputComponent changeText={ChangeTextFunc}/>
        <p className='text-white'>Password Must Contain 
          {/* Spans allow us to keep text in the same line while still being able to individually style them */}
          {/* Spans are the div tags of p Tags */}
          {/* .test is just for tesing the input for any of the specified things in the square brackets */}
          <span style={{color: /[A-Z]/.test(changeText) ? "green" : "red"}}>Uppercase  </span>
          <span>and a </span>
          <span style={{color: /[0-9]/.test(changeText) ? "green" : "red"}}>Number </span>
        </p>
        <PaginationComponent/>
    </div>
  )
}
