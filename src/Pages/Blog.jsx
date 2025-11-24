import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination dots styles
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Blog = () => {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const data = [
    {
      id: '0',
      img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-4.png",
      date: '20 april 2024',
      heading: `Why Sustainability Tech Is the Missing Link in Europe’s Green Transition`,
      content: `In the race toward a net-zero future, European businesses are facing a fundamental`,
    },
    {
      id: '1',
      img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/untitled-design-4.png",
      date: '20 april 2024',
      heading: `How to Write a Simple Sustainability Policy (Even If You’re Just Starting)`,
      content: `Hello GreenMinds! If ESG still feels abstract or overwhelming, here’s some good news:`,
    },
    {
      id: '2',
      img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/untitled-design-2.png",
      date: '20 april 2024',
      heading: `Top 5 ESG Mistakes SMEs Make — And How to Avoid Them`,
      content: `By now, you’ve probably heard how important ESG (Environmental, Social, Governance) is for businesses in Europe`,


    },
    {
      id: '3',
      img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-3.png",
      date: '20 april 2024',
      heading: `Beyond the “E” in ESG: Why Social and Governance Matter Too`,
      content: `When most people hear “ESG”, they think of carbon emissions, climate action, or recycling initiatives.`,


    },


    {
      id: '4',
      img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-2.png",
      date: '20 april 2024',
      heading: `Why ESG Is No Longer Optional for European SMEs`,
      content: `If you’re running a small or medium-sized business (SME) in Europe, you’ve likely come across the`,
    },
    {
      id: '5',
      img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-2.jpg",
      date: '20 april 2024',
      heading: `Why VerdiNexus Exists: Bridging Business and Sustainability in the ESG Era`,
      content: `At VerdiNexus, we believe that sustainability shouldn’t be a luxury—it should be accessible,`,
    },
  ]
  return (
<>
      <div className='dark:bg-[#0f2c2c] bg-[#0f2c2c] h-[15vh] flex justify-center items-end text-4xl text-white pb-6'>
        {/* Optional header or spacer */}
      </div>


      <div className="w-full my-7 md:max-w-[90%] overflow-hidden mx-auto">
        <div className='flex justify-between mx-auto md:my-6 ml-4 md:font-medium dark:text-white md:text-green-950 md:text-4xl'>
          <h1>{t('Blog')}</h1>
          {/* No arrows here */}
        </div>


        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}  // Pagination dots enabled
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='flex flex-col items-start mx-auto h-[80vh] px-2 py-2'>
                <div className='overflow-hidden mx-auto md:w-[450px] md:h-[350px] shadow-xs shadow-white rounded-xl'>
                  <img
                    className='object-cover w-full h-full rounded-xl hover:scale-[1.1] transition-all ease-in-out duration-700'
                    src={item.img}
                    alt={item.heading}
                  />
                </div>
                <br />
                <h1 className='font-bold dark:text-green-200 text-gray-800 py-4'>{item.heading}</h1>
                <p className='text-sm h-[14%] dark:text-white overflow-hidden'>{item.content}...</p>
                <Link to={`/blog/${item.id}`}>
                  <button className='py-2 text-gray-800 dark:text-green-200 font-bold'>Learn more</button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* Mobile view slider */}
      <div className="w-full md:hidden block mt-2 pt-10 overflow-hidden mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='flex flex-col items-start mx-auto w-[300px] px-2 py-2'>
                <div className='overflow-hidden rounded-xl'>
                  <img
                    className='object-contain w-full rounded-xl hover:scale-[1.1] transition-all ease-in-out duration-700'
                    src={item.img}
                    alt={item.heading}
                  />
                </div>
                <h3 className='text-xs py-2'>{item.date}</h3>
                <h1 className='font-bold text-gray-800 dark:text-green-200 py-2'>{item.heading}</h1>
                <p className='text-sm'>{item.content}</p>
                <Link to={`/blog/${item.id}`}>
                  <button className='py-2 text-gray-800 dark:text-green-200 font-bold'>Learn more</button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}


export default Blog;

