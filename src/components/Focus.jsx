import React from 'react'
import styles from '../style'
import { focus } from '../assets/images'
import GradientBar from './GradientBar'

const Focus = () => {
  return (
    <section id='focus' className={`flex-col ${styles.flexCenter} sm:pt-20 pt-4`}>
      <h2 className='font-outfit font-semibold sm:text-[28px] text-[20px] text-white sm:mt-0 mt-12'>FOCUS</h2>
      <div className={`w-full ${styles.flexCenter} md:flex-row sm:flex-row flex-col`}>
        <div className={`sm:w-[50%] w-[100%] ${styles.flexCenter} sm:flex-col flex-col sm:mt-10 mt-3 mb-5`}>
          <div className={`${styles.flexCenter} flex-col`}>
            <h3 className='font-roboto_condensed sm:text-[40px] text-[28px] leading-[120%] tracking-wider font-normal sm:text-start text-center'>AI FOR RADIOLOGY</h3>
            <GradientBar width={200} height={8}/>
          </div>
          <p className='font-roboto_condensed sm:text-[28px] text-[20px] leading-[130%] tracking-wider font-normal text-start'>
          We developed AI systems for automated diagnostics of 14 chest conditions including pneumonia, fibrosis, hernia, and pleural effusion with chest X-rays, and breast cancer with mammograms. We are currently testing and improving the AI solutions.
          </p>
        </div>
        <div className="sm:w-[50%] w-[100%]">
          <img src={focus} alt="analytics" />
        </div> 
      </div>
    </section>
  )
}

export default Focus
