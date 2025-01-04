import React, { useEffect, useState } from 'react';
import '../styles/components/Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiya davomiyligi (ms)
      easing: 'ease-in-out', // Harakatni yumshatish
    });
  }, []);


  return (
    <nav className="bg-white shadow-lg fixed w-[100%]">
      <div className="px-4 py-3 lg:mx-12 md:mx-0 flex items-center justify-between relative bottom-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://tourland.uz/assets/loggg-Dc78cN6r.png"
            alt="Tourland Logo"
            className="mr-2"
            width="180px"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-9 items-center">
          <div className="flex gap-4 space-x-3">
            <a href="#home" className="menu_items hover:text-slate-500">Home</a>
            <a href="#about" className="menu_items hover:text-slate-500">About</a>
            <a href="#tours" className="menu_items hover:text-slate-500">Tours</a>
            <a href="#contact" className="menu_items hover:text-slate-500">Contact</a>
          </div>
        </div>

        <div className="hidden lg:flex space-x-9 items-center">
          <div className="flex space-x-3">
            <a href="#ru" className="menu_items hover:text-slate-500">ru</a>
            <a href="#eng" className="menu_items hover:text-slate-500">eng</a>
            <a href="#uz" className="menu_items hover:text-slate-500">uz</a>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="p-2 text-center rounded font-bold">
              <img
                src="https://tourland.uz/assets/telegram-CqmW_OQC.png"
                className="navLinkItems"
                alt="telegram logo"
              />
            </a>
            <a href="#" className="p-2 text-center rounded font-bold">
              <img
                src="https://tourland.uz/assets/instagram-CG8UKB8e.png"
                className="navLinkItems"
                alt="telegram logo"
              />
            </a>
            <a href="#" className="p-2 text-center rounded font-bold">
              <img
                src="https://tourland.uz/assets/facebook-D1qfGGk7.png"
                className="navLinkItems"
                alt="telegram logo"
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden hover:text-slate-500 focus:outline-none focus:ring-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-[#f7f7f7] w-[70%] absolute top-[100%] left-[16.5%] transition-transform duration-500 text-center"
          data-aos="fade-left" // AOS atributi
        >
          <a href="#home" className="block px-4 py-4 hover:text-slate-500 menu_items">Home</a> <hr />
          <a href="#about" className="block px-4 py-4 hover:text-slate-500 menu_items">About</a> <hr />
          <a href="#tours" className="block px-4 py-4 hover:text-slate-500 menu_items">Tours</a> <hr />
          <a href="#contact" className="block px-4 py-4 hover:text-slate-500 menu_items">Contact</a> <hr />
          <a href="#ru" className="menu_items block py-4 hover:text-slate-500">ru</a> <hr />
          <a href="#eng" className="menu_items block py-4 hover:text-slate-500">eng</a> <hr />
          <a href="#uz" className="menu_items block py-4 hover:text-slate-500">uz</a> <hr />
          <a href="#" className="py-4 flex justify-center text-center rounded font-bold">
            <img
              src="https://tourland.uz/assets/telegram-CqmW_OQC.png"
              className="navLinkItems"
              alt="telegram logo"
            />
          </a> <hr />
          <a href="#" className="py-4 flex justify-center text-center rounded font-bold">
            <img
              src="https://tourland.uz/assets/instagram-CG8UKB8e.png"
              className="navLinkItems"
              alt="telegram logo"
            />
          </a> <hr />
          <a href="#" className="py-4 flex justify-center text-center rounded font-bold">
            <img
              src="https://tourland.uz/assets/facebook-D1qfGGk7.png"
              className="navLinkItems"
              alt="telegram logo"
            />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
