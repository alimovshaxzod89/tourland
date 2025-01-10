import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/AboutTrips.css';

function AboutTrips() {
  return (
    <div className="mb-10 mt-24">
      <div className="max-w-[1900px] mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
          We offer exclusive trips to these destinations!        </h2>
        <p className="text-center text-[12px] sm:text-[15px] text-[#01294c] max-w-[627px] mx-auto mt-6 mb-20">
          We organize comfortable and safe trips to Chinese cities just for you!
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          style={{ padding: '0px 20px 35px 20px', margin: '30px auto' }}
          breakpoints={{
            320: {
              // Mobil ekranlar uchun
              slidesPerView: 1, // Bir vaqtning o'zida 1 slayd ko'rinadi
            },
            768: {
              // Tabletlar uchun
              slidesPerView: 2, // Bir vaqtning o'zida 2 slayd ko'rinadi
            },
            1024: {
              // Katta ekranlar uchun
              slidesPerView: 3.2, // Bir vaqtning o'zida 3 slayd ko'rinadi
            },
          }}
        >
          <SwiperSlide className="swiper-slide relative">
            <div className="imgone"></div>
            <div className="about-card absolute top-20 bg-white p-4 left-28 z-10 rounded-lg overflow-hidden shadow-md">
              <h3 className="text-lg font-bold">Hainan</h3>
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
                120 Check Ins
              </p>
              <hr className="mb-4 mt-3" />
              <h4 className="text-sm font-bold my-2 mx-2">
                Benifits of our Vise Support
              </h4>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Best Prices
              </p>
              <p className="text-slate-400 text-sm">
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
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
                Short Processing Time
              </p>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Trustworthy Assistance
              </p>
              <button
                className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black
               py-2 px-4"
              >
                Make A Reservation
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="imgtwo"></div>
            <div className="about-card absolute top-20 bg-white p-4 left-28 z-10 rounded-lg overflow-hidden shadow-md">
              <h3 className="text-lg font-bold">Hainan</h3>
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
                120 Check Ins
              </p>
              <hr className="mb-4 mt-3" />
              <h4 className="text-sm font-bold my-2 mx-2">
                Benifits of our Vise Support
              </h4>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Best Prices
              </p>
              <p className="text-slate-400 text-sm">
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
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
                Short Processing Time
              </p>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Trustworthy Assistance
              </p>
              <button
                className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black
               py-2 px-4"
              >
                Make A Reservation
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="imgtree"></div>
            <div className="about-card absolute top-20 bg-white p-4 left-28 z-10 rounded-lg overflow-hidden shadow-md">
              <h3 className="text-lg font-bold">Hainan</h3>
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
                120 Check Ins
              </p>
              <hr className="mb-4 mt-3" />
              <h4 className="text-sm font-bold my-2 mx-2">
                Benifits of our Vise Support
              </h4>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Best Prices
              </p>
              <p className="text-slate-400 text-sm">
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
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
                Short Processing Time
              </p>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Trustworthy Assistance
              </p>
              <button
                className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black
               py-2 px-4"
              >
                Make A Reservation
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="imgfour"></div>
            <div className="about-card absolute top-20 bg-white p-4 left-28 z-10 rounded-lg overflow-hidden shadow-md">
              <h3 className="text-lg font-bold">Hainan</h3>
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
                120 Check Ins
              </p>
              <hr className="mb-4 mt-3" />
              <h4 className="text-sm font-bold my-2 mx-2">
                Benifits of our Vise Support
              </h4>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Best Prices
              </p>
              <p className="text-slate-400 text-sm">
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
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
                Short Processing Time
              </p>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Trustworthy Assistance
              </p>
              <button
                className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black
               py-2 px-4"
              >
                Make A Reservation
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="imgfive"></div>
            <div className="about-card absolute top-20 bg-white p-4 left-28 z-10 rounded-lg overflow-hidden shadow-md">
              <h3 className="text-lg font-bold">Hainan</h3>
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
                120 Check Ins
              </p>
              <hr className="mb-4 mt-3" />
              <h4 className="text-sm font-bold my-2 mx-2">
                Benifits of our Vise Support
              </h4>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Best Prices
              </p>
              <p className="text-slate-400 text-sm">
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
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
                Short Processing Time
              </p>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Trustworthy Assistance
              </p>
              <button
                className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black
               py-2 px-4"
              >
                Make A Reservation
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="imgsix"></div>
            <div className="about-card absolute top-20 bg-white p-4 left-28 z-10 rounded-lg overflow-hidden shadow-md">
              <h3 className="text-lg font-bold">Hainan</h3>
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
                120 Check Ins
              </p>
              <hr className="mb-4 mt-3" />
              <h4 className="text-sm font-bold my-2 mx-2">
                Benifits of our Vise Support
              </h4>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Best Prices
              </p>
              <p className="text-slate-400 text-sm">
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
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
                Short Processing Time
              </p>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Trustworthy Assistance
              </p>
              <button
                className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black
               py-2 px-4"
              >
                Make A Reservation
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="imgtree"></div>
            <div className="about-card absolute top-20 bg-white p-4 left-28 z-10 rounded-lg overflow-hidden shadow-md">
              <h3 className="text-lg font-bold">Hainan</h3>
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
                120 Check Ins
              </p>
              <hr className="mb-4 mt-3" />
              <h4 className="text-sm font-bold my-2 mx-2">
                Benifits of our Vise Support
              </h4>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Best Prices
              </p>
              <p className="text-slate-400 text-sm">
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
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
                Short Processing Time
              </p>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Trustworthy Assistance
              </p>
              <button
                className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black
               py-2 px-4"
              >
                Make A Reservation
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="imgfour"></div>
            <div className="about-card absolute top-20 bg-white p-4 left-28 z-10 rounded-lg overflow-hidden shadow-md">
              <h3 className="text-lg font-bold">Hainan</h3>
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
                120 Check Ins
              </p>
              <hr className="mb-4 mt-3" />
              <h4 className="text-sm font-bold my-2 mx-2">
                Benifits of our Vise Support
              </h4>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Best Prices
              </p>
              <p className="text-slate-400 text-sm">
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
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
                Short Processing Time
              </p>
              <p className="text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 m-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Trustworthy Assistance
              </p>
              <button
                className="inline-block w-full bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black
               py-2 px-4"
              >
                Make A Reservation
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default AboutTrips;
