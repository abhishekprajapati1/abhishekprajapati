import { SkillCardProps } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

const SkillCard: React.FC<{ data: SkillCardProps }> = ({ data }) => {
    return (
        <div className='border p-6 rounded-sm flex items-center justify-center gap-4'>
            {
                data.image && (
                    <Image
                        src={data.image}
                        alt={data.label + "logo"}
                        width={30}
                        height={30}
                    />
                )
            }
            <p> {data.label}</p>
        </div>
    )
}

export default SkillCard