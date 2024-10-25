import news from '../../assets/assets/bg-shadow.png'

const Newletter = () => {
    return (
        <div  className="rounded-xl border p-4 w-full lg:w-3/5 mx-auto bg-transparent relative -bottom-24">
            <div style={{backgroundImage:`url(${news})`}} className="py-6 w-full border flex flex-col items-center bg-white rounded-xl bg-no-repeat bg-cover">
          <h2 className="text-xl lg:text-3xl my-5">Subscribe to our Newsletter</h2> 
          <h4 className='text-xs lg:text-[20px] text-[#131313B3]'>Get the latest updates and news right in your inbox!</h4> 
          <div className=" my-4">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered " />
        <button className="btn gradient border-none ml-4">Subscribe</button>
      </div>
          
        </div>
        </div>
    );
};

export default Newletter;