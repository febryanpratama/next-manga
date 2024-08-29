"use client";

import Image from 'next/image'
import React from 'react'
import RegisterService from './registerService';

const registerView = () => {
    const { email, username, password, setEmail, setPassword, setUsername, submit } = RegisterService();
  return (
    <div className='grid grid-cols-2'>
      
        <div className='h-screen w-full flex items-center justify-center'>
            <div className='w-2/4'>
                <div className='flex justify-start'>
                    <Image src='/images/logo-astra.png' alt='' width={200} height={200} />
                </div>
                <div>
                    <div className='text-xl font-bold text-gray-500 text-center'>Masukkan Username dan Password yang telah akan digunakan</div>
                    <form onSubmit={submit} className='flex flex-col' >
                        <input 
                            type='text' 
                            placeholder='email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-2 border-gray-500 rounded-md p-2 mt-4' 
                        />
                        <input 
                            type='text' 
                            placeholder='Username' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='border-2 border-gray-500 rounded-md p-2 mt-4' 
                        />
                        <input 
                            type='password' 
                            placeholder='Password'
                            value={password} 
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-2 border-gray-500 rounded-md p-2 mt-4' 
                        />
                        <div className='flex justify-center'>
                            <button type='submit' className='w-1/3 bg-blue-400 text-white rounded-md p-2 mt-2' >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='h-screen relative'>
            {/* Background Image */}
            <Image src='/images/bg-login.png' alt='' layout='fill' objectFit='cover' />
            
            {/* Centered Large Logo */}
            <div className='absolute inset-0 flex items-center justify-center'>
                <Image src='/images/logo-astra-large.png' alt='' width={600} height={600} />
            </div>
        </div>
    </div>
  )
}

export default registerView