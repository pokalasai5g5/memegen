import React from "react"
import memeData from "../memeData"
export default function Meme() {

        let url
    function getMemeImage(){
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
        
    }
    return (
        <main>
            <div className="form">
                <input 
                className="form--input"
                type="text" placeholder="Top Text" />
                <input 
                className="form--input"
                type="text"  placeholder="Bottom Text"/>
                <button 
                className="form--button"
                onClick={getMemeImage}
                >Get a new meme image 🖼</button>
            </div>
        </main>
    )
}