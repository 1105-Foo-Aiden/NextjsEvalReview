"use client";
import ButtonComponent from "@/Components/ButtonComponent/buttonComponent";
import { PaginationComponent } from "@/Components/PaginationCompoinent/PaginationComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
    const [form, setForm] = useState({name: '', favoriteFood: ''})
    const isFilled = form.name != '' && form.favoriteFood != '';
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const updateForm = (e: React.ChangeEvent<HTMLInputElement>) =>{
        //creating a clone of form and setting the values based on target values
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleForm = () =>{
        //resetting values to empty strings if is filled is false
        isFilled ? setIsSubmitted(true)
        : setForm({name: '', favoriteFood: ''})
    }

    useEffect(() =>{
        console.log(form)
    }, [form])


    return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24 bg-gray-600">
         <ButtonComponent PageLink='/' name='Back Home'/>
        <p className="text-white text-3lg">A form for seeing if both feilds are filled out and if it's submitted, the form disappears</p>
        <form className={isSubmitted ? 'hidden' : ''}>
        <h1 className="text-center text-lg text-white pb-10">Favorite Food Form</h1>
        <div className="bg-white shadow-md rounded p-8">
            <div className="mb-4">
                <label className="border rounded p-3">Name</label>
                    <input onChange={updateForm} type="text" placeholder="Name" name="name" className="border rounded p-3" value={form.name}/>
            </div>

            <div className="mb-4">
                <label  className="border rounded p-3">Favorite Food</label>
            <input placeholder="Favorite Food" name="favoriteFood" onChange={updateForm} type="text" className="border rounded p-3" value={form.favoriteFood}/>
            </div>
            <button className={`text-white py-2 px-4 rounded ${isFilled ? 'bg-green-700' : 'bg-red-600'}`} type="button" onClick={handleForm}>{isFilled ? "Submit" : "Clear"}</button>
        </div>
        </form> 
        <p className={`${isSubmitted? "" : "hidden"} text-white`} > Thank you for your Submission!</p>
        <PaginationComponent/>
    </div>
    );
}
