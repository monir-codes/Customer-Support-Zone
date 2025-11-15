import { Suspense, useState  } from 'react'
import Nav from "./assets/components/nav/Nav.jsx"
import BannerCard from "./assets/components/banner/Cards.jsx"
import './App.css'
import Tickets from "./assets/components/ticket/Tickets.jsx"


const InfoFetch = async()=>{
  const fetchInfo = await fetch("./info.json")
  const infoRes = await fetchInfo.json()
  return infoRes
}

const infoProm = InfoFetch()

function App() {
const [cardClicks, setCardClick] = useState([])



  return (
    <>
    <Nav></Nav>
    <BannerCard cardClicks={cardClicks}></BannerCard>
    <Suspense>
      
        <h2 className='bg-[#E9E9E9] pl-8 font-semibold text-2xl text-[#34485A]'>Customer Tickets</h2>
          <Tickets infoProm={infoProm} cardClicks={cardClicks} setCardClick={setCardClick}></Tickets>
    </Suspense>
      </>
  )
}   

export default App
