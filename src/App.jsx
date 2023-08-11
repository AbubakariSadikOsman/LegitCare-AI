import React from 'react'
import styles from './style'

import { About, Analytics, Contact, CTA, Featured, Focus, Footer, Hero, Navbar, Testimonials } from './components'

const App = () => (
  <div className={`bg-bgColor text-white w-full ${styles.paddingX}  overflow-hidden`}>
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div id='home' className={`bg-bgColor ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    {/* <div className="ellipse2"></div> */}
    <div className={`bg-bgColor ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Featured /> 
        <Focus /> 
        <Analytics /> 
        <About /> 
        <Testimonials /> 
        <CTA /> 
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
)
  

export default App
