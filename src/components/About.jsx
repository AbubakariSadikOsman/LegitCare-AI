import React from 'react'
import styles from '../style'
import { about } from '../assets/images'
import GradientBar from './GradientBar'

const About = () => {
  return (
    <section id='about' className={`flex-col ${styles.flexCenter} pt-20`}>
      <h2 className='font-outfit font-semibold sm:text-[28px] text-[20px] text-white sm:mb-0 mb-5'>ABOUT US</h2>
      <div className={`w-full ${styles.flexCenter} md:flex-row sm:flex-row flex-col`}>
        <div className={`sm:w-[50%] w-[100%] ${styles.flexCenter} sm:flex-col flex-col`}>
          <div className={`${styles.flexCenter} flex-col`}>
            <h3 className='font-roboto_condensed sm:text-[40px] text-[28px] leading-[120%] tracking-wider font-normal text-center'>AI FOR BIOMEDICAL RESEARCH</h3>
            <GradientBar width={200} height={8} />
          </div>
          <p className='font-roboto_condensed sm:text-[28px] text-[20px] leading-[130%] tracking-wider font-normal text-start'>
          LegitCare AI Labs applies Artificial Intelligence to fields including Biotechnology, Oncology, Regenerative Medicine, Neuroscience, Optometry, Epidemiology and Dietetics/Nutrition.
          </p>
        </div>
        <div className="sm:w-[50%] w-[100%] sm:mt-0 mt-3">
          <img src={about} alt="analytics" />
        </div> 
      </div>

      <div className={`w-full ${styles.flexCenter} md:flex-row sm:flex-row flex-col gap-5`}>
        <div className={`bg-menuBg sm:w-[50%] w-[100%] sm:h-auto h-[340px] ${styles.flexCenter} flex-col sm:mt-10 mt-8 sm:p-4 p-3 sm:rounded-xl rounded-lg`}>
          <h4 className='font-roboto_condensed sm:text-[40px] text-[28px] text-center text-black leading-[120%] tracking-wider font-normal sm:mb-5 mb-3'>PROBLEM</h4>
          <p className='font-roboto_condensed sm:text-[28px] text-[20px] text-white leading-[130%] tracking-wider font-normal text-start'>
          In Africa, there's as high as 60,000 patients per doctor ratio in some nations and 9.2 million deaths mainly from communicable and non-communicable diseases. Quality, affordable and accessible healthcare has been a great challenge for Africa. As important as Diagnostics and Radiology is to early treatment and prevention of deaths, African nations have inadequate numbers of Radiologists.
          Ghana has only 34 registered Radiologists in the country (1 Radiologist for every 800,000 people).
          </p>
        </div>
        <div className={`bg-visitBtn sm:w-[50%] w-[100%] sm:h-auto h-[340px] ${styles.flexCenter} flex-col sm:mt-10 mt-2 sm:p-4 p-3 sm:rounded-xl rounded-lg`}>
          <h4 className='font-roboto_condensed sm:text-[40px] text-[28px] text-white leading-[120%] tracking-wider font-normal text-center sm:mb-5 mb-3'>OUR SOLUTION</h4>
          <p className='font-roboto_condensed sm:text-[28px] text-[20px] text-black leading-[130%] tracking-wider font-normal text-start'>
          And so in order to assist in democratizing quality and affordable for all in Africa, we founded minoHealth, where we use Artificial Intelligence(AI) for automated diagnostics, forecasts and prognostics. We've developed AI systems for conditions including breast cancer, pneumonia, fibrosis, hernia, edema, cardiomegaly, emphysema, effusion and pneumothorax. The system simply takes a medical image as input and then determines if the chosen condition is present or not, if it'd develop. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
