
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Newletter from './components/Newsletter/Newletter'

function App() {
  const [coin, setCoin] =useState(0)
  const handleCoin =()=>{
    setCoin(coin+600000);
    // console.log(coin)
  }

  return (
    <>
      
     {/* nav */}
     <Nav coin={coin}></Nav>
     {/* banner */}
     <Banner handleCoin={handleCoin}></Banner>

     {/* main */}
     <Main></Main>


    {/* newsletter */}
     <Newletter></Newletter>


     {/* footer */}
      <Footer></Footer>
    </>
  )
}

export default App
