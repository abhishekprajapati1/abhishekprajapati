import Image from 'next/image'
import React from 'react'

const IntroSection = () => {
    return (
        <div className='flex flex-col gap-8'>
            <Image
                src="/assets/profile.gif"
                alt="featured image"
                width={120}
                height={120}
                className='rounded-md'
            />
            <h1 className='font-semibold text-2xl'>hey, I'm Abhishek Prajapati 👋</h1>
            <div>
                <p className='mb-4'>
                    I am  a passionate and results-driven full-stack developer on a mission to craft exceptional digital experiences.
                    With a cutting-edge tech stack that includes the prowess of MERN and
                    the seamless magic of React, Next.js, and NestJS, I embark on a journey to shape the digital landscape.
                </p>
                <div className='w-[250px] my-10 rounded-md overflow-hidden'>
                    <Image
                        src="/assets/feat-image.jpeg"
                        alt="featured image"
                        width={400}
                        height={400}
                        className='w-full h-auto'
                    />
                </div>
                <p>
                    My journey in Information Technology started with a dynamic three-year diploma,
                    laying the foundation for my love affair with code.
                    I thrive in the ever-evolving world of web development, where innovation meets functionality.
                </p>
            </div>
        </div>
    )
}

export default IntroSection