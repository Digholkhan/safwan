import React from 'react'
import img1 from '../../../assets/human1.png'
import img2 from '../../../assets/image_here.png'
import img3 from '../../../assets/Image_2.png'
import Section_Header from '../../Section_Header'
import Section_Title from '../../Section_Title'
import Button from '../../Button'


const About_Me = () => {
  return (
     <>
        <div className='container flex justify-between items-center  py-20'>
          <div className='left flex gap-x-[30px]'>
            <div>
              <img src={img1} alt=""/>
            </div>
            <div className='grid gap-y-[30px]'>
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
          <div className='right '>
              <Section_Title text="About Me" />
              <Section_Header text="I Enjoy Solving Problems With Scalable Solutions" />
              <p className='font-Jost w-[570px] text-secondary'>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                  aeci velit, sed quia non numquam eius modi tempora incidunt lao
                  magnam aliquam quaerat voluptatem reprehenderit.
                  <span className='block mt-8'>Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                  reprehenderit non numquam eius.</span></p>
              <Button text="Download CV" className="btn mt-14"/>
          </div>
        </div>
     </>
  )
}

export default About_Me;