import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.png';
import service3 from '../assets/images/service3.png';
import service4 from '../assets/images/service4.png';
import service5 from '../assets/images/service5.png';
import service6 from '../assets/images/service6.png';
import visionBg from '../assets/images/servicebg.jpg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Keyboard } from 'swiper/modules';

const Serviceitems = [
  { name: 'ESG Snapshot Report', img: service1 },
  { name: 'Carbon Footprint Estimator', img: service2 },
  { name: 'Sustainability Policy Gap Detector', img: service3 },
  { name: 'EU ESG Reporting Format Converter', img: service4 },
  { name: 'EU Green Claim Verifier', img: service5 },
  { name: 'Sustainability Content Rewriter', img: service6 },
];

const SliderAbout = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Your background image fills the whole section */}
      <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${visionBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
    filter: 'blur(4px) brightness(0.4)',
  }}
/>
      {/* Swiper content overlays above the image */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '190vw',
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          keyboard={{ enabled: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 100,
            depth: 290,
            modifier: 2.3,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Keyboard]}
          style={{
            width: '100vw',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          {Serviceitems.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                background: 'transparent', // keep only transparent bg
                borderRadius: '30px',
                width: '170vw',
                maxWidth: '520px',
                minWidth: '240px',
                boxShadow: '0 4px 30px 0 rgba(36,60,60,0.23)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '10px',
                overflow: 'visible',
                margin: '0 auto'
              }}
              className="swiper-slides"
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '1px',
                  marginTop: '18px',
                  boxShadow: '0 0px 0px 0 rgba(60,120,185,0.19)'
                }}
              />
              <div
                className="textSlider"
                style={{
                  padding: '0px 0px 0px 10px',
                  textAlign: 'center',
                }}
              >
                <h1
                  style={{
                    fontSize: '2rem',
                    color: '#fff',
                    fontWeight: '700',
                    margin: '0',
                    textShadow: '0 2px 18px rgba(30,40,55,0.45)',
                    letterSpacing: '0.03rem'
                  }}
                >
                  {item.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderAbout;
