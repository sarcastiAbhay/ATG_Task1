import React, { useState } from 'react'
import Image from 'next/image'
import three_dots from '../public/assets/three_dots.svg'
import share_icon from '../public/assets/share_icon.svg'
import eye from '../public/assets/eye.png'

function Post({ img, category, emoji, title, desc, userimg, username, views }) {

    const [dotClick, setDotClick] = useState(false)

    return (
        <>
            <div className='relative w-[360px] h-[307px] md:w-[500px] md:h-[400px] bg-white shadow-my-shadow mt-[10px] md:mt-[90px] md:mb-[-80px] mx-auto xl:mt-[56px] xl:mb-[-40px] xl:col-span-2 xl:w-[692px] xl:h-[472px] xl:right-[150px] 2xl:right-[270px] '>

                {/* Post image  */}
                <img src={img} className='w-[360px] md:w-[500px] h-[120px] md:h-[220px] object-fill post-bg xl:w-[692px] xl:h-[220px] ' alt='' />

                {/* post genre */}
                <p className='absolute top-[134px] left-[16px] h-[19px] font-IBM font-[600] text-[14px]  leading-[18px] text-[#343A40] md:top-[228.5px] xl:top-[240px] xl:left-[20px] xl:text-[18px] xl:leading-[23px] '>{emoji} {category}</p>

                {/* title  */}
                <p className='absolute top-[159px] left-[16px] w-[280px] h-[42px] font-IBM font-[600] text-[16px] leading-[21px] text-[#212529] md:w-[400px] md:top-[255px] xl:top-[275px] xl:left-[20px] xl:text-[22px] xl:leading-[134.17%] xl:w-[600px] '>{title}</p>

                {/* three dots icon */}
                <div id='threedots' onClick={()=> setDotClick(!dotClick) } className={`cursor-pointer ${dotClick && 'bg-[#EDEEF0]'} h-[32px] w-[32px] rounded-[4px] text-center text-[#212529] absolute top-[155.55px] left-[318.67px] md:left-[460px] md:top-[255px] xl:left-[648.67px] `}><Image src={three_dots} alt='' /></div>

                {/* more options  */}
                {dotClick && <div id='more_options' className='hidden xl:inline-block w-[160px] h-[102px] absolute top-[290px] left-[520px] bg-white rounded-[4px] shadow-tdot-shadow font-IBM '>
                    <div className='w-[160px] h-[32px] absolute top-[4px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Edit</p></div>
                    <div className='w-[160px] h-[32px] absolute top-[35px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Report</p></div>
                    <div className='w-[160px] h-[32px] absolute top-[66px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Option 3</p></div>
                </div>}

                {dotClick && <div id='more_options' className='xl:hidden w-[160px] h-[102px] absolute top-[192px] left-[190px] md:top-[292px] md:left-[333px] z-20 bg-white rounded-[4px] shadow-tdot-shadow font-IBM '>
                    <div className='w-[160px] h-[32px] absolute top-[4px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Edit</p></div>
                    <div className='w-[160px] h-[32px] absolute top-[35px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Report</p></div>
                    <div className='w-[160px] h-[32px] absolute top-[66px] hover:bg-[#EDEEF0] '><p className='py-[7px] pl-[12px]  cursor-pointer '>Option 3</p></div>
                </div>}

                {/* description */}
                <p className='absolute top-[211px] left-[16px] w-[324px] h-[18px] font-IBM font-[400] text-[14px] leading-[18px] text-[#495057] md:top-[310px] xl:top-[347px] xl:left-[20px] xl:text-[19px] xl:leading-[134.17%] xl:w-[652px] '>{desc}</p>

                {/* userimage  */}
                <div className='w-[37px] h-[37px] absolute top-[250px] left-[16px] md:top-[350px] xl:top-[404px] xl:left-[20px] xl:w-[48px] xl:h-[48px] '><img className='rounded-[24px]' src={userimg} alt='' /></div>

                {/* username  */}
                <p className='absolute top-[252px] left-[65px] h-[17px] font-IBM font-[700] text-[13px] leading-[17px] text-[#212529] md:top-[360px] xl:top-[416px] xl:left-[78px] xl:text-[18px] xl:leading-[23px] '>{username}</p>

                {/* views  */}
                <div className='absolute w-[16.5px] h-[11.25px] top-[353.2px] left-[335px] opacity-70  xl:top-[418px] xl:left-[495.75px]  '><Image src={eye} alt='' /></div>
                <p className='absolute top-[269px] left-[65px] h-[16px] font-IBM font-[600] text-[12px] leading-[16px] text-[#525252] md:top-[355px] md:left-[360px] xl:top-[419px] xl:left-[521px] xl:text-[14px] xl:leading-[18px] '>
                    {views}
                </p>

                {/* share button  */}
                <button className='absolute w-[70px] h-[36px] top-[251px] left-[272px] bg-[#F1F3F5] rounded-[4px] md:top-[345px] md:w-[38px] md:left-[445px] xl:top-[410px] xl:left-[630px] xl:w-[42px] '>
                    <div className='absolute top-[7.6px] left-[10.25px] w-[13.5px] h-[14.94px] text-[#212529] xl:left-[14px] '><Image src={share_icon} alt='' /></div>
                    <p className='md:hidden absolute w-[32px] h-[16px] top-[10px] left-[30px] font-IBM font-[500] text-[12px] leading-[16px] text-[#212529] '>Share</p>
                </button>

            </div>
        </>
    )
}

export default Post