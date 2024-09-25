import React from 'react'

const Section_Header = ({TagName="h2",text,className, ...props}) => {
  return (
    <>
      <TagName  {...props} className={`text-secondary text-[50px] font-medium font-vellkorn w-[520px] ${className}`}>{text}</TagName>
    </>
  )
}

export default Section_Header