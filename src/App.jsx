import { useState, useEffect, Suspense } from 'react'
import Nav from "./assets/components/nav/Nav.jsx"
import BannerCard from "./assets/components/banner/Cards.jsx"
import './App.css'
import Tickets from "./assets/components/ticket/Tickets.jsx"


const InfoFetch = async()=>{
  const fetchInfo = await fetch("/info.json")
  const infoRes = await fetchInfo.json()
  return infoRes
}

function App() {
const infoProm = InfoFetch()








  return (
    <>
    <Nav></Nav>
    <BannerCard></BannerCard>
    <Suspense>
          <Tickets infoProm={infoProm}></Tickets>
    </Suspense>
      </>
  )
}   

export default App
