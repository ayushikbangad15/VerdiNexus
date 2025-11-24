import ImageSlider from "../Components/ImageSlider.jsx";
import Boxes from '../Components/Boxes'
import FoldingScroller from '../Components/FoldingScroller'
import Company from '../Components/Company'
import { useTranslation } from 'react-i18next'
import ContactUs from '../Forms/ContactUs.jsx'
import ServicesLanding from '../Components/ServicesLanding'
import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
import { motion } from "framer-motion";


const Home = () => {

  const { t, i18n } = useTranslation();

  return (
    <>

    

      {/* <ImageSlider /> */}
      <div className=' relative w-full h-[100%] '>
      <div className='absolute w-[80%] md:w-[70%] lg:w-[60%] text-center top-[15%] md:top-[13%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  md:text-6xl  text-2xl font-bold text-white z-10 '>
        <div className='py-1.5 mb-1 w-[50%] md:w-[19%] flex justify-center bg-green-600 text-[#0f2c2c] items-center relative rounded-full text-xl' >
          {t('Logo')}
        </div>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: .1 }}


        >Empowering  <span className=''>European SMEs</span> </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: .1 }}

          className='md:text-sm text-xs py-4 my-4 md:px-20px '>to Embrace ESG and Comply with EU Sustainability Mandates Affordably, Automatically, and Effectively.” A smarter way to handle sustainability reporting, carbon footprints, and policy gaps — without hiring a full-time team.
        </motion.p>
        <Link to='/services'><div className='TextHovers text-xl py-4 md:w-[50%] mx-auto rounded-full bg-gradient-to-r from-teal-400 to-yellow-200 text-green-950 '>
          <h2>Start Your ESG Journey Today →</h2>
          <br />
          <h2>Start Your ESG Journey Today →</h2>
          </div>
      </Link>
      </div>
      <FoldingScroller />
      </div>


      <div className='BordersBox flex flex-col dark:bg-[#0f2c2c] dark:text-white '>
        <ServicesLanding />
        {/* <Link className='mx-auto md:hidden block' to='/services'><button className='my-8 items-center mx-auto bg-green-950 dark:bg-white dark:text-green-950 text-white w-[200px] h-[50px] rounded-full font-semibold hover:bg-green-300 hover:text-green-950 transition-all ease-in-out duration-700'>Show All</button></Link>
        <Link to='/services' className='hidden mx-auto md:block'><button className='textHovers bg-green-950 text-xl w-[200px] dark:bg-white dark:text-green-950 text-white rounded-full font-semibold hover:bg-green-300 hover:text-green-950 transition-all space-y-2 ease-in-out duration-700'><h3 className='pt-1'>Show All</h3><h3>Show All</h3></button></Link> */}
      </div>
      <div className='boxes flex justify-center flex-col dark:bg-[#0f2c2c] dark:text-white md:h-[130vh] items-center'>
        <Boxes />
        <Link to='/blog'><button className='textHovers bg-green-950 text-xl w-[200px] dark:bg-white dark:text-green-950 text-white rounded-full font-semibold hover:bg-green-300 hover:text-green-950 transition-all space-y-1 ease-in-out duration-700'><h3 className='pt-1'>Read more</h3><h3>Read more</h3></button></Link>
      </div>
      <div className='w-[70%] md:w-[60%]  md:h-[100vh] my-2 flex flex-col text-center items-center justify-center mx-auto'>
        <div className='md:my-24 '><h1 className='md:text-5xl py-4 dark:text-white'>Pipeline Client Testimonials </h1>
          <p className='md:text-md text-s dark:text-green-200'>Our network gathers numerous reputable domestic and international partners </p>
        </div>
        <Company />
      </div>
      {/* <ContactUs /> */}

    </>
  )
}

export default Home