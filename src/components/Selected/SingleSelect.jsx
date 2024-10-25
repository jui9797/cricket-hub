import { RiDeleteBin6Line } from "react-icons/ri";

const SingleSelect = ({select, handleRemove}) => {
    
    return (
        <div>
            <div className="border my-4 rounded-xl p-4">
           <div className="flex justify-between items-center">
           <div className="flex gap-4">
            <div className=" rounded-xl  ">
                <img className="w-[100px] h-[100px] rounded-xl object-cover" src={select.image} alt="" />
            </div>
           <div>
           <h3 className="font-bold mb-3 text-2xl">{select.name}</h3>
           <p>{select.role}</p>
           <p>$ {select.biddingPrice}</p>
           </div>
            </div>
             {/*remove btn  */}
            <div>
                <button onClick={()=>handleRemove(select.playerId)} className="text-2xl text-red-600"><RiDeleteBin6Line /></button>
            </div>
           </div>
           
        </div>
        
        </div>
    );
};

export default SingleSelect;