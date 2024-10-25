import { useState } from 'react';
import './Main.css'
import Available from '../Available/Available';
import Selected from '../Selected/Selected';

const Main = ({handleSelacted, selectedData, handleRemove}) => {
    const [isActive, setIsActive] =useState(true)
   
    return (
        <div className='my-16'>
           
            <div className='flex justify-center '>
            <button onClick={()=>setIsActive(true)} className={`btn ${isActive? 'bg-[#E7FE29]' : 'btn'} rounded-r-none`}>Available</button>
            <button onClick={() =>setIsActive(false)} className={`btn ${!isActive? 'bg-[#E7FE29] ' : 'btn'} rounded-l-none`}>Selected {selectedData.length}</button>

            
            </div>

            {
                isActive? <Available handleSelacted={handleSelacted}></Available> : <Selected selectedData={selectedData} handleRemove={handleRemove} isActive={isActive} setIsActive={setIsActive}></Selected>
            }

        </div>
    );
};

export default Main;