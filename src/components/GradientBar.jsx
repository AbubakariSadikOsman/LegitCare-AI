import React from 'react'

const GradientBar = ({ width, height }) => {
  return (
    <div className={`w-[${width}px] h-[${height}px] bg-blue-gradient sm:mb-10 mb-5`} />
  )
}

export default GradientBar
