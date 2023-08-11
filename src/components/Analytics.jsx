import React from 'react'
import styles from '../style'
import { analytics } from '../assets/images'
import GradientBar from './GradientBar'

const Analytics = () => {
  return (
    <section id='analytics' className={`flex-col ${styles.flexCenter} pt-20`}>
      <h2 className='font-outfit font-semibold sm:text-[28px] text-[20px] text-white sm:mb-0 mb-5'>ANALYTICS</h2>
      <div className={`w-full ${styles.flexCenter} flex-col-reverse md:flex-row sm:flex-row`}>
        <div className="sm:w-[50%] w-[100%]">
          <img src={analytics} alt="analytics" />
        </div>
        <div className={`sm:w-[50%] w-[100%] ${styles.flexCenter} flex-col`}>
          <div className={`${styles.flexCenter} flex-col`}>
            <h3 className='font-roboto_condensed sm:text-[40px] text-[28px] leading-[120%] tracking-wider font-normal sm:text-start text-center'>AI FOR INFECTIOUS DISEASES</h3>
            <GradientBar width={200} height={8} />
          </div>
          <p className='font-roboto_condensed sm:text-[28px] text-[20px] leading-[130%] tracking-wider font-normal text-start'>
          We have developed AI systems towards malaria, the screening of COVID-19 as well as Tuberculosis related damages from chest X-Rays. We continue to develop AI solutions towards the many infectious diseases plaguing Africa and the world. We are currently testing and improving the AI solutions.
          </p>
        </div> 
      </div>
    </section>
  )
}

export default Analytics
