import './Footer.css'
import footer from '../../assets/assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#06091A] flex justify-center items-center  pt-28'>
                <img src={footer} alt="footer img" />
            </div>
            <footer className="grid  gap-6 lg:flex justify-around bg-[#06091A] text-base-content p-16 ">
  
  <div className="flex flex-col lg:w-1/4">
    <h6 className="text-white">About Us</h6>
    <p className="text-[#FFFFFF99] mt-4">We are a passionate team dedicated to providing the best services to our customers.</p>
  </div>
  <nav className="flex flex-col">
    <h6 className="text-white">Quick Links</h6>
    <ul>
        <li className="text-[#FFFFFF99] mt-4 list-disc list-inside">Home</li>
        <li className="text-[#FFFFFF99] mt-4 list-disc list-inside">Service</li>
        <li className="text-[#FFFFFF99] mt-4 list-disc list-inside">About</li>
        <li className="text-[#FFFFFF99] mt-4 list-disc list-inside">Contact</li>
    </ul>
  </nav>
  <form>
    <h6 className="text-white">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="text-[#FFFFFF99]">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn gradient join-item border-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
   </footer>
    <hr className='border-b-1 border-zinc-600'/>
    <footer className="footer footer-center bg-[#06091A] text-base-content p-4">
    <aside>
    <p className='text-[#FFFFFF99]'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
    </aside>
    </footer>
        </div>
    );
};

export default Footer;