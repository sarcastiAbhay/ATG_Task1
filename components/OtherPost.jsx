import React, { useState } from 'react'
import Image from 'next/image'
import three_dots from '../public/assets/three_dots.svg'
import share_icon from '../public/assets/share_icon.svg'
import calendar from '../public/assets/calendar.svg'
import location_icon from '../public/assets/location_icon.svg'
import location_icon2 from '../public/assets/location_icon2.svg'
import eye from '../public/assets/eye.png'


function OtherPost({ img, emoji, category, title, date, location, site, userimg, username, views }) {

    const [dotClick, setDotClick] = useState(false)

    return (
        <>
            <div className='relative w-[360px] h-[374px]  md:w-[500px] md:h-[400px] bg-white shadow-my-shadow mt-[10px] md:mt-[90px] md:mb-[-80px] mx-auto xl:mt-[56px] xl:mb-[-40px] xl:col-span-2 xl:w-[692px] xl:h-[472px] xl:right-[150px]  2xl:right-[270px] '>

                {/* Post image  */}
                <img src={img} className='w-[360px] md:w-[500px] h-[120px] md:h-[220px] object-fill post-bg xl:w-[692px] xl:h-[220px] ' alt='' />

                {/* post genre */}
                <p className='absolute top-[134px] left-[16px] h-[19px] font-IBM font-[600] text-[14px]  leading-[18px] text-[#343A40] md:top-[228.5px] xl:top-[240px] xl:left-[20px] xl:text-[18px] xl:leading-[23px]  '>{emoji} {category}</p>

                {/* title  */}
                <p className='absolute top-[159px] left-[16px] w-[280px] h-[42px] font-IBM font-[600] text-[16px] leading-[21px] text-[#212529] md:w-[400px] md:top-[250px] xl:top-[275px] xl:left-[20px] xl:text-[22px] xl:leading-[134.17%] xl:w-[600px] '>{title}</p>

                {/* three dots icon */}
                <div onClick={() => setDotClick(!dotClick)} className={`cursor-pointer ${dotClick && 'bg-[#EDEEF0]'} h-[32px] w-[32px] text-center rounded-[4px] text-[#212529] absolute top-[155.55px] left-[318.67px] md:left-[460px] md:top-[255px] xl:left-[648.67px] `}><Image src={three_dots} alt='' /></div>

                {/* more options  */}
                {dotClick && <div id='more_options' className='hidden xl:inline-block z-20 w-[160px] h-[102px] absolute top-[290px] left-[520px] bg-white rounded-[4px] shadow-tdot-shadow font-IBM '>
                    <div className='w-[160px] h-[32px] absolute top-[4px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Edit</p></div>
                    <div className='w-[160px] h-[32px] absolute top-[35px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Report</p></div>
                    <div className='w-[160px] h-[32px] absolute top-[66px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Option 3</p></div>
                </div>}

                {dotClick && <div id='more_options' className='xl:hidden w-[160px] h-[102px] absolute top-[192px] left-[190px] md:top-[292px] md:left-[333px] z-20 bg-white rounded-[4px] shadow-tdot-shadow font-IBM '>
                    <div className='w-[160px] h-[32px] absolute top-[4px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Edit</p></div>
                    <div className='w-[160px] h-[32px] absolute top-[35px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Report</p></div>
                    <div className='w-[160px] h-[32px] absolute top-[66px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Option 3</p></div>
                </div>}

                {/* date */}
                <div className='absolute top-[211px] left-[16px] w-[324px] h-[18px] font-IBM font-[400] text-[14px] leading-[18px] text-[#495057]  md:top-[280px] xl:top-[316px] xl:left-[44px]   '>
                    <div className='absolute top-[0.67px] left-[2px] xl:text-[15px] xl:leading-[20px] xl:left-[-20px] '><Image src={calendar} alt='' /></div>
                    <p className='w-[120px] h-[16px] absolute top-[0] left-[20px] font-IBM font-[600] text-[12px] leading-[16px] xl:text-[15px] xl:leading-[20px] xl:left-[-1px] xl:w-[170px] '>{date}</p>
                </div>

                {/* location */}
                <div className='absolute top-[211px] left-[16px] w-[324px] h-[18px] font-IBM font-[400] text-[14px] leading-[18px] text-[#495057] md:top-[280px] xl:top-[316px] xl:left-[250px]  '>
                    <div className='absolute top-[-6px] left-[184px] xl:text-[15px] xl:leading-[20px] xl:left-[60px] '><Image src={location_icon2} alt='' /></div>
                    <div className='absolute top-[0.8px] left-[181.33px] xl:text-[15px] xl:leading-[20px] xl:left-[57px] '><Image src={location_icon} alt='' /></div>
                    <p className='w-[100px] h-[16px] absolute top-[0px] left-[196px] font-IBM font-[600] text-[12px] leading-[16px] tracking-[-0.01em] text-[#212529] xl:text-[15px] xl:leading-[20px] xl:w-[128px] xl:left-[73px] '>{location}</p>
                </div>

                {/* visit site */}
                <button className={`absolute top-[245px] left-[17px] w-[328px] h-[34px] bg-white rounded-[8px] box-border border-[0.07px] border-solid border-[#A9AEB8] text-[13px] leading-[18px] text-center ${category == 'Meetup' ? 'text-[#E56135]' : 'text-[#02B875]'} font-IBM font-[600] md:top-[305px] md:w-[460px] xl:top-[352px] xl:left-[20px] xl:w-[652px] xl:h-[38px] `}>{site}</button>

                {/* userimage  */}
                <div className='w-[37px] h-[37px] absolute top-[310px] left-[16px]  md:top-[350px]  xl:top-[404px] xl:left-[20px] xl:w-[48px] xl:h-[48px] '><img className='rounded-[24px]' src={userimg} alt='' /></div>

                {/* username  */}
                <p className='absolute top-[312px] left-[65px] h-[17px] font-IBM font-[700] text-[13px] leading-[17px] text-[#212529] md:top-[360px] xl:top-[416px] xl:left-[78px] xl:text-[18px] xl:leading-[23px]  '>{username}</p>
                

                {/* views  */}
                <div className='absolute w-[16.5px] h-[11.25px] hidden md:inline-block md:top-[353.2px] md:left-[335px] opacity-70  xl:top-[418px] xl:left-[495.75px]  '>
                    <Image src={eye} alt='' />
                </div>
                <p className='absolute top-[330px] left-[65px] h-[16px] font-IBM font-[600] text-[12px] leading-[16px] text-[#525252] md:top-[355px] md:left-[360px] xl:top-[419px] xl:left-[521px] xl:text-[14px] xl:leading-[18px] '>{views}</p>


                {/* share button  */}
                <button className='absolute w-[70px] h-[36px] top-[311px] left-[272px] bg-[#F1F3F5] rounded-[4px] md:top-[345px] md:w-[38px] md:left-[445px] xl:top-[410px] xl:left-[630px] xl:w-[42px] '>
                    <p className='absolute top-[7.6px] left-[10.25px] w-[13.5px] h-[14.94px] text-[#212529] xl:left-[14px] '><Image src={share_icon} alt='' /></p>
                    <p className='md:hidden absolute w-[32px] h-[16px] top-[10px] left-[30px] font-IBM font-[500] text-[12px] leading-[16px] text-[#212529] '>Share</p>
                </button>

            </div>
        </>
    )
}

export default OtherPost