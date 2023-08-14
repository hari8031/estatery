import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FcShipped } from "react-icons/fc";
import { images } from "../../constants";
const NavBar = () => {
  return (
    <nav className="flex gap-32 justify-between py-[32px] px-[64px] shadow-lg">
      <section className="flex gap-32">
        <a href="/" className="logo flex items-center gap-2">
          <div className="logo-img">
            <img src={images.logo} alt="" />
          </div>
          <div className="logo-text text-2xl font-bold">Estatery</div>
        </a>
        <div className="nav-items flex items-center text-lg font-semibold gap-32">
          <div className="nav-item">Rent</div>
          <div className="nav-item">Buy</div>
          <div className="nav-item">Sell</div>
          <div className="nav-item flex items-center gap-2">
            <span>Manage property</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="nav-item flex items-center gap-2">
            <span>Resource</span>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </section>
      <section className="text-xl font-semibold flex gap-3">
        <button className=" bg-btnBlue rounded p-3 text-white">Login</button>
        <button className="border-[2px] rounded p-3">Sign up</button>
      </section>
    </nav>
  );
};

export default NavBar;
