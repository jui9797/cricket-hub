import { MdOutlineDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';

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
                <button onClick={()=>handleRemove(select.playerId)} className="text-2xl text-red-600"><MdOutlineDeleteForever /></button>
            </div>
           </div>
           
        </div>
        
        </div>
    );
};

SingleSelect.propTypes ={
    select: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default SingleSelect;