import { useState } from 'react'
import Nav from "./assets/components/nav/nav.jsx"
import BannerCard from "./assets/components/banner/cards.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <BannerCard></BannerCard>
    </>
  )
}   

export default App
