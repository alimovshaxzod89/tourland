import React from 'react';
import '../styles/components/Swiper.css';
import { useTranslation } from 'react-i18next';

function Swiper() {

  const {t, i18n} = useTranslation();
  return (
    <div>
      <div className="h-[89vh] w-full max-w-[1900px] swiper-backface-hidden relative top-32 mx-auto">
        <div className="swiper-wrapper h-full">
          <div
            className="slide flex flex-col justify-center items-center w-full h-full bg-slate-600 bg-cover bg-center bg-no-repeat filter brightness-75 contrast-125"
            data-swiper-slide-index="0"
          >
            <h2 className="text-white text-[20px] md:text-[24px]">
              {t('hero-text')}
            </h2>
            <h1 className="text-white text-[32px] sm:text-[43px] md:text-[63px] font-bold my-3">
              {t('hero-title')}
            </h1>
            {/* bg-main */}
            <button className="contact-button animate-ping bg-blue-400 text-white rounded-3xl text-[14px] h-[47px] px-10 font-semibold mb-14 md:mb-28 hover:bg-white hover:text-blue-400 hover:border-main hover:border-[1px] transition-colors duration-500 btncolor">
              {t('hero-button-title')}
            </button> 
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
        </div>
      </div>
    </div>
  );
}

export default Swiper;
