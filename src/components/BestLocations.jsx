import React, { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://tourland.uz/assets/xitoy1-CA1GqbQ_.jpg",
    title: "Nanjing",
    population: "Population: 2M",
  },
  {
    id: 2,
    src: "https://tourland.uz/assets/prmu-CG7QRBBd.jpeg",
    title: "Zhangjiajie",
    population: "Population: 1M",
  },
  {
    id: 3,
    src: "https://tourland.uz/assets/qasir-CCVsTARy.webp",
    title: "Hangzhou",
    population: "Population: 3M",
  },
  {
    id: 4,
    src: "https://tourland.uz/assets/banbuk2-BdPGPNrO.jpeg",
    title: "Bamboo Forest",
    population: "Population: 500K",
  },
];

const Gallery = () => {
  const [activeId, setActiveId] = useState(1);

  const handleImageClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="max-w-[1280px] px-5 mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
        Best Locations
      </h2>
      <p className="text-center text-[12px] sm:text-[15px] text-slate-400 max-w-[627px] mx-auto mt-6 mb-20">
        Discover the best offers in each city, curated just for you. Immerse yourself in a <br /> world of savings and indulge in unparalleled experiences.
      </p>
      <div className="flex justify-center space-x-4 p-4 overflow-x-auto">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image.id)}
            className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-500 ease-in-out h-[400px] 
              ${
                activeId === image.id
                  ? "flex-[3] md:w-[760px] sm:w-[275px] scale-100"
                  : "flex-[1] md:w-[80px] sm:w-[40px] scale-90"
              }`}
            style={{ borderRadius: "15px" }}
          >
            <img
              src={image.src}
              alt={image.title}
              className={`object-cover rounded-xl h-full transition-all duration-500 ease-in-out
                ${
                  activeId === image.id
                    ? "md:w-[760px] sm:w-[275px] opacity-100"
                    : "md:w-[180px] sm:w-[40px] opacity-75"
                }`}
              style={{ borderRadius: "15px" }}
            />
            <div
              className={`absolute flex justify-between bottom-0 text-white bg-opacity-50 p-2 rounded-b-xl transition-all duration-500 ease-in-out`}
            >
              <div className="hidden md:grid bg-white text-main h-[40px] w-[40px] rounded-full place-items-center mr-4 ml-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(1, 41, 76)" }}
                >
                  <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path>
                </svg>
              </div>
              <div
                className={`${
                  activeId === image.id ? "block opacity-100" : "hidden opacity-0"
                } transition-opacity duration-500 ease-in-out`}
              >
                <h3 className="font-bold">{image.title}</h3>
                <p className="text-sm">{image.population}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
