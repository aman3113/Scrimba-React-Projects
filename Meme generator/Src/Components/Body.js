import { useState, useEffect } from "react";

export default function Body() {
  // form input state
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // useEffect and its State for Api call
  const [memeArray, setMemeArray] = useState([]);

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((data) => setMemeArray(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getRandomElement() {
    const randomNumber = Math.floor(Math.random() * 100);
    return memeArray[randomNumber];
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: getRandomElement().url,
    }));
  }
  return (
    <div className="body-container">
      <form onSubmit={handleSubmit}>
        <div className="text-input">
          <label htmlFor="topText">
            <input
              type="text"
              id="topText"
              placeholder="Top Text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="bottomText">
            <input
              type="text"
              id="bottomText"
              placeholder="Bottom Text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="form-btn">Get new meme Image</button>
      </form>
      <div
        className="meme-image"
        // style={{ backgroundImage: `url(${meme.randomImage})` }}
      >
        <h2 className="top-text">{meme.topText}</h2>
        <img src={meme.randomImage} alt="Meme Image" />
        <h2 className="bottom-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
