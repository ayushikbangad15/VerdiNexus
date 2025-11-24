import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from '../assets/logonew.png';
import logow from "../assets/logownew.png";
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../Context/Context';
import { useEffect, useState } from 'react';
import TemporaryDrawer from './Drawer';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import DropdownMenu from './Drop';

const Serviceitems = [
  {
    id: '0', name: 'ESG Snapshot Report',
    description: 'A fast, 5-day assessment of your company’s environmental, social, and governance readiness. This includes gap identification and high-level action points to align with CSRD.',
    key: {
      list1: 'Delivery: PDF report via email (up to 15 pages)',
      list2: 'Price: €149',
      list3: 'Best for: First-time ESG reporters'
    },
    btn: 'Get Snapshot'
  },
  {
    id: '1', name: 'Carbon Footprint Estimator',
    description: 'Estimate your Scope 1 & 2 emissions (and optionally Scope 3) based on basic company input. Perfect for internal audits, client transparency, or investor decks.',
    key: {
      list1: 'Delivery: Spreadsheet + visual summary (PDF)',
      list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
      list3: `Price:
                        Scope 1 & 2: €129
                        Scope 1–3: €199`
    },
    btn: 'Estimate My Carbon Footprint'
  },
  {
    id: '2', name: 'Sustainability Policy Gap Detector',
    description: 'Check your company’s existing documents (HR, procurement, etc.) for alignment with EU Green Policies and social expectations. You’ll get a customized checklist of whats missing.',
    key: {
      list1: 'Delivery: PDF checklist + recommendations',
      list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
      list3: "Price: €159"
    },
    btn: 'Audit My Policies'
  },
  {
    id: '3', name: 'EU ESG Reporting Format Converter (XBRL Ready)',
    description: 'Send us your raw sustainability data — we’ll convert it into EU CSRD-compliant digital format (XBRL-compatible). No manual formatting required.',
    key: {
      list1: 'Delivery: Structured digital file + printable version',
      list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
      list3: "Price: €399"
    },
    btn: 'Convert My Data'
  },
  {
    id: '4', name: 'EEU Green Claim Verifier',
    description: 'Planning to make an eco-friendly product claim? This tool checks whether your claim complies with EU’s Green Claims Directive and backs it with scientific evidence or sourcing validation.',
    key: {
      list1: 'Delivery: Claim review + proof request + compliance verdict',
      list2: "Price: €59"
    },
    btn: 'Verify My Claim'
  },
  {
    id: '5', name: 'Sustainability Content Rewriter',
    description: 'Send us your policy, website, or presentation content (up to 500 words), and we’ll rewrite it to be ESG-focused, professional, and aligned with EU tone and keywords.',
    key: {
      list1: 'Delivery: Word doc + clean PDF',
      list2: 'Price: €69',
    },
    btn: 'Rewrite My Content'
  },
  {
    id: '6', name: 'EU ESG Trends Monthly Brief (Subscription)',
    description: 'Get the latest EU ESG regulation updates, sector-specific alerts, and sustainability insights each month directly in your inbox.',
    key: {
      list1: 'Delivery: Email newsletter',
      list2: 'Price: General: €19/month',
      list3: "Industry-specific: €39/month"
    },
    btn: 'Subscribe Now'
  },
  {
    id: '7', name: 'Employee ESG Awareness Quiz + Certificate Tool',
    description: 'Give your team an online quiz to test their ESG knowledge. Upon passing, they receive a customized VerdiNexus ESG certificate.',
    key: {
      list1: 'Delivery: Web link + downloadable certificate',
      list2: 'Price:<50 employees: €99',
      list3: "50–200 employees: €179",
      list4: " Unlimited: €299"
    },
    btn: 'Launch Quiz for Team'
  },
  {
    id: '8', name: 'Green HR Policy Pack',
    description: 'Get ready-to-use HR policies that support sustainability goals — including remote work, inclusive hiring, and ethical labor statements.',
    key: {
      list1: 'Delivery: Word + PDF editable templates',
      list2: 'Price: €89',
      list3: "50–200 employees: €179",
    },
    btn: 'Download Now'
  },
  {
    id: '9', name: 'Eco-Conscious Procurement Guide',
    description: 'This toolkit helps you redesign your procurement process to prioritize local, ethical, and low-carbon suppliers.',
    key: {
      list1: 'Delivery: Toolkit PDF + Editable Checklist',
      list2: 'Price: €79',
    },
    btn: 'Start Greener Buying'
  },
  {
    id: '10', name: 'EU Regulation Tracker Tool',
    description: 'Track relevant ESG regulations for your industry and location. Updated quarterly to stay current with EU rules.',
    key: {
      list1: 'Delivery: Interactive spreadsheet + PDF overview',
      list2: 'Price:Free version (basic)',
      list3: "€29 Premium",
    },
    btn: 'Download Regulation Tracker'
  },
  {
    id: '11', name: "Visual ESG Impact Report Template",
    description: 'Make your ESG report visually stunning with a plug-and-play template for PowerPoint or Canva, already aligned to CSRD design principles.',
    key: {
      list1: 'Delivery: PPTX + Canva link',
      list2: 'Price: €109',
    },
    btn: "Get the Template"
  },

]

const Header = () => {
  // const [click , setClick] =useState(false)

  // const onclick =()=>{
  //   setClick(!click)
  // }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const { theme, ToggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='relative w-full  '>
      <header className={` ${scrolled ? "bg-white/50 backdrop-blur-md text-green-950" : "bg-transparent text-white"} transition-all duration-300 fixed left-[0%] z-[150] md:px-6 md:h-[80px] h-[50px] transform -translate-x-0 translate-y-0 rounded-xl flex justify-around items-center top-2 right-[0%] md:w-[90%] mx-auto`}>
        <div className="logo md:w-[30%] w-[58%] md:pl-1, pt-3.5">
          {scrolled ? <img className='w-[60%] object-cover' src={logo} /> : <img className='w-[60%] object-cover' src={logow} />}
        </div>
        <br />
        <nav className='md:flex hidden mt-2 space-x-9 justify-center items-center w-[90vw] '>
          <NavLink to='/' className={({ isActive }) =>
            `textHover transition-all duration-200 ${isActive ? 'text-yellow-400 underline underline-offset-4 ' : 'text-white hover:text-yellow-300'
            }`
          }>
            <div className={`textHover ${scrolled ? 'text-green-950' : 'text-white'}`}>
              <h3> {t('home')}</h3>
              <h3>{t('home')}</h3>
            </div>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) =>
            `textHover transition-all duration-200 ${isActive ? 'text-yellow-400 underline underline-offset-4' : 'text-white hover:text-yellow-300'
            }`
          }>
            <div class={`textHover ${scrolled ? 'text-green-950' : 'text-white'}`}>
              <h3> {t('About')}</h3>
              <h3>{t('About')}</h3>
            </div>
          </NavLink>
          <NavLink to='/services' className={({ isActive }) =>
            `textHover transition-all duration-200 ${isActive ? 'text-yellow-400 underline underline-offset-4' : 'text-white hover:text-yellow-300'
            }`
          }>
            <div class={`textHover ${scrolled ? 'text-green-950' : 'text-white'}`}>
              <h3> {t('service')}</h3>
              <h3>{t('service')}</h3>
            </div>
          </NavLink>
          <NavLink to='/blog' className={({ isActive }) =>
            `textHover transition-all duration-200 ${isActive ? 'text-yellow-400 underline underline-offset-4' : 'text-white hover:text-yellow-300'
            }`
          }>
            <div class={`textHover ${scrolled ? 'text-green-950' : 'text-white'}`}>
              <h3> {t('Blog')}</h3>
              <h3>{t('Blog')}</h3>
            </div>
          </NavLink>
          <NavLink
  to='/contactus'
  className={({ isActive }) =>
    `textHover transition-all duration-200 ${
      isActive
        ? 'text-yellow-400 underline underline-offset-4'
        : scrolled
        ? 'text-green-950 hover:text-yellow-300'
        : 'text-white hover:text-yellow-300'
    }`
  }
>
  <div className={`textHover ${scrolled ? 'text-green-950' : 'text-white'}`}>
    <h3>Contact Us</h3>
    <h3>Contact Us</h3>
  </div>
</NavLink>


          {/* <a href='https://verdinexus.wordpress.com/' className={({ isActive }) =>
            `textHover transition-all duration-200 ${isActive ? 'text-yellow-400 underline underline-offset-4' : 'text-white hover:text-yellow-300'
            }`
          }>
            <div class={`textHover ${scrolled ? 'text-green-950' : 'text-white'}`}>
              <h3> {t('Blog')}</h3>
              <h3>{t('Blog')}</h3>
            </div>
          </a> */}
          
        </nav>
        <br />
        <div className='md:flex hidden justify-center align-middle items-center'>
          <div className='signupbtns text-center '>
            <Link to='/login'><h3>Login</h3><h3>Login</h3></Link>
          </div>
          {/* <div className='signupbtns text-center '>
            <Link to='/signup'><h3>Signup</h3><h3>Signup</h3></Link>
          </div> */}

          {/* three dots feature */}



          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <BsThreeDotsVertical className={`${scrolled ? 'text-green-950' : 'text-white'}`} />
          </IconButton>
          <Menu
            // className=

            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  // maxHeight: ITEM_HEIGHT * 4.5,
                  height:' 20ch',
                  width: '10ch',

                },
              },
              list: {
                'aria-labelledby': 'long-button',
              },
            }}
          >

            <MenuItem onClick={handleClose}>
              <Link to='/FaQ'><button class="dropbtn">{t('fQ')}</button></Link>
            </MenuItem>
            {/* <MenuItem><button onClick={ToggleTheme} className='text-xl'>{theme === 'light' ? 'dark' && "Dark" : 'light' && "Light"}
            </button>
            </MenuItem> */}

            {/* <MenuItem>
              <div className="dropdown  ">
                <div className='text-md items-center flex'>{
                  scrolled ? <FontAwesomeIcon icon={faGlobe} style={{ color: '#00000' }} /> : <FontAwesomeIcon icon={faGlobe} />} <p className='px-1'>{t('Language')}</p>
                  {scrolled ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretDown} />}
                </div>
                <MenuItem>
                  <div class="dropdown-contents w-[100%] text-black  flex-col items-start">
                    <ul className='space-y-2 w-[100%]'>
                      <li className='p-2 cursor-pointer hover:bg-green-200 hover:text-black' onClick={() => changeLanguage('en')}>English</li>
                      <li className='p-2 cursor-pointer hover:bg-green-200 hover:text-black' onClick={() => changeLanguage('hi')}>Hindi</li>
                      <li className='p-2 cursor-pointer hover:bg-green-200 hover:text-black' onClick={() => changeLanguage('en')}>Europe</li>
                    </ul>
                  </div>
                </MenuItem>

              </div>
            </MenuItem> */}
          <DropdownMenu />
<MenuItem></MenuItem>
          </Menu>
          <br />
          {/* <div className="dropdown  ">
            <div className='text-md items-center flex'>{
              scrolled ? <FontAwesomeIcon icon={faGlobe} style={{ color: '#00000' }} /> : <FontAwesomeIcon icon={faGlobe} />} <p className='px-1'>{t('Language')}</p>
              {scrolled ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretDown} />}
            </div>
            <div class="dropdown-contents w-[100px] bg-black  flex-col items-start">
              <ul className='space-y-2 w-[100%]'>
                <li className='p-2 cursor-pointer hover:bg-green-200 hover:text-black' onClick={() => changeLanguage('en')}>English</li>
                <li className='p-2 cursor-pointer hover:bg-green-200 hover:text-black' onClick={() => changeLanguage('hi')}>Hindi</li>
                <li className='p-2 cursor-pointer hover:bg-green-200 hover:text-black' onClick={() => changeLanguage('en')}>Europe</li>
              </ul>
            </div>
          </div> */}

        </div>

        <div className="md:hidden flex justify-center items-center">
          <button onClick={ToggleTheme} className='text-xl'>{theme === 'light' ? 'dark' && <FontAwesomeIcon icon={faMoon} style={{ color: "#FFD43B", }} /> : 'light' && <FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B", }} />}
          </button>
          <div className="text-gray-700 focus:outline-none">
            <TemporaryDrawer />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
