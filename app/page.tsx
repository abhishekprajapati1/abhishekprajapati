import SkillCard from '@/components/home/SkillCard'
import GoArrowIcon from '@/components/icons/GoArrowIcon'
import { commonKeywords, skills } from '@/lib/list'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  keywords: [...commonKeywords, 'Skills Abhishek Prajapati', 'Engineer Abhishek Prajapati']
}

export default function Home() {
  return (
    <main className="mt-14">
      <div className='flex flex-col gap-8 mb-14'>
        <h1 className='font-semibold text-2xl'>hey, I'm Abhishek Prajapati 👋</h1>
        <div>
          <p className='mb-4'>
            I am  a passionate and results-driven full-stack developer on a mission to craft exceptional digital experiences.
            With a cutting-edge tech stack that includes the prowess of MERN and
            the seamless magic of React, Next.js, and NestJS, I embark on a journey to shape the digital landscape.
          </p>
          <p>
            My journey in Information Technology started with a dynamic three-year diploma,
            laying the foundation for my love affair with code.
            I thrive in the ever-evolving world of web development, where innovation meets functionality.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-8 mb-14'>
        <h2 className='font-semibold text-2xl'>techverse that I have been exploring... </h2>
        <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8'>
          {
            skills.map((skill, i) => <SkillCard key={i} data={skill} />)
          }
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <Link href="mailto:ap0661236@gmail.com" className='flex items-center'>
          <span className='text-lg'>say hello</span>
          <GoArrowIcon className='w-[20px] h-[20px]' />
        </Link>
        <Link href="https://wa.me/918850593776" target='_blank' className='flex items-center'>
          <span className='text-lg'>let's chat</span>
          <GoArrowIcon className='w-[20px] h-[20px]' />
        </Link>
        <Link href="https://github.com/abhishekprajapati1" target='_blank' className='flex items-center'>
          <span className='text-lg'>github</span>
          <GoArrowIcon className='w-[20px] h-[20px]' />
        </Link>
        <Link href="https://www.linkedin.com/in/abhi-prajapati/" target='_blank' className='flex items-center'>
          <span className='text-lg'>connect on linkedin</span>
          <GoArrowIcon className='w-[20px] h-[20px]' />
        </Link>
      </div>
    </main>
  )
}
