import React from 'react'
import styles from '../style'
import { person1, person2, person3, person4 } from '../assets/images'

const Person = ({ name, testimony, img }) => (
  <div className={`${styles.flexCenter} flex-col relative sm:-mt-0 -mt-5`}>
    <div className={`${styles.flexCenter} flex-col lg:w-[362px] md:w-[300px] w-[400px] h-[260px] rounded-lg profile__bg__gradient p-5 z-[0] mt-[120px]`}>
      <h4 className='font-outfit font-medium text-[24px] text-center text-white z-[5] pb-3 mt-10'>{name}</h4>
      <p className='font-roboto font-normal text-[16px] text-center text-gray-400'>{testimony}</p>
    </div>
    <div className="absolute top-10">
      <img src={img} alt={`${name}'s-profile`} className='w-[150px] h-[150px] rounded-full' />
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section id='testimonials' className={`w-full flex flex-col ${styles.flexCenter} pt-20 mb-6`}>
      <h2 className='font-outfit font-semibold sm:text-[28px] text-[20px] text-white mb-5'>TESTIMONIALS</h2>
      <div className={`${styles.flexCenter} flex-col font-outfit font-semibold sm:text-[64px] text-[44px] leading-[110%]`}>
        <h3>Read What Others</h3>
        <h3>Have To Say</h3>
      </div>

      <div className={`w-full ${styles.flexCenter} md:flex-row flex-col gap-5`}>
        <Person name="A. Sadik" testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel." img={person1} />
        <Person name="I. Fatima" testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel." img={person2} />
        <Person name="H. Mubashir" testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel." img={person4} />
      </div>
    </section>
  )
}

export default Testimonials
