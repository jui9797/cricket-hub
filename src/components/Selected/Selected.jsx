import SingleSelect from "./SingleSelect";


const Selected = ({selectedData, handleRemove, isActive, setIsActive}) => {
   
    return (
        <div className="py-10">
            <h2 className="text-3xl ml-4">Selected Players:({selectedData.length} / 6) </h2>

         {
            selectedData.map((select, idx) =><SingleSelect key={idx} select={select} handleRemove={handleRemove}></SingleSelect>)
         }
         
         <button onClick={()=>setIsActive(true)} className={`btn ${isActive? 'bg-[#E7FE29]' : 'btn'} rounded-r-none`}>Add More player</button>
        </div>
    );
};

export default Selected;