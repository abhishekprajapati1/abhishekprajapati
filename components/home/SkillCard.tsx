import { SkillCardProps } from '@/lib/types'
import React from 'react'

const SkillCard: React.FC<{ data: SkillCardProps }> = ({ data }) => {
    return (
        <div className='border p-6 rounded-sm text-center'>

            <p> {data.label}</p>
        </div>
    )
}

export default SkillCard