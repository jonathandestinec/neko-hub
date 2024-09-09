import LoginBtn from '@/components/authRelated/LoginBtn'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' flex items-center justify-center relative'>

      <div className=''>

        <h1 className=' font-[family-name:var(--font-geist-mono)] font-black text-5xl text-center mt-10 text-white'>Neko Hub</h1>

        <div className=' flex items-center justify-center'>
          <Image src={"/assets/borutoU.png"} width={700} height={700} alt='Boruto' />
        </div>

        <LoginBtn />

      </div>

    </div>
  )
}

export default page