import React, { useState } from 'react'
import Image from 'next/image'
import cut_icon from '../public/assets/cut_icon.svg'
import cross2 from '../public/assets/cross2.svg'
import facebook from '../public/assets/facebook.png'
import google from '../public/assets/google.png'
import signup_login from '../public/assets/signup_login.jpg'
import eye from '../public/assets/eye.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var jwt = require('jsonwebtoken');


function SignIn({ setOnSignIn, setOnSignUp, setFirstName2, setEmail2 }) {

    const [textType, setTextType] = useState('password')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email, password }
        let res = await fetch(`${process.env.NEXT_PUBLIC_baseurl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        var decodedToken = jwt.decode(response.token)
        setEmail('')
        setPassword('')
        if (response.success) {
            toast.success('You are succesfully logged in', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setOnSignIn(false)
            setOnSignUp(false)
            setFirstName2(decodedToken.firstName)
            setEmail2(decodedToken.email)
        } else {
            toast.error(response.error, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {/* for small devices  */}
            <div className='md:hidden create-account z-50 w-[360px] h-screen translate-y-[-15px] absolute top-[178px] bg-white md:top-[24px] sm:left-[135px] left-[17px] '>

                <form onSubmit={handleSubmit} method='POST'>

                    {/* Welcome back  */}
                    <h1 className='w-[130px] h-[23px] absolute top-[22px] left-[20px] font-IBM font-[700] text-[18px] leading-[23px] text-black '>Welcome back!</h1>

                    {/* cut icon  */}
                    <div onClick={() => setOnSignIn(false)} className='cursor-pointer absolute top-[24px] left-[318px] '><Image src={cut_icon} alt='' /></div>

                    <div className='absolute border-[#D9D9DB] rounded-t-[2px] rounded-b-[2px]'>
                        {/* Email  */}
                        <input className='absolute w-[320px] h-[40px] top-[65px] left-[20px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />

                        {/* Password  */}
                        <div className='absolute w-[320px] h-[40px] top-[104px] left-[20px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]'>
                            <input className='outline-none w-[250px] bg-[#F7F8FA]' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type={textType} />
                            <div onClick={() => textType === 'password' ? setTextType('text') : setTextType('password')} className='w-[16.25px] h-[11.25px] absolute top-[10px] left-[284.75px]' >
                                <Image className={`${textType === 'text' ? 'opacity-90' : 'opacity-50'}`} src={eye} alt='' />
                            </div>
                        </div>

                    </div>


                    {/* Sign in  */}
                    <button type='submit' className='w-[150px] h-[36px] absolute top-[166px] left-[20px] rounded-[20px] font-IBM font-[600] text-[13px] leading-[16px] text-center text-white bg-[#2F6CE5]'>Sign In</button>

                    {/* or, Create Acc  */}
                    <p onClick={async () => { await setOnSignIn(false), await setOnSignUp(true) }} className='w-[110px] h-[17px] absolute top-[175px] left-[230px] font-IBM font-[600] text-[13px] leading-[17px] text-center text-[#495057] underline cursor-pointer'>or, Create Account</p>


                    {/* Sign in with Facebook  */}
                    <div className='cursor-pointer w-[320px] h-[38px] absolute top-[224px] left-[20px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                        <div className='absolute top-[8px] left-[82px]  '><Image src={facebook} alt='' />
                            <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign in with Facebook</p>
                        </div>
                    </div>

                    {/* Sign in with Google  */}
                    <div className='cursor-pointer w-[320px] h-[38px] absolute top-[274px] left-[20px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                        <div className='absolute top-[8px] left-[82px] w-[16px] h-[16px] '><Image src={google} alt='' />
                            <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign in with Google</p>
                        </div>
                    </div>

                    {/* Forgot password  */}
                    <p className='cursor-pointer absolute top-[334px] left-[57px] w-[240px] h-[16px] font-IBM font-[600] text-[11px] leading-[16px] text-center text-[#212529] tracking-[-0.008em] '>Forgot Password?</p>
                </form>

            </div>



            {/* for medium & above devices */}

            <div className='hidden md:inline-flex z-50 w-[736px] h-[457px] absolute top-[186px] left-[15px] rounded-[8px] bg-white shadow-acc-shadow lg:left-[150px] lg:top-[158px] xl:left-[300px] 2xl:left-[358px] '>
                <form onSubmit={handleSubmit} method='POST'>

                    {/* cut icon  */}
                    <div onClick={() => setOnSignIn(false)} className='cursor-pointer w-[23.33px] h-[23.33px] absolute top-[-38px] left-[710px] lg:left-[722px] opacity-60  '>
                        <Image className='' src={cross2} alt='' />
                    </div>

                    {/* something written */}
                    <div className='w-[736px] h-[50px] absolute bg-[#EFFFF4] rounded-tl-[8px] rounded-tr-[8px] '>
                        <p className='w-[619px] h-[16px] absolute top-[17px] left-[59px] font-IBM font-[600] text-[14px] leading-[16px] text-center text-[#008A45]  ' >Let&#8217;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    </div>

                    {/* Sign In */}
                    <h1 className='w-[130px] h-[23px] absolute top-[74px] left-[36px] font-IBM font-[900] text-[18px] leading-[23px] text-black '>Sign In</h1>


                    {/* Email  */}
                    <input className='absolute w-[320px] h-[46px] top-[129px] left-[36px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[15px]' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />

                    {/* Password  */}
                    <div className='absolute w-[320px] h-[46px] top-[174px] left-[36px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA]  box-border border-[1px] border-solid border-[#D9D9DB] p-[15px]'>

                        <input className='outline-none w-[250px] bg-[#F7F8FA]' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type={textType} />

                        <div onClick={() => textType === 'password' ? setTextType('text') : setTextType('password')} className='cursor-pointer w-[16.25px] h-[11.25px] absolute top-[12px] left-[284.75px]' >
                            <Image className={`${textType === 'text' ? 'opacity-90' : 'opacity-50'}`} src={eye} alt='' />
                        </div>
                    </div>


                    {/* Sign in Button  */}
                    <button type='submit' className='w-[320px] h-[40px] absolute top-[239px] left-[36px] rounded-[20px] font-IBM font-[600] text-[13px] leading-[16px] text-center text-white bg-[#2F6CE5]'>Sign In</button>

                    {/* Sign in with Facebook  */}
                    <div className='cursor-pointer w-[320px] h-[38px] absolute top-[303px] left-[36px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                        <div className='absolute top-[8px] left-[82px]  '><Image src={facebook} alt='' />
                            <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign in with Facebook</p>
                        </div>
                    </div>

                    {/* Sign in with Google  */}
                    <div className='cursor-pointer w-[320px] h-[38px] absolute top-[349px] left-[36px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                        <div className='absolute top-[8px] left-[82px] w-[16px] h-[16px] '><Image src={google} alt='' />
                            <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign in with Google</p>
                        </div>
                    </div>

                    {/* Don’t have an account yet? Create new for free!  */}
                    <p onClick={async () => { await setOnSignIn(false), await setOnSignUp(true) }} className='w-[280px] h-[17px] absolute top-[81px] left-[420px] font-IBM font-[500] text-[13px] leading-[17px] text-center text-[#495057] underline cursor-pointer'>Don’t have an account yet?  <span className='text-[#2F6CE5] font-[900] '>Create new for free!</span></p>

                    {/* forgot password  */}
                    <p className='cursor-pointer w-[317px] h-[16px] absolute top-[410px] left-[35px] font-IBM font-[600] text-[12px] leading-[16px] text-center tracking-[-0.008em] text-black '>Forgot Password?</p>

                    {/* Image  */}
                    <div className='w-[300px]  absolute top-[150px] left-[420px]  '>
                        <Image className='rounded-xl' src={signup_login} alt='' />
                    </div>


                </form>
            </div>

        </>
    )
}

export default SignIn