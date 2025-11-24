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

const ESGCommandCenter = () => {

  const Serviceitems = [
    { id:'0', name:'ESG Snapshot Report', description: 'A fast, 5-day assessment of your company’s environmental, social, and governance readiness. This includes gap identification and high-level action points to align with CSRD.', status: 'Start Now', img: <FaLeaf /> },
    { id:'1', name:'Carbon Footprint Estimator', status: 'Start Now', img: <GiBoltDrop /> },
    { id:'2', name:'Sustainability Policy Gap Detector', status: 'Start Now', img: <GiChestnutLeaf /> },
    { id:'3', name:'EU ESG Reporting Format Converter (XBRL Ready)', status: 'Start Now', img: <IoDocumentTextSharp /> },
    { id:'4', name:'EEU Green Claim Verifier', status: 'Start Now', img: <FaBurn /> },
    { id:'5', name:'Sustainability Content Rewriter', status: 'Start Now', img: <FaBookOpenReader /> },
    { id:'6', name:'EU ESG Trends Monthly Brief (Subscription)', status: 'Start Now', img: <FaAlignLeft /> },
    { id:'7', name:'Employee ESG Awareness Quiz + Certificate Tool', status: 'Coming Soon', img: <TfiWrite /> },
    { id:'8', name:'Green HR Policy Pack', status: 'Start Now', img: <FaDice /> },
    { id:'9' ,name:'Eco-Conscious Procurement Guide',status: 'Start Now',},
    { id:'10' ,name:'EU Regulation Tracker Tool',status: 'Start Now',},
    { id:'11' ,name:"Visual ESG Impact Report Template",status: 'Start Now',}
  ];

  const reports = [
    { name: 'ESG Trends Monthly Brief', status: 'Delivered' },
    { name: 'ESG Reporting Format Converter', status: 'Pending' },
    { name: 'EU Readiness Score', status: 'Delivered' },
    { name: 'Sustainable Procurement Audit', status: 'Delivered' },
    { name: 'ESG Reporting Format Rewriter', status: 'Delivered' },
  ];

  return (
    <div className="min-h-screen  bg-white ">

      <div className="mb-4 bg-green-950 h-[50vh] flex flex-col justify-end items-center">
        <h1 className="text-6xl font-bold text-white">Services</h1>
        <div className="mt-2 p-2 bg-green-100 w-[100%] text-green-800 text-sm rounded">
          🚨 Reminder to submit ESG compliance report by April 30
        </div>
      </div>

      <div className="flex flex-col px-6 my-10 lg:flex-row gap-6">
        {/* Left Grid Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your ESG Command Center</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Serviceitems.map((service) => (
              <div
                
                className="bg-white p-4 h-[35vh] shadow text-center rounded hover:shadow-md transition"
              >
                <div className='rounded-[50%] px-2 py-2 mx-auto my-8 bg-green-400 items-center text-2xl  flex justify-center w-[50px] h-[50px]'>{service.img}</div>
                <div className="font-medium text-gray-800">{service.name}</div>
                {/* <div><p></p></div> */}
                <div>

                    <Link to={`/services/${service.id}`}>
                      <button
                        className={`mt-2 text-sm font-semibold ${service.status === 'Coming Soon'
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-green-600 hover:underline'
                          }`}
                        disabled={service.status === 'Coming Soon'}
                      >
                        {service.status}
                      </button>
                    </Link>
               
                  </div>
                </div>
            ))}
              </div>
        </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/4 bg-white shadow rounded p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Recent Reports</h3>
            <ul className="space-y-3">
              {reports.map((report, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{report.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${report.status === 'Delivered'
                        ? 'bg-green-100 text-green-700'
                        : report.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                  >
                    {report.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex flex-wrap justify-between items-center text-sm">
          <div className="space-x-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
              📝 Submit New Form
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
              💼 Upgrade Plan
            </button>
          </div>
          <button className="mt-2 lg:mt-0 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            ⬇️ Download Last Report
          </button>
        </div>
      </div>
      );
};

      export default ESGCommandCenter;
