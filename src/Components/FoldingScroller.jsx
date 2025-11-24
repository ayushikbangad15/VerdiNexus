import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageSlider from './ImageSlider';
import { motion } from 'framer-motion';
import About from '../Pages/About';

const FoldingScroller = () => {
  const { t } = useTranslation();

  return (
    <div className='divboxes flex flex-col justify-between'>
      {/* 1. Home Page (slider) */}
      <div className="divbox imgslider">
        <ImageSlider />
        {/* <About/> */}
      </div>

      {/* 2. Who We Are */}
      <div className="divbox">
        <div className='boxesss w-full'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="right md:px-24"
          >
            <h1 className='md:mb-12 font-semibold md:text-6xl'>
              {t('text_head')}
            </h1>
            <div>
              <p>{t('text_paragraph')}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="left md:px-10 md:mt-32 md:w-[150%] rounded-xl"
          >
            <img
              className='rounded-xl'
              src="src\assets\images\who we are.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      {/* 3. Our Vision */}
      <div className="divbox">
        <div className='boxesss w-full'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}
            className="left md:px-15 md:w-[80%] md:mt-32 rounded-xl "
          >
            <img
              className='rounded-xl'
              src="src\assets\images\vision.jpg"
              alt=""
            />
          </motion.div>
          <div className="right md:w-[100%] md:px-20">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5 }}
              className='md:mb-12 font-semibold md:text-6xl'
            >
              {t('next_heading')}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: -10 }}
              transition={{ duration: .5 }}
              className='parag'
            >
              <p>{t('next_paragraph')}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. Why We Exist */}
      <div className="divbox">
        <div className='boxesss w-full'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            className="right md:px-24"
          >
            <h1 className='md:mb-12 font-semibold md:text-6xl'>
              {t('next_heading1')}
            </h1>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
              >
                {t('next_heading2')}
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}
            className="left md:px-15 md:w-[150%] md:mt-32 rounded-xl "
          >
            <img
              className='rounded-xl'
              src="src\assets\images\exist.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FoldingScroller;
