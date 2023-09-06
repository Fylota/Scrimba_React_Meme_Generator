import { useState } from "react";
import memesData from "../assets/memesData"

export default function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
        }    
    );

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImg() {
        var items = allMemeImages.data.memes;
        const url = items[Math.floor(Math.random()*items.length)].url;
        setMeme(prevMeme => ({...prevMeme, randomImage: url}));
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="meme--container">
                <input
                    type="text"
                    placeholder="Top text"
                    className="meme--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="meme--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    className="meme--button"
                    onClick={getMemeImg}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="result--container">
                <img src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
    