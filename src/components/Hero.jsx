import React from 'react'
import styles from '../style'
import { clinical } from '../assets/images'

const Hero = () => {
  return (
   <section id='home' className={`${styles.flexCenter} md:flex-row sm:flex-row flex-col py-20 w-full`}>
    <div className={`flex-1 flex-col xl:p-0 sm:px-6 px-6`}>
      <div className={`${styles.flexCenter} flex-col`}>
        <h1 className='font-outfit sm:font-bold sm:text-[64px] text-[54px] leading-tight tracking-normal text-white'>
          Revolutionizing <br /><span className='text-gradient'>Healthcare</span>&nbsp;for&nbsp;a <br /> Better&nbsp;Future
        </h1>
        <p className='w-[422px] h-[78px] font-outfit font-normal sm:text-[32px] text-[28px] text-center tracking-wide text-white mt-7'>
          Empowering Health through Artificial Intelligence
        </p>
        <button className='w-[269px] sm:h-[74px] h-[58px] bg-blue-gradient mt-10 rounded-xl cursor-pointer font-semibold sm:text-[24px] text-[18px] sm:mb-0 mb-10'>
          Visit Our <span className='text-menuBg'>AI</span> Platform
        </button>
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <img src={clinical} alt="clinical" className={`sm:w-[100%] h-[100%] w-[80%]`}/>
    </div>
   </section>
  )
}




export default Hero
