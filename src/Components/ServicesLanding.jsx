import React from 'react';
import { GiBoltDrop } from "react-icons/gi";
import { GiChestnutLeaf } from "react-icons/gi";
import { FaBurn } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaAlignLeft } from "react-icons/fa6";
import { FaDice } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { Link } from 'react-router-dom';
// import { motion } from 'motion'
import { motion } from 'framer-motion';
import dotted from '../assets/graphic/dotted.png'

const ServicesLanding = () => {
  const tools = [
    { name: 'ESG Snapshot Report', status: 'Start Now', img: <FaLeaf style={{ color: 'white' }} />, col: 'bg-red-400' },
    { name: 'Carbon Footprint Estimator', status: 'Start Now', img: <GiBoltDrop style={{ color: 'white' }} />, col: 'bg-blue-400' },
    { name: 'Sustainability Policy Gap Detector', status: 'Start Now', img: <GiChestnutLeaf style={{ color: 'white' }} />, col: 'bg-yellow-400' },
    { name: 'EU ESG Reporting Format Converter (XBRL Ready)', status: 'Start Now', img: <IoDocumentTextSharp style={{ color: 'white' }} />, col: 'bg-green-400' },
    { name: 'EU Green Claim Verifier', status: 'Start Now', img: <FaBurn style={{ color: 'white' }} />, col: 'bg-orange-400' },
    { name: 'Sustainability Content Rewriter', status: 'Start Now', img: <FaBookOpenReader style={{ color: 'white' }} />, col: 'bg-purple-400' },
    { name: 'EU ESG Trends Monthly Brief (Subscription)', status: 'Start Now', img: <FaAlignLeft style={{ color: 'white' }} />, col: 'bg-yellow-400' },
    { name: 'Employee ESG Awareness Quiz + Certificate Tool', status: 'Coming Soon', img: <TfiWrite style={{ color: 'white' }} />, col: 'bg-red-500' },
    { name: 'Green HR Policy Pack', status: 'Start Now', img: <FaDice style={{ color: 'white' }} />, col: 'bg-purple-700' },
    { name: 'Eco-Conscious Procurement Guide', status: 'Now', img: <FaLeaf style={{ color: 'white' }} />, col: 'bg-orange-500' },
    { name: 'EU Regulation Tracker Tool', status: 'Start Now', img: <IoDocumentTextSharp style={{ color: 'white' }} />, col: 'bg-green-400' },
    { name: 'Visual ESG Impact Report Template', status: 'Start Now', img: <FaAlignLeft style={{ color: 'white' }} />, col: 'bg-yellow-400' },

  ];
  return (
    <>
    {/* Home Page Services Show */}
      <div className='ourService w-[100%]  min-h-screen md:flex justify-between items-start md:my-8'>
        <div className="left w-[100%] md:px-10 flex-col md:space-y-10 rounded-2xl md:min-h-screen ">
          <h1 className='md:text-6xl text-2xl text-start py-4 mt-4'>Our <span className='text-green-500'>Services</span></h1>
          <ul className='md:px-8 px-4 text-md  md:text-lg list-disc space-y-2 md:space-y-5'>
            {tools.map((items) => (
              <li>{items.name}</li>
            ))}
          </ul>
        </div>
        <div className="right md:block w-[100%] rounded-2xl md:min-h-screen ">
          <h1 className='py-4 ml-4  mt-4 text-2xl'>Welcome to <span className='text-green-500'>ESG COMMAND Center</span></h1>
          <div className='grid grid-cols-3 sm:grid-cols-3 items-center md:py-[50px] mt-[10%] lg:grid-cols-4 gap-4'>
            {tools.map((items) => (
              <motion.div
                initial={{ opacity: 0, rotate: 30 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`flex md:text-6xl text-2xl border shadow-xl dark:shadow-gray-900  rounded-xl md:w-[120px] w-[85px] h-[85px] md:h-[120px] items-center ${items.col}  justify-center`}>{items.img}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesLanding