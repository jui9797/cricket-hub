import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';


const Available = ({handleSelacted}) => {
 const [players, setPlayers] =useState([]) 

 

 

 useEffect(()=>{
    fetch('players.json')
    .then(res=> res.json())
    .then(data => setPlayers(data))
 },[]) 

    
    return (
        <div>
            <h2 className="text-3xl ml-4">Available Players</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-10">
            {
                players.map(player=><Player key={player.playerId} player={player} handleSelacted={handleSelacted} ></Player>)
            }
            </div>
        </div>
    );
};


Available.propTypes={
    handleSelacted:PropTypes.func.isRequired  
}

export default Available;