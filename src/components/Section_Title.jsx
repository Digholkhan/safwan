import React from 'react'

const Section_Title = ({TagName="h3",text,className, ...props}) => {
  return (
    <>
      <TagName  {...props} className={`relative text-primary text-lg font-medium font-vellkorn flex justify-center items-center gap-5 w-48 ${className}`}><div className='before:content-[""] before:absolute before:top-[14px] before:left-0  before:w-[40px] before:h-[2px] before:bg-primary after:content-[""] after:absolute after:top-[12px] after:left-10 after:rounded-full after:w-[6px] after:h-[6px] after:bg-primary'></div>{text}</TagName>
    </>
  )
}

export default Section_Title