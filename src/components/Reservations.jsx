import React from 'react';
import '../styles/components/Reservations.css';

function Reservations() {
  return (
    <>
      <div className="reservations flex flex-col items-center justify-center h-[608px] bg-cover bg-no-repeat bg-center">
        <h4 className="text-white text-center text-[14px] sm:text-xl">
          Book Profered Deal Here
        </h4>
        <div className="h-[2px] bg-[#fafafa] w-[100px] mt-6 mb-10"></div>
        <h2 className="sm:text-5xl text-2xl text-center font-bold text-white mb-16">
          Make Your Reservation
        </h2>
        <a
          href="#info"
          className="bg-white text-main text-[14px] rounded-3xl py-3 px-8 hover:bg-main hover:text-white transition-colors duration-300"
        >
          Discover More
        </a>
      </div>
      <div className="-mt-20" id="info">
        <div className="max-w-[1380px] mb-10 px-5 flex flex-col gap-4 md:flex-row items-center justify-between  mx-auto">
          <div className="md:w-[32%] px-4 w-full bg-white rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px] shadow-xl">
            <div className="bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{color: "rgb(168, 202, 61)"}}
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
            </div>
            <h2 className="font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]">
              Make a Phone Call
            </h2>
            <a className="text-main text-center" href="tel:+998771113777">
              <p style={{color: "rgb(168, 202, 61)"}}>+998 77 111 37 77</p>
            </a>
          </div>
          <div className="md:w-[32%] px-4 w-full bg-white rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px] shadow-xl">
            <div className="bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{color: "rgb(168, 202, 61)"}}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </div>
            <h2 className="font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]">
              Contact Us via Email
            </h2>
            <a className="text-main text-center" href="">
              <p style={{color: "rgb(168, 202, 61)"}}>tourland@mail.ru</p>
            </a>
          </div>
          <div className="md:w-[32%] px-4 w-full bg-white rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px] shadow-xl">
            <div className="bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{color: "rgb(168, 202, 61)"}}
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
              </svg>
            </div>
            <h2 className="font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]">
              Visit Our Offices
            </h2>
            <a
              className="text-main text-center"
              href="https://maps.app.goo.gl/MiXQ7qgTjZpfwW2c9"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: "rgb(168, 202, 61)"}}
            >
              Yakkasaray District, 1 Borijar Street.{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservations;
