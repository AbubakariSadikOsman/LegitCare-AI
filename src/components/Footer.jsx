import React from 'react'
import styles from '../style'
import { love, media } from '../assets/images'
import { navLinks, features } from '../constants'

const Footer = () => {
  return (
    <section className={`w-full pt-20 pb-10`}>

      <div className={`w-full flex sm:flex-row flex-col sm:gap-10 gap-3`}>
        
        <div className={`sm:w-[50%] w-[100%] flex flex-row justify-around`}>
          <div className={`sm:w-[50%] w-[100%] flex flex-col justify-even`}>
            <a href="#home">
              <h5 className='font-outfit font-semibold sm:text-[24px] text-[16px] text-white sm:mt-0 mt-12 text-center mb-5 cursor-pointer'>LEGIT CARE</h5>
            </a>
            <img src={love} alt="health is live" className='h-[58%]'/>
            <p className='font-roboto font-normal text-[20px] mt-5'>Copyright &copy; legitcare.ai 2023</p>
          </div>
          <div className={`sm:w-[50%] w-[100%] flex flex-col justify-center`}>
            <a href="#home">
              <h5 className='font-outfit font-semibold sm:text-[24px] text-[16px] text-white sm:mt-0 mt-12 text-center mb-5 cursor-pointer'>LEGIT CARE</h5>
            </a>
            <ul>
              {navLinks.map((nav, index) => (
                <li className={`font-outfit font-medium text-[24px] text-white cursor-pointer mt-6 ${styles.flexStart}`}>
                  {navLinks.length - 1 !== index ? <a href={`#${nav.id}`}>{nav.title}</a> : null} 
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`sm:w-[50%] w-[100%] flex flex-row justify-around`}>
          <div className={`sm:w-[50%] w-[100%] flex flex-col justify-even`}>
            <h5 className='font-outfit font-semibold sm:text-[24px] text-[16px] text-white sm:mt-0 mt-12'>FEATURES</h5>
            <ul>
            {features.map((feature, index) => (
              <li className={`font-outfit font-medium text-[22px] text-white ${index === 0 ? 'mt-[44px]' : 'mt-[16px]'}`}>
                {feature.content}
              </li>
            ))}
          </ul>
          </div>
          
          <div className={`sm:w-[50%] w-[100%] flex flex-col justify-even`}>
            <h5 className='font-outfit font-semibold sm:text-[24px] text-[16px] text-white sm:mt-0 mt-12 text-center'>CONTACT</h5> 
            <div className={`${styles.flexCenter} flex-col`}>
              <img src={media} alt="Media Logos" className='mt-6 w-[80%] h-[100px]' />
              <div className='font-roboto font-normal sm:text-[24px] text-[20px] leading-[130%] tracking-wider'>
                <p className='mb-2'>+233 (0) 55 011 1285 </p>
              </div>
              <a href='#contact' className={`sm:w-[100%] w-[90%] font-roboto font-semibold text-[22px] text-white rounded-[32px] p-3 mt-8 purple__bg__gradient text-center`}>Send Us An Email</a>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Footer
