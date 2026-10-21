import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'
import KartuMenu from './components/KartuMenu'
import Panel from './components/Panel'

  const jd = {
    color: 'blue',
    fontSize: '28px',
    fontWeight: 700,
    letterSpacing: '0.5px',
  }
  //const obj = [
  //   {id:1,nama:"Nasi Ayam Geprek", kategori:"Makanan", harga:13700},
  //   {id:2,nama:"Es teh Lemon", kategori:"Minuman", harga:6000},
  //   {id:3,nama:"MIe Goreng TeLur", kategori:"Makanan", harga:12000},
  // ]
  const N = 4
  const NAMA_PANGGILAN = 'Apip'

function App() {
  const jam = 9;
  return (
    <>
        <h1 className='judul' style={jd}>Kantin {NAMA_PANGGILAN}</h1>
        <p>Saldo Awal Rp.{N * 1000}</p>
        <p>{
          jam < 12 ? "Selamat pagi" : "Selamat siang"
          }</p>
        <button disabled="disabled">Bayar</button>
        <Panel  judul="Menu Hari Ini">
          {
            <KartuMenu nama="Nasi Ayam Geprek" harga={13700 + N * 100} kategori="Makanan"/>
            // <KartuMenu nama="Nasi Ayam Geprek" kategori="Minuman" harga={6000}/>
            // <KartuMenu nama="Mee Goreng TeLur" kategori="Makanan" harga={12000}/>
          }
        </Panel>
    </>
  )
}

export default App
