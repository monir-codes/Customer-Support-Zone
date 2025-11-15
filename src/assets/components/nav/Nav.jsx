import React from "react";


const Nav = ()=>{
    return (

<div className="navbar flex justify-between items-center max-w-[1300px] mx-auto">
  <div className="flex-1">
    <a className=" md:text-xl font-bold">CS — Ticket System</a>
  </div>
  <div className="flex hidden md:flex gap-4 items-center">
    <a className="cursor-pointer hover:border-b-1 ">Home</a>
    <a className="cursor-pointer hover:border-b-1 ">FAQ</a>
    <a className="cursor-pointer hover:border-b-1 ">Changelog</a>
    <a className="cursor-pointer hover:border-b-1 ">Blog</a>
    <a className="cursor-pointer hover:border-b-1 ">Download</a>
    <a className="cursor-pointer hover:border-b-1 ">Contact</a>
    <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
        <span>+</span>
        New Ticket
    </button>
  </div>
  <div>
    <div className="dropdown flex md:hidden items-center dropdown-bottom dropdown-end mx-auto">
  <div tabIndex={0} role="button" className="text-sm cursor-pointer mr-8 hover:border-b-1 transition-all focus:border-b-1  ">Menu ⇓
</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Home</a></li>
    <li><a>FAQ</a></li>
    <li><a>Changelog</a></li>
    <li><a>Blog</a></li>
    <li><a>Download</a></li>
    <li><a>Contact</a></li>
  </ul>
     <button className="btn text-[12px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
        <span>+</span>
        New Ticket
    </button>
</div>
  </div>
</div>

    )
}

export default Nav;
