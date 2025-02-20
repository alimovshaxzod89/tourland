import React from 'react'
import { useTranslation } from 'react-i18next';

function ReservationForm() {
    const {t, i18n} = useTranslation();
  return (
    <div className='reservation-form max-w-[1380px] px-5 mx-auto mb-20'>
        <div className='bg-[#f9f9f9] p-6 rounded-b-3xl shadow-xl flex flex-col items-center pb-16'>
            <h2 className='font-bold sm:text-3xl text-xl my-12 text-center'> {t('booking-title')} </h2>
            <form className='flex flex-col gap-6 w-[80%]'>
                <div className='flex min-[1000px]:flex-row flex-col justify-between gap-10'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name"> {t('name-label')} </label>
                        <input type="text" name='name' className='w-full sm:text-lg text-[12px]  bg-none rounded-2xl p-2 outline-none border-[1px] border-[#AFAFAF] placeholder:text-black' placeholder={t('name-placeholder')} />
                        <small className="-mt-2 ml-2 text-red-500"></small>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="number"> {t('phone-number-label')} </label>
                        <input name="number" id="number" className="w-full sm:text-lg text-[12px]  bg-none rounded-2xl p-2 outline-none border-[1px] border-[#AFAFAF] placeholder:text-black" type="text" placeholder={t('phone-number-placeholder')} />
                        <small className="-mt-2 ml-2 text-red-500"></small>
                    </div>
                </div>
                <div className="flex min-[1000px]:flex-row flex-col justify-between gap-10">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="guests">{t('number-of-guests-label')}</label>
                        <select name="guests" className="w-full sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] border-[#AFAFAF]" id="guests">
                            <option disabled="" hidden="" value=""> {t('number-of-guests-placeholder')} </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                        </select>
                        <small className="-mt-2 ml-2 text-red-500"></small>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="date"> {t('date-label')} </label>
                        <input name="date" className="w-full sm:text-lg text-[12px] bg-none rounded-2xl cursor-pointer p-2 outline-none border-[1px] border-[#AFAFAF]" id="date" type="date" />
                        <small className="-mt-2 ml-2 text-red-500"></small>
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="destination"> {t('destination-label')} </label>
                    <select name="destination" id="destination" className="w-full sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] border-[#AFAFAF]">
                        <option disabled="" hidden="" value=""> {t('destination-placeholder')} </option>
                        <option value="Antalya">Guanchjou </option>
                        <option value="Istanbul">China</option>
                        <option value="Dubai">Nanjing</option>
                        <option value="Sharm-El-Sheikh">Sharm-El-Sheikh</option>
                        <option value="Kuala Lampur">Kuala Lumpur</option>
                        <option value="Canada"> Zhangjiajie</option>
                        <option value="England">Chendu</option>
                    </select>
                    <small className="-mt-2 ml-2 text-red-500"></small>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="visa"> {t('visa-support-label')} </label>
                    <select name="visa" id="visa" className="w-full sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] border-[#AFAFAF]">
                        <option disabled="" hidden="" value=""> {t('visa-support-placeholder')} </option>
                        <option value="USA"> Сиань</option>
                        <option value="Europe">Shenzhen</option>
                        <option value="England">Chendu</option>
                        <option value="Japan">Hainan </option>
                        <option value="Oman">Chandun</option>
                        <option value="Saudia Arabia">The Great Wall of China</option>
                        <option value="India">Pekin</option>
                        <option value="China">Beijing</option>
                        <option value="Hong Kong">Gong Kong</option>
                        </select>
                    <small className="-mt-2 ml-2 text-red-500"></small>
                </div>
                <button type="submit" disabled="" className="bg-main h-12 text-white hover:text-blue-300 hover:border-blue-300 sm:text-lg text-sm rounded-3xl mt-4 bg-blue-300 hover:bg-white hover:border-main border-[1px] hover:text-main transition-colors duration-500 flex items-center justify-center"> {t('booking-submit')} </button>
            </form>
        </div>
    </div>
  )
}

export default ReservationForm