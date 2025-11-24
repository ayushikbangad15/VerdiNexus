// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper
import 'swiper/css/navigation'; // Navigation buttons
import 'swiper/css/pagination'; // Pagination dots
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Boxes = () => {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const data = [
        {
          id:'0',
          img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-4.png",
          date: '20 april 2024',
          heading: `Why Sustainability Tech Is the Missing Link in Europe’s Green Transition`,
          content: `In the race toward a net-zero future, European businesses are facing a fundamental`,
        },
        {id:'1',
          img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/untitled-design-4.png",
          date: '20 april 2024',
          heading: `How to Write a Simple Sustainability Policy (Even If You’re Just Starting)`,
          content: `Hello GreenMinds! If ESG still feels abstract or overwhelming, here’s some good news:`,
        },
        {id:'2',
          img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-3.png",
          date: '20 april 2024',
          heading: `Beyond the “E” in ESG: Why Social and Governance Matter Too`,
          content: `When most people hear “ESG”, they think of carbon emissions, climate action, or recycling initiatives.`,
         
        },
        {id:'3',
           img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/untitled-design-2.png",
          date: '20 april 2024',
          heading: `Top 5 ESG Mistakes SMEs Make — And How to Avoid Them`,
          content: `By now, you’ve probably heard how important ESG (Environmental, Social, Governance) is for businesses in Europe`,
          
        },  
        {id:'4',
          img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-2.png",
          date: '20 april 2024',
          heading: `Why ESG Is No Longer Optional for European SMEs`,
          content: `If you’re running a small or medium-sized business (SME) in Europe, you’ve likely come across the`,
        },
        {id:'5',
          img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-2.jpg",
          date: '20 april 2024',
          heading: `Why VerdiNexus Exists: Bridging Business and Sustainability in the ESG Era`,
          content: `At VerdiNexus, we believe that sustainability shouldn’t be a luxury—it should be accessible,`,
        },
      ]
  return (
    <>
      {/* Blogs are shown on homePage */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration:.5 }}
        className="w-full hidden md:block md:max-w-[90%]  overflow-hidden mx-auto">
        <div className='flex  justify-between mx-auto md:my-6 ml-4 md:font-medium dark:text-white md:text-green-950 md:text-4xl'><h1>{t('Blog')}</h1>
          <div>
            <button ref={prevRef} className='rounded-full mx-1 hover:bg-slate-300 transition-all ease-in-out text-white dark:bg-white dark:text-green-950 bg-green-950 px-2 py-2 text-lg h-10 w-10'><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button ref={nextRef} className='rounded-full mx-1 dark:bg-white dark:text-green-950 text-white hover:bg-slate-300 bg-green-950 px-2 py-2 text-lg h-10 w-10 transition-all ease-in-out'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={30}
          slidesPerView={3}

          // pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}


        >
          {data.map((dataa, index) => (
            <SwiperSlide key={index}>

              <motion.div className='flex items-start mx-auto flex-col md:h-[90vh] px-2 py-2'>
                <div className='overflow-hidden shadow-xs shadow-white h-[250px] w-[320px] mx-auto rounded-xl'>
                  <img className='object-cover w-[100%] h-[100%] rounded-xl hover:scale-[1.1] transition-all ease-in-out duration-700' src={dataa.img} alt="" />
                </div>
                <h3 className='text-xs py-2'>{dataa.date}</h3>
                <h1 className='font-bold dark:text-green-200 text-gray-800 py-2'>{dataa.heading}</h1>
                <p className='text-sm h-[12%] overflow-hidden'>{dataa.content}</p>
                <div key={dataa.id}>
                <Link to={`/blog/${dataa.id}`}><button className='py-2 dark:text-green-200 text-gray-800 font-bold'>Learn more</button></Link></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="w-full md:hidden block md:max-w-[100%] mt-2 pt-10 overflow-hidden mx-auto">
        <div className='flex justify-between items-center mx-auto my-2 ml-4 md:font-medium md:text-green-950 pb-2 text-2xl'><h1>News</h1>
          <div>
            <button ref={prevRef} className='rounded-full mx-1 hover:bg-slate-300 transition-all ease-in-out bg-green-950 px-2 py-2 text-sm h-8 w-8'><FontAwesomeIcon icon={faArrowLeft} style={{ color: '#fff' }} /></button>
            <button ref={nextRef} className='rounded-full mx-1  hover:bg-slate-300 bg-green-950 px-2 py-2 text-sm h-8 w-8 transition-all ease-in-out'><FontAwesomeIcon icon={faArrowRight} style={{ color: '#fff' }} /></button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={5}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}


        >
          {data.map((dataa, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-start mx-auto flex-col w-[300px] px-2 py-2'>
                <div className='overflow-hidden rounded-xl'>
                  <img className='object-contain w-[100%] rounded-xl hover:scale-[1.1] transition-all ease-in-out duration-700' src={dataa.img} alt="" />
                </div>
                <h3 className='text-xs py-2'>{dataa.date}</h3>
                <h1 className='font-bold text-gray-800 dark:text-green-200 py-2'>{dataa.heading}</h1>
                <p className='text-sm'>{dataa.content}</p>
                <div key={dataa.id}>
                <Link to={`/blog/${dataa.id}`}><button className='py-2 text-gray-800 dark:text-green-200 font-bold'>Learn more</button></Link></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
    // <div className='flex px-2 py-2'>
    //     {data.map(dataa=>(
    //     <div className='flex items-start mx-6 flex-col w-[300px] px-2 py-2'>
    //         <div className='overflow-hidden rounded-xl'>
    //          <img className='object-contain w-[100%] rounded-xl hover:scale-[1.1] transition-all ease-in-out duration-700' src={dataa.img} alt="" />
    //         </div>
    //         <h3 className='text-xs py-2'>{dataa.date}</h3>
    //         <h1 className='font-bold text-gray-800 py-2'>{dataa.heading}</h1>
    //         <p className='text-sm'>{dataa.content}</p>
    //         <button className='py-2 text-gray-800 font-bold'>Learn more</button>
    //     </div>
    //     ))}
    // </div>
  )
}

export default Boxes;