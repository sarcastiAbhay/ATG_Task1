import Image from 'next/image'
import React from 'react'
import location_icon from '../public/assets/location_icon.svg'
import location_icon2 from '../public/assets/location_icon2.svg'
import edit_icon from '../public/assets/edit_icon.svg'
import warning from '../public/assets/warning.svg'
import thumbsup from '../public/assets/thumbsup.svg'
import cross from '../public/assets/cross.svg'

function WritePost({onSignIn, onSignUp}) {

  const onInput = () => {
    let edite = document.getElementById('edite');
    let cross = document.getElementById('cross');
    let input = document.getElementById('input');
    input.value != null ? edite.classList.add('hidden') : ''
    input.value != null ? cross.classList.remove('hidden') : ''
  }
  const onCross = () => {
    let edite = document.getElementById('edite');
    let cross = document.getElementById('cross');
    let input = document.getElementById('input');
    edite.classList.remove('hidden');
    cross.classList.add('hidden');
    input.value = null;
  }

  return (
    <>
      <div className={`xl:col-span-1 ${(onSignIn || onSignUp) ? 'hidden' : ''} `}>
        {/* location icon  */}
        <div className='absolute h-[15px]  w-[10.5px] top-[657.5px] left-[1000.75px] '><Image src={location_icon} alt='' /></div>
        <div className='absolute h-[15px] w-[10.5px]  top-[650px] left-[1003.6px] '><Image src={location_icon2} alt='' /></div>

        {/* location  */}
        <input id='input' onClick={onInput} className=' h-[18px] w-[190px] absolute top-[660px] left-[1019px] font-IBM font-[600] text-[14px] leading-[18px] text-black outline-none ' placeholder='Enter your location ' type='text' />

        {/* edit icon  */}
        <div id='edite' className='cursor-pointer absolute top-[657.5px] left-[1222.5px] '><Image id='edite_image' src={edit_icon} alt='' /></div>

        {/* cross icon  */}
        <div onClick={onCross} id='cross' className='cursor-pointer hidden absolute top-[657.5px] left-[1222.5px] '><Image id='edite_image' src={cross} alt='' /></div>

        {/* underline  */}
        <div className='w-[243px] absolute top-[685px] left-[997px] border-[0.4px] border-solid border-[#B8B8B8] '></div>

        {/* warning  */}
        <div className='absolute top-[719.33px] left-[998.33px] opacity-50 '><Image src={warning} alt='' /></div>
        <p className='absolute w-[280px] h-[32px] top-[717px] left-[1020px] opacity-50 font-IBM font-[400] text-black leading-[16px] '>Your location will help us serve better and extend a personalised experience.</p>

        {/* recommended groups  */}
        <div className='absolute top-[800px] left-[995.75px] opacity-90 rounded-tl-3xl rounded-tr-3xl'><Image src={thumbsup} alt='' /></div>

        <p className='w-[190px] h-[18px] absolute top-[802.5px] left-[1020px] font-IBM font-[600] text-[14px] leading-[18px] tracking-[0.1em] text-black '>RECOMMENDED GROUPS</p>

        {/* profile */}
        <div className='absolute top-[850px] left-[995.75px] '>
          <div className='w-[36px] h-[36px] '><img className='rounded-[21px]' src={'https://links.papareact.com/3ke'} alt='' /></div>

          {/* username  */}
          <p className='absolute top-[1.5px] left-[50px] font-[600] '>Leisure</p>

          {/* follow button  */}
          <button className='w-[75px] h-[30px] absolute top-[1.5px] left-[200px] rounded-[14px] bg-[#EDEEF0] text-black px-3 py-auto'>Follow</button>
        </div>

        {/* profile */}
        <div className='absolute top-[910px] left-[995.75px] '>
          <div className='w-[36px] h-[36px] '><img className='rounded-[21px]' src={'https://links.papareact.com/3ke'} alt='' /></div>

          {/* username  */}
          <p className='absolute top-[1.5px] left-[50px] font-[600] '>Activism</p>

          {/* follow button  */}
          <button className='w-[75px] h-[30px] absolute top-[1.5px] left-[200px] rounded-[14px] bg-[#EDEEF0] text-black px-3 py-auto'>Follow</button>
        </div>

        {/* profile */}
        <div className='absolute top-[970px] left-[995.75px] '>
          <div className='w-[36px] h-[36px] '><img className='rounded-[21px]' src={'https://links.papareact.com/3ke'} alt='' /></div>

          {/* username  */}
          <p className='absolute top-[1.5px] left-[50px] font-[600] '>MBA</p>

          {/* follow button  */}
          <button className='w-[75px] h-[30px] absolute top-[1.5px] left-[200px] rounded-[14px] bg-[#EDEEF0] text-black px-3 py-auto'>Follow</button>
        </div>

        {/* profile */}
        <div className='absolute top-[1030px] left-[995.75px] '>
          <div className='w-[36px] h-[36px] '><img className='rounded-[21px]' src={'https://links.papareact.com/3ke'} alt='' /></div>

          {/* username  */}
          <p className='absolute top-[1.5px] left-[50px] font-[600] '>Philosophy</p>

          {/* follow button  */}
          <button className='w-[75px] h-[30px] absolute top-[1.5px] left-[200px] rounded-[14px] bg-[#EDEEF0] text-black px-3 py-auto'>Follow</button>
        </div>

        {/* see more  */}
        <button className='w-[60px] h-[16px] font-IBM font-[500] text-[12px] leading-[16px] text-[#2F6CE5] absolute top-[1110px] left-[1210px] '>See More...</button>


      </div>
    </>
  )
}

export default WritePost