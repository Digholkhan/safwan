import React from 'react'
import Header from '../../Section_Header'
import HeadingTitle from '../../Section_Title'
import Card from '../../Card'
import Ui from '../../../assets/icon/ui.png'
import Mobile from '../../../assets/icon/mobile.png'
import Web from '../../../assets/icon/web.png'





const My_services = () => {
  return (
    <>
      <div className="container py-20">
        <div className="py-4">
          <HeadingTitle text="My Services" className="mx-auto" />
          <Header
            text="Provide Wide Range of Digital Services"
            className="mx-auto text-center"
          />
        </div>
        <div className="flex justify-between ">
          <Card
            imgSrc={Ui}
            text="Ui/UX Design"
            Description="Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na aibus minima veniam."
            HclassName="!font-extrabold !text-[26px]"
            spanclassName="!text-3xl"
          />
          <Card
            imgSrc={Mobile}
            text=" Mobile App Design "
            Description="Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na aibus minima veniam."
            HclassName="!font-extrabold !text-[26px]"
            spanclassName="!text-3xl"
          />
          <Card
            imgSrc={Web}
            text="Web Design"
            Description="Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na aibus minima veniam."
            HclassName="!font-extrabold !text-[26px]"
            spanclassName="!text-3xl"
          />
        </div>
      </div>
    </>
  );
}

export default My_services