import React from 'react'
import styles from '../style'
import { focus } from '../assets/images'
import GradientBar from './GradientBar'

const Contact = () => {
  return (
    <section id='contact' className={`flex-col ${styles.flexCenter} sm:py-20 py-10`}>
      <h2 className='font-outfit font-semibold sm:text-[28px] text-[20px] text-white sm:mt-0 mt-12'>CONTACT US</h2>
      
      <div className={`w-full ${styles.flexCenter} md:flex-row sm:flex-row flex-col`}>
        
        <div className={`sm:w-[50%] w-[100%] flex flex-col`}>
            <div className='font-roboto font-medium sm:text-[28px] text-[20px] leading-[150%] tracking-wider sm:mb-10 mb-5'>
              <p>Ashesi University</p> 
              <p>1 University Ave, Berekuso - E/R</p> 
              <p>PMB CT3, Cantonments, Accra.</p> 
            </div>

            <div className='font-roboto font-normal sm:text-[28px] text-[20px] leading-[130%] tracking-wider'>
              <p className='my-3'>+233 (0) 55 011 1285 </p>
              <div className='sm:text-[24px] text-[20px]'>
                <p>contact@legitcare.ai</p>
                <p>uthmansadik99@gmail.com</p>
              </div>
            </div>
        </div>

        <form className="sm:w-[50%] w-[100%] mt-10">
          <input type="email" name="email" id="email" placeholder='Email Address:' className='font-roboto font-normal text-[20px] w-full p-3 rounded-[8px] text-black' />
          <textarea name="message" id="message" cols="25" rows="10" placeholder='Message:' className='font-roboto font-normal text-[20px] w-full p-3 rounded-[8px] text-black mt-5'></textarea>
          <button type="submit" className='sm:w-[60%] float-right w-[100%] bg__cta font-roboto font-meduim text-[22px] text-white rounded-[32px] p-3 mt-2'>SUBMIT</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact
