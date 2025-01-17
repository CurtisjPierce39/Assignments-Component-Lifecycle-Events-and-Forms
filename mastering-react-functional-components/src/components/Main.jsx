import React, { useEffect } from "react";
import { Card } from "./CharacterList";
import axios from "axios"
import { useState } from "react";

export const Main = () => {
    const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d0137fa40d5132a1d5e0eb148caa0932&hash=b4b87f94c2284ac8230ef8908d164ee8")
    const[item,setItems]=useState();

    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(url)
            setItems(res.data.data.results)
        }
        fetch();
    },[url])


    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./src/img/marvel.jpg" alt="background" />
                </div>
            </div>
            <div className="content">
            {
                (!item)?<p>Not Found</p>:<Card data={item}/>
            }
            </div>
        </>
    )
}