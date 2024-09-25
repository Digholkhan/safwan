import React from 'react'

const Box_Heading = ({TagName="h4",text,className, ...props}) => {
  return (
    <>
      <TagName  {...props} className={`text-secondary text-2xl font-bold font-vellkorn ${className}`}>{text}</TagName>
    </>
  )
}

export default Box_Heading