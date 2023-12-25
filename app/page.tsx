import SkillCard from '@/components/home/SkillCard'
import Image from 'next/image'

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

      <div className='flex flex-col gap-8'>
        <h2 className='font-semibold text-2xl'>techverse that I have been exploring... 🌐 </h2>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {<SkillCard />}
        </div>
      </div>
    </main>
  )
}
