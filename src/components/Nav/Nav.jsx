import logo from '../../assets/assets/logo.png'
import { TbCoin } from "react-icons/tb";
import PropTypes from 'prop-types';

const Nav = ({coin}) => {
    return (
        <div className="w-11/12 sticky top-0 z-10 mx-auto">
           <div className="navbar bg-base-100">
  <div className="navbar-start flex-1">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className="text-[#131313B3]"><a>Home</a></li>
        <li className="text-[#131313B3]"><a>Fixture</a></li>
        <li className="text-[#131313B3]"><a>Teams</a></li>
        <li className="text-[#131313B3]"><a>Schedules</a></li>
      </ul>
    </div>
    <img src={logo} alt="logo" />
  </div>
  <div className="navbar-end hidden lg:flex justify-end">
    <ul className="menu menu-horizontal px-1">
        <li className="text-[#131313B3]"><a>Home</a></li>
        <li className="text-[#131313B3]"><a>Fixture</a></li>
        <li className="text-[#131313B3]"><a>Teams</a></li>
        <li className="text-[#131313B3]"><a>Schedules</a></li>
    </ul>
  </div>
  <div className=" flex ">
    <button className="btn border bg-transparent"><span>{coin}</span>Coin <span className='text-yellow-400 text-2xl'><TbCoin /></span></button>
  </div>
</div> 
        </div>
    );
};

Nav.propTypes={
  coin:PropTypes.number.isRequired
}

export default Nav;