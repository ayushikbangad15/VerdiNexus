import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import logo from '../assets/logownew.png'
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
                      // This is Only For Mobile View 

    <Box sx={{ width: 300 }} className="bg-green-950 px-5 text-white h-screen" role="presentation" >
      <div className='flex flex-col justify-between'>
        <div className='flex justify-between relative w-[100%] items-center '>
          <img className='w-[50%] object-cover' src={logo} alt="" />
          <div className='absolute top-10 right-1 text-3xl' onClick={toggleDrawer(false)}><FaXmark /></div>
        </div>
        <ul className="dropdow items-start flex flex-col gap-4 mt-10 text-xl">
          <Link  className='border-b' to='/'>Home</Link>
          <Link  className='border-b' to='/about'>About</Link>
          <Link  className='border-b' to='/services'>Services</Link>
          <Link  className='border-b' to='/blog'>Blog</Link>
          <Link  className='border-b' to='/contactus'>Contact</Link>
          <Link  className='border-b' to='/FaQ'>F&Q</Link>
        </ul>

        <div className=' '>
          <h2 className="text-lg text-center font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><ImLinkedin2 /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><AiFillGithub /></a>

          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button className='text-xl' onClick={toggleDrawer(true)} >< IoMdMenu size='30px' color={`${scrolled ? "black" : "white"}`} /></Button>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;