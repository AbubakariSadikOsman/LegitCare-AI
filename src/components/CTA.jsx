import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <section className={`mt-20`}>
      <div className={`flex flex-col justify-evenly items-center mt-20 w-full sm:h-[432px] h-[300px] p-5 bg__cta sm:rounded-[20px] rounded-[14px]`}>
        <h3 className="font-outfit font-semibold text-[28px] text-black">ARE YOU READY?</h3>
        <div className={`font-outfit font-semibold md:text-[48px] sm:text-[64px] text-[32px] text-white text-center leading-tight tracking-widest`}>
          <p>Be A Part Of The</p>
          <p><span className='text-gradient'>Next</span> Big Thing</p>
        </div>

        <a className={`${styles.flexCenter} sm:w-[360px] w-[219px] sm:h-[80px] h-[65px] bg-black font-outfit  font-medium sm:text-[32px] text-[24px] text-white rounded-[48px]`}>
          Get Started
        </a>
      </div>
    </section>
  )
}

export default CTA
