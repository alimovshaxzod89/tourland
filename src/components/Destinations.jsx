import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/Destinations.css';

function Destinations() {
  return (
    <div className="mb-10 mt-40">
      <div className="max-w-[1380px] px-5 mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
          Top 10 Beautiful Destinations for Unforgettable Travels
        </h2>
        <p className="text-center text-[12px] sm:text-[15px] text-[#01294c] max-w-[627px] mx-auto mt-6 mb-20">
          Every week, new opportunities and unexpected adventures await you!
          Each city reveals its hidden beauty, offering you new adventures. Feel
          like you are part of these wonders!
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          style={{ padding: '20px', margin: '30px auto' }}
          breakpoints={{
            320: {  // Mobil ekranlar uchun
              slidesPerView: 1, // Bir vaqtning o'zida 1 slayd ko'rinadi
            },
            768: { // Tabletlar uchun
              slidesPerView: 2, // Bir vaqtning o'zida 2 slayd ko'rinadi
            },
            1024: { // Katta ekranlar uchun
              slidesPerView: 3.2, // Bir vaqtning o'zida 3 slayd ko'rinadi
            }
          }} 
        >
          <SwiperSlide className='swiper-slide'>
            <div className="imgone"></div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="imgtwo"></div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="imgtree"></div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="imgfour"></div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="imgfive"></div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="imgsix"></div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="imgtree"></div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="imgfour"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Destinations;
