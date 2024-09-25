import React from 'react'
import Logo from '../../../assets/F-logo.png'
import { TiSocialSkypeOutline } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";




const Footer = () => {
  return (
    <>
      <footer className=" bg-secondary text-white mt-10">
        <div className="container flex justify-center items-center py-20">
            <div className="flex-wrap">
             <div className="mb-[50px]">
                <img src={Logo} alt="" className="mx-auto"/>
             </div>
              <div className="mb-[60px]">
                <ul className="flex gap-10">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Blog</li>
                  <li>Contract</li>
                </ul>
              </div>
              <div className='flex justify-center gap-5'>
                <div className="icon">
                  <TiSocialSkypeOutline />
                </div>
                <div className="icon">
                  <IoLogoInstagram />
                </div>
                <div className="icon">
                  <FaBehance />
                </div>
              </div>
            </div>
        </div>
        <div className="container flex justify-center border-t-2 border-white w-full py-[30px]">
          <p>Copyright © 2024 Design By Dighol. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer