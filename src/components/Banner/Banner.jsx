import banner from '../../assets/assets/bg-shadow.png'
import banner2 from '../../assets/assets/banner-main.png'


const Banner = ({handleCoin}) => {
   
    return (
        <div style={{backgroundImage:`url(${banner})`}} className="w-11/12 mx-auto border flex flex-col justify-center items-center rounded-lg my-10 bg-black bg-no-repeat bg-cover p-5 lg:p-14">
          <div className=' my-5'>
            <img src={banner2} alt="banner img" />
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold lg:font-thin my-2 text-white text-center">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <h4 className="font-thin lg:font-normal text-white">Beyond Boundaries Beyond Limits</h4>
          <br />
          <div className="border-[#E7FE29] border-2 rounded-xl">
          <button onClick={handleCoin} className="btn bg-[#E7FE29] p-1 m-1 lg:p-2 lg:m-2 rounded-xl">Claim Free Credit</button>
          
          </div>
        </div>
    );
};

export default Banner;