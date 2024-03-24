import Link from 'next/link'
import React from 'react'
import GoArrowIcon from './icons/GoArrowIcon'

const SocialLinks = () => {
    return (
        <div className='flex flex-col gap-8'>
            <h2 className='font-semibold text-2xl'>let's catch up</h2>
            <p>
                Discover more about what I'm up to! Follow me on social media for updates on my projects,
                tech thoughts, and a sprinkle of everyday life.
                Let's connect in this digital space!
            </p>
            <div className='flex items-center gap-6 flex-wrap'>
                <Link href="mailto:ap0661236@gmail.com" className='flex items-center'>
                    <span className='text-lg'>say hello</span>
                    <GoArrowIcon className='w-[20px] h-[20px]' />
                </Link>
                {/* <Link href="https://wa.me/918850593776" target='_blank' className='flex items-center'>
                    <span className='text-lg'>let's chat</span>
                    <GoArrowIcon className='w-[20px] h-[20px]' />
                </Link> */}
                <Link href="https://github.com/abhishekprajapati1" target='_blank' className='flex items-center'>
                    <span className='text-lg'>follow me</span>
                    <GoArrowIcon className='w-[20px] h-[20px]' />
                </Link>
                <Link href="https://www.linkedin.com/in/abhi-prajapati/" target='_blank' className='flex items-center'>
                    <span className='text-lg'>connect on linkedin</span>
                    <GoArrowIcon className='w-[20px] h-[20px]' />
                </Link>
            </div>
        </div>
    )
}

export default SocialLinks