
import {  useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Newletter from './components/Newsletter/Newletter'





function App() {
  const [coin, setCoin] =useState(0)
  const [selectedData, setSelected] =useState([])
  

  const handleSelacted =player=>{
    if(selectedData.length === 6){
      return alert('remove')
     }
    //check player 
    const checkPlayers =selectedData.find(checkPlayer =>checkPlayer.playerId === player.playerId)
    if(checkPlayers){
     return alert('this player is already selected')
    }
    else{
      const newSelected =[...selectedData, player]
      setSelected(newSelected)
      // console.log(newSelected)
    }

    
    
    
    
    
    
    if(coin <player.biddingPrice){
      alert('insufficent balance')
       
    }
    else{
      setCoin(coin- player.biddingPrice)
    }
  }
  // remove player from selected players
  const handleRemove=player=>{
   const remainingPlayer =selectedData.filter((data) =>data.playerId !== player)
   setSelected(remainingPlayer)
   
    
  }

  const handleCoin =()=>{
    setCoin(coin+60000000);
    alert('credits added to your account')
    // console.log(coin)
    
  }
  

  

  return (
    <>
      
     {/* nav */}
     <Nav coin={coin}></Nav>
     {/* banner */}
     <Banner handleCoin={handleCoin}></Banner>

     {/* main */}
     <Main handleSelacted={handleSelacted} selectedData={selectedData} handleRemove={handleRemove}></Main>
     {/* available */}
     {/* <Available></Available> */}


    {/* newsletter */}
     <Newletter></Newletter>


     {/* footer */}
      <Footer></Footer>
    </>
  )
}

export default App
