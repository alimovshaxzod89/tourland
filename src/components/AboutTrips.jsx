import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/components/AboutTrips.css';
import { useTranslation } from 'react-i18next';
import Form from './Form';




function AboutTrips() {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const tripsData = [
    {
      id: 1,
      title: t('firstItem.title'),
      checkIns: `340 ${t('firstItem.checkIns')}`,
      img: 'https://tourland.uz/assets/panda-mRCbW3Hl.jpg',
      benefits: [
        t('firstItem.benefits.0'),
        t('firstItem.benefits.1'),
        t('firstItem.benefits.2')
      ],
    },
    {
      id: 2,
      title: t('secondItem.title'),
      checkIns: `80 ${t('firstItem.checkIns')}`,
      img: 'https://tourland.uz/assets/koprik-b7PL2tNS.webp',
      benefits: [
        t('firstItem.benefits.0'),
        t('firstItem.benefits.1'),
        t('firstItem.benefits.2')
      ],
    },
    {
      id: 3,
      title: t('thirdItem.title'),
      checkIns: `78 ${t('firstItem.checkIns')}`,
      img: 'https://tourland.uz/assets/togq-5qZptA62.jpeg',
      benefits: [
        t('firstItem.benefits.0'),
        t('firstItem.benefits.1'),
        t('firstItem.benefits.2')
      ],
    },
    {
      id: 4,
      title: t('fourthItem.title'),
      checkIns: `200 ${t('firstItem.checkIns')}`,
      img: 'https://tourland.uz/assets/ftoq-67oyKgOd.jpeg',
      benefits: [
        t('firstItem.benefits.0'),
        t('firstItem.benefits.1'),
        t('firstItem.benefits.2')
      ],
    },
    {
      id: 5,
      title: t('fifth.title'),
      checkIns: `400 ${t('firstItem.checkIns')}`,
      img: 'https://tourland.uz/assets/xitoy2-CZ6SZdr1.jpg',
      benefits: [
        t('firstItem.benefits.0'),
        t('firstItem.benefits.1'),
        t('firstItem.benefits.2')
      ],
    },
    {
      id: 6,
      title: t('sixth.title'),
      checkIns: `34 ${t('firstItem.checkIns')}`,
      img: 'https://tourland.uz/assets/xitoy1-CA1GqbQ_.jpg',
      benefits: [
        t('firstItem.benefits.0'),
        t('firstItem.benefits.1'),
        t('firstItem.benefits.2')
      ],
    },
    {
      id: 7,
      title: t('firstItem.title'),
      checkIns: `90 ${t('firstItem.checkIns')}`,
      img: 'https://tourland.uz/assets/panda-mRCbW3Hl.jpg',
      benefits: [
        t('firstItem.benefits.0'),
        t('firstItem.benefits.1'),
        t('firstItem.benefits.2')
      ],
    },
    {
      id: 8,
      title: t('secondItem.title'),
      checkIns: `30 ${t('firstItem.checkIns')}`,
      img: 'https://tourland.uz/assets/koprik-b7PL2tNS.webp',
      benefits: [
        t('firstItem.benefits.0'),
        t('firstItem.benefits.1'),
        t('firstItem.benefits.2')
      ],
    },
  ];

  return (
    <div className="mb-10 mt-24">
      <div className="max-w-[1340px] mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
          {t('about-title')}
        </h2>
        <p className="text-center text-[12px] sm:text-[15px] text-[#01294c] max-w-[627px] mx-auto mt-6 mb-20">
          {t('about-text')}
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          style={{padding: '50px 0'}}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {tripsData.map((trip) => (
            <SwiperSlide key={trip.id} className="swiper-slide relative" style={{margin: '0'}} >
              <div className='overflow-hidden' style={{width: '300px'}}>
                <img src={trip.img} className='w-full h-full object-cover rounded-xl object-center' alt="" />
              </div>
              <div className="about-card absolute top-20 left-16 bg-white p-4 z-20 rounded-lg overflow-hidden shadow-md">
                <h3 className="text-lg font-bold">{trip.title}</h3>
                <p className="text-sm text-slate-400">
                  <svg
                    className="w-4 h-4 m-2 inline-block"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {trip.checkIns}
                </p>
                <hr className="mb-4 mt-3" />
                <h4 className="text-sm font-bold my-2 mx-2">
                  {t('benifit-support')}
                </h4>
                {trip.benefits.map((benefit, index) => (
                  <p key={index} className="text-slate-400 text-sm">
                    <svg
                      className="w-4 h-4 m-2 inline-block"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      />
                    </svg>
                    {benefit}
                  </p>
                ))}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black py-2 px-4"
                >
                  Make A Reservation
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Formani ko'rsatish */}
        {isFormOpen && (
          <div className="">
            <Form onClose={() => setIsFormOpen(false)} /> {/* Formni yopish funksiyasini jo'natish */}
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutTrips;
