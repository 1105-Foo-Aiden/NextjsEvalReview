'use client'

import React, { useEffect, useState } from 'react'
import { IPokemon } from '../DataServices/DataService'
import APICalling, { FetchEvos, LocationCall } from '../DataServices/ApiCall'
import ButtonComponent from '@/Components/ButtonComponent/buttonComponent'
import { PaginationComponent } from '@/Components/PaginationCompoinent/PaginationComponent'


export default function page() {
    // const abilities = document.getElementById("abilities")
    const [data, setData] = useState<IPokemon>()
    const [locationData, setLocationData] = useState<string>("")
    const [evoData, setEvoData] = useState<string[]>()
    const [search, setSearch] = useState<string>()
    const [searchItem, setSearchItem] = useState<string | number>(1)
    const [shiny, setShiny] = useState<boolean>(false)
    let fetchedData: IPokemon

    const HandleSearch = () =>{
        if(search){
            setSearchItem(search)
        }
        return searchItem;
    }
    useEffect(() =>{
        const GetData = async () =>{
            try{
                console.log("Fetching Pokemon")
                fetchedData = await APICalling(searchItem)
                setData(fetchedData)
                if(data){
                    setShiny(false)
                    setSearch("")
                    const LocalData = await LocationCall(data.location_area_encounters)
                    setLocationData(LocalData)
                    const EvoData = await FetchEvos(data.species.url)
                    setEvoData(EvoData)
                }
            }catch(error){
                alert("Pokemon doesn't exist")
            }
        }
        GetData()
    }, [searchItem])

    const HandleShiny = () =>{
        setShiny(!shiny)
        return shiny
    }
    
    const HandleRandom = () =>{
        const RandomNum = Math.floor((Math.random() * 649) + 1)
        setSearchItem(RandomNum)
    }


    return (
        <div className='min-h-screen gap-5 p-24 bg-gray-600'>
            <ButtonComponent PageLink='/' name='Back Home'/>
            <PaginationComponent />
            <img src={data ? data && !shiny ? data.sprites.other?.['official-artwork'].front_default : data.sprites.other?.['official-artwork'].front_shiny : ""} alt="Pokeball" id='pokemonImg' className='w-96 h-96 shadow-xl shadow-gray-800 justify-end p-5' onClick={HandleShiny} />
            <img src={data ? data && !shiny ? data.sprites.other?.showdown.front_default : data.sprites.other?.showdown.front_shiny : ""} alt="Pokeball" id='pokemonImg' className='w-96 h-96 shadow-xl shadow-gray-800 justify-end p-5' onClick={HandleShiny} />
            <div className="text-center grid grid-cols-1 grid-rows-5 gap-2">
                <input type="text" className="mb-3 mt-5 bg-gray-50 text-gray-9000 w-96 h-12" id='searchField' placeholder='Enter a Name or number' value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button id="searchBtn" onClick={HandleSearch} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 w-96 h-16">Search</button>
                <button id="RandBtn" onClick={HandleRandom} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 w-96 h-16">Random</button>
                <div className="grid gap-1">
                    <p id="names" className="text-3xl text-white max-w-96">{data && data.name && evoData ? data.name : "Name goes here"}</p>
                    <hr />
                    <p id="typing" className="text-3xl text-white max-w-96">{data && data.types && evoData ? data.types.map((type) => type.type.name).join(", ") : "Types go here"}</p>
                    <hr />
                    <p id="abilities" className="text-3xl text-white max-w-96">{data && data.abilities && evoData ? data.abilities.map((ability) => ability.ability.name).join(", ") : "Abilities go here"}</p>
                    <hr />
                    <p id="locations" className="text-2xl text-white max-w-96">{locationData ? locationData : "Locations go here"}</p>
                    <hr />
                    <p id="moves" className="text-3xl text-white max-h-20 max-w-96 overflow-y-scroll">{data && data.moves && evoData ? data.moves.map((move) => move.move.name).join(", ") : "Moves go here"}</p>
                    <hr />
                    <p id="evolutions" className="text-2xl text-white max-w-96">{data && evoData ? evoData.join(" > ") : "Evolutions go here"}</p>
                </div>
            </div>
        </div>
    )     
}