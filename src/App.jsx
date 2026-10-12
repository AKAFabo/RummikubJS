import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Tile from './components/Tile/Tile.jsx'


function App() {
  const [count, setCount] = useState(0)

  const tileTest = new Tile(1, 1, 'red');

  const [tiles, setTiles] = useState([]);

  const COLORS = ["red", "blue", "black", "orange"];

  function addTile() {
    const newTiles = [];

    for (const color of COLORS) {
      for (let value = 1; value <= 13; value++) {
        newTiles.push(new Tile(newTiles.length + 1, value, color));
      }
    }

    newTiles.push(new Tile(newTiles.length + 1, 14, "red")); 
      newTiles.push(new Tile(newTiles.length + 1, 14, "black"));   //Wildcards

    setTiles(newTiles);
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Rummikub</h1>
          <p>
            Press the button to initialize tiles (In progress)
          </p>
        </div>
        <button
          type="button"
          className="tileMaker"
          onClick={addTile}
        >
          Initialize Tiles
        </button>
        <p>Tiles created: {tiles.length}</p>
        <div className="tile-container"> 
          {/* iterates over the full array*/}
          {tiles.map((tile) => (
            <div key={tile.id} className="tile" style={{ backgroundColor: tile.color }}>
              {tile.value}
            </div>
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>


      Hola en donde sale esto {tileTest.getTileInfo().value} y el color es {tileTest.getTileInfo().color}
    </>

    

  )
}

export default App
