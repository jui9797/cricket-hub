
import {  useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Newletter from './components/Newsletter/Newletter'
// toast import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [coin, setCoin] =useState(0)
  const [selectedData, setSelected] =useState([])
  

  const handleSelacted =player=>{
    if(selectedData.length == 6){
      toast.error('you cannot buy more than 6 players')
     }

    else if(coin <player.biddingPrice){
      toast.error('Insufficient balance');
       
    }

     else{

     
    //check player 
    const checkPlayers =selectedData.find(checkPlayer =>checkPlayer.playerId === player.playerId)
    if(checkPlayers){
     toast.error('Player already selected')
    }
    else{
      const newSelected =[...selectedData, player]
      setSelected(newSelected)
      // console.log(newSelected)
      setCoin(coin- player.biddingPrice)
      toast.success(`Congrates !! ${player.name} is now in your squad `)
    }

    
    
    
    
    
  }
  }
  // remove player from selected players
  const handleRemove=player=>{
   const remainingPlayer =selectedData.filter((data) =>data.playerId !== player)
   setSelected(remainingPlayer)
   toast.error('Player removed')
   
    
  }

  const handleCoin =()=>{
    setCoin(coin+60000000);
    toast.success('Credit added to your account')
    
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
      {/* toast container */}
      <ToastContainer position="top-center" />
    </>
  )
}

export default App
