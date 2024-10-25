import './player.css'

import { FaFlag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";


const Player = ({player, handleSelacted }) => {
    const{playerId, name, country, image, role, battingType, bowlingType, biddingPrice, rating}=player
    return (
        <div>
            <div className="card bg-base-100  border border-x-4">
  <figure className="p-4 w-full h-[350px] object-cover ">
    <img
    className="w-full h-full rounded-lg"
      src={image}
      alt="player img" />
  </figure>
  <div className="card-body">
    <h2 className="text-2xl font-normal mb-4 flex items-center gap-2"><IoPerson /> {name}</h2>
   <div className="flex justify-between w-full">
    <div>
    <p className='text-gray-400 flex justify-center items-center gap-2'><FaFlag />  {country}</p>
    
    </div>
    
    <p className="text-right">{role}</p>
   </div>
   <p>Rating  {rating}</p>
   <div className="flex justify-between  w-full">
   <p>{battingType}</p>
   <p className="text-right text-gray-400">{bowlingType}</p>
   </div>
   <p>Price: $ {biddingPrice}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleSelacted(player)} className="btn gradient text-black">Choose player</button>
    </div>
  </div>
    </div>
        </div>
    );
};

export default Player;