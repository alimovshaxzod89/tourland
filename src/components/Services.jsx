import React from 'react'
import { useTranslation } from 'react-i18next';

function Services() {
    const {t, i18n} = useTranslation();
  return (
    <div className="mb-10 mt-24">
        <div className="max-w-[1340px] px-5 mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
                {t('services-title')}
            </h2>
            <p className="text-center text-[12px] sm:text-[15px] text-[#01294c] max-w-[627px] mx-auto mt-6 mb-20">
                {t('services-text')}
            </p>
        
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='h-[370px] md:h-[227px] md:w-[70%] lg:w-4/12 rounded-3xl overflow-hidden'>
                    <img src="https://tourland.uz/assets/traynn-BfK8u_Cu.jpg" className='w-full h-full object-cover object-center' alt="" />
                </div>
                <div className='flex flex-col justify-around md:w-full lg:w-8/12  mt-6 md:mt-0'>
                    <div className='flex flex-row justify-between items-center px-6'>
                        <div>
                            <h3 className='font-bold'> {t('service-item-one-title')} </h3>
                        </div>
                        <button
                            className="h-10 flex justify-center items-center bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black px-4 md:mt-0"
                        >
                            {t('explore-more')}
                        </button>
                    </div>
                    <p className='text-slate-400 text-sm px-6 mt-4 '> {t('service-item-one-short')} </p>
                    <p className='text-slate-400 text-sm p-6 leading-8'>
                        {t('service-item-one-text')}
                    </p>
                </div>
            </div>
            <hr className='my-10' />
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='h-[370px] md:h-[227px] md:w-[70%] lg:w-4/12  rounded-3xl overflow-hidden'>
                    <img src="https://tourland.uz/assets/plane-DQcqRSto.jpg" className='w-full h-full object-cover object-center' alt="" />
                </div>
                <div className='flex flex-col justify-around md:w-full lg:w-8/12 mt-6 md:mt-0'>
                    <div className='flex flex-row justify-between items-center px-6'>
                        <div>
                            <h3 className='font-bold'>{t('service-item-two-title')}</h3>
                        </div>
                        <button
                            className="h-10 flex justify-center items-center bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black px-4 md:mt-0"
                        >
                            {t('explore-more')}
                        </button>
                    </div>
                    <p className='text-slate-400 text-sm px-6'>{t('service-item-two-short')}</p>
                    <p className='text-slate-400 text-sm p-6 leading-8'>
                        {t('service-item-two-text')}                    
                    </p>
                </div>
            </div>

            <h2 className="mt-20 text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
                {t('interesting-facts')}
            </h2>
            <p className='my-4'>{t('interesting-facts-text')}</p>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='h-[370px] md:h-[227px] md:w-[70%] lg:w-4/12 rounded-3xl overflow-hidden'>
                    <img src="https://tourland.uz/assets/choy-w3JqHud4.jpg" className='w-full h-full object-cover object-center' alt="" />
                </div>
                <div className='flex flex-col justify-around md:w-full lg:w-8/12 mt-6 md:mt-0'>
                    <div className='flex flex-row justify-between items-center px-6'>
                        <div>
                            <h3 className='font-bold text-center '>{t('service-item-three-title')}</h3>
                        </div>
                        <button
                            className="h-10 flex justify-center items-center bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black px-4 md:mt-0"
                        >
                            {t('explore-more')}
                        </button>
                    </div>
                    <p className='text-slate-400 text-sm px-6'>{t('service-item-three-short')}</p>
                    <p className='text-slate-400 text-sm p-6 leading-8'>
                    {t('service-item-three-text')}</p>
                    <hr className='mx-4'/>
                    <div className='flex justify-between px-6 py-4'>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>8.66 M</p>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg>41.390 km <sub>2</sub></p>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>$400</p>
                    </div>
                    <hr className='mx-4'/>
                    <div className='p-4'>
                        <a href="#" className='text-blue-300'>{t('need-directions')}<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block text-2xl transform transition-transform duration-300 group-hover:translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path></svg> </a>
                    </div>
                </div>
            </div>
            <hr className='my-8' />
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='h-[370px] md:h-[227px] md:w-[70%] lg:w-4/12  rounded-3xl overflow-hidden'>
                    <img src="https://tourland.uz/assets/fakt2-D3v8jOP9.jpg" className='w-full h-full object-cover object-center' alt="" />
                </div>
                <div className='flex flex-col justify-around md:w-full lg:w-8/12 mt-6 md:mt-0'>
                    <div className='flex flex-row justify-between items-center px-6'>
                        <div>
                            <h3 className='font-bold'>
                                {t('service-item-four-title')}
                            </h3>
                        </div>
                        <button
                            className="h-10 flex justify-center items-center bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black px-4 :mt-0"
                        >
                            {t('explore-more')}
                        </button>
                    </div>
                    <p className='text-slate-400 text-sm px-6'>{t('service-item-four-short')}</p>
                    <p className='text-slate-400 text-sm p-6 leading-8 text-center md:text-left'>
                        {t('service-item-four-text')}
                    </p>
                    <hr className='mx-4'/>
                    <div className='flex justify-between px-6 py-4'>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>44.48 M</p>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg>275.400 km <sup>2</sup></p>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>$946</p>
                    </div>
                    <hr className='mx-4'/>
                    <div className='p-4'>
                        <a href="#" className='text-blue-300'>{t('need-directions')}<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block text-2xl transform transition-transform duration-300 group-hover:translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path></svg> </a>
                    </div>
                </div>
            </div>
            <hr className='my-8' />
            
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='h-[370px] md:h-[227px] md:w-[40%] rounded-3xl overflow-hidden'>
                    <img src="https://tourland.uz/assets/xitoyta-J6lzAjoF.jpeg" className='w-full h-full object-cover object-center' alt="" />
                </div>
                <div className='flex flex-col justify-around md:w-full lg:w-8/12 mt-6 md:mt-0'>
                    <div className='flex flex-row justify-between items-center px-6'>
                        <div>
                            <h3 className='font-bold'>{t('service-item-five-title')}</h3>
                        </div>
                        <button
                            className="h-10 flex justify-center items-center bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black px-4 md:mt-0"
                        >
                            {t('explore-more')}
                        </button>
                    </div>
                    <p className='text-slate-400 text-sm px-6'>{t('service-item-five-short')}</p>
                    <p className='text-slate-400 text-sm p-6 leading-8'>
                        {t('service-item-five-text')}
                    </p>
                    <hr className='mx-4'/>
                    <div className='flex justify-between px-6 py-4'>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>44.48 M</p>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg>275.400 km <sup>2</sup></p>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>$546</p>
                    </div>
                    <hr className='mx-4'/>
                    <div className='p-4'>
                        <a href="#" className='text-blue-300'>{t('need-directions')}<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block text-2xl transform transition-transform duration-300 group-hover:translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path></svg> </a>
                    </div>
                </div>
            </div>
            <hr className='my-8' />
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='h-[370px] md:h-[227px] md:w-[70%] lg:w-4/12  rounded-3xl overflow-hidden'>
                    <img src="https://tourland.uz/assets/panda-mRCbW3Hl.jpg" className='w-full h-full object-cover object-center' alt="" />
                </div>
                <div className='flex flex-col justify-around md:w-full lg:w-8/12 mt-6 md:mt-0'>
                    <div className='flex flex-row justify-between items-center px-6'>
                        <div>
                            <h3 className='font-bold'>{t('service-item-six-title')}</h3>
                        </div>
                        <button
                            className="h-10 flex justify-center items-center bg-blue-300 border rounded-3xl border-blue-300 hover:bg-white text-sm text-black px-4 md:mt-0"
                        >
                            {t('explore-more')}
                        </button>
                    </div>
                    <p className='text-slate-400 text-sm px-6'>{t('service-item-six-short')}</p>
                    <p className='text-slate-400 text-sm p-6 leading-8'>
                        {t('service-item-six-text')}
                    </p>
                    <hr className='mx-4'/>
                    <div className='flex justify-between px-6 py-4'>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>44.48 M</p>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg>275.400 km <sup>2</sup></p>
                        <p className='text-slate-400 text-sm'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>$546</p>
                    </div>
                    <hr className='mx-4'/>
                    <div className='p-4'>
                        <a href="#" className='text-blue-300'>{t('need-directions')}<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline-block text-2xl transform transition-transform duration-300 group-hover:translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path></svg> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services