import { skills } from '@/lib/list'
import React from 'react'
import SkillCard from './SkillCard'

const Techverse = () => {
    return (
        <div className='flex flex-col gap-8'>
            <h2 className='font-semibold text-2xl'>techverse that I have been exploring... </h2>
            <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                {
                    skills.map((skill, i) => <SkillCard key={i} data={skill} />)
                }
            </div>
        </div>
    )
}

export default Techverse