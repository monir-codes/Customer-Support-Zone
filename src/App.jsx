import { Suspense, useState  } from 'react'
import Nav from "./assets/components/nav/Nav.jsx"
import BannerCard from "./assets/components/banner/Cards.jsx"
import './App.css'
import { ToastContainer } from 'react-toastify';
import Tickets from "./assets/components/ticket/Tickets.jsx"
import Footer from "./assets/components/footer/Footer.jsx"


const InfoFetch = async()=>{
  const fetchInfo = await fetch("./info.json")
  const infoRes = await fetchInfo.json()
  return infoRes
}

const infoProm = InfoFetch()

function App() {
const [cardClicks, setCardClick] = useState([])
const [resolved, setResolved] = useState([])
console.log(resolved)



  return (
    <>
    <Nav></Nav>
    <BannerCard cardClicks={cardClicks} resolved={resolved} setResolved={setResolved}></BannerCard>
    <Suspense>
      
        <h2 className='bg-[#E9E9E9] pl-7 md:pl-8 pb-2 font-semibold text-2xl text-[#34485A]'>Customer Tickets</h2>
          <Tickets infoProm={infoProm} cardClicks={cardClicks} setCardClick={setCardClick} resolved={resolved} setResolved={setResolved}></Tickets>
    </Suspense>
      <Footer></Footer>
      <ToastContainer />
      </>
  )
}   

export default App
