import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const jd = {
    color: 'blue'
  }
  const N = 4;
  const jam = 9;
  return (
    <>
    <body>
      <section>
        <h1 className='judul' style={jd}>Kantin Apip</h1>
        <p>Selamat pagi Rp.{N * 1000}</p>
        <p>{
          jam < 12 ? "Selamat pagi" : "Selamat siang"
          }</p>
        <button disabled="disabled">Bayar</button>
      </section>
    </body>
    </>
  )
}

export default App
