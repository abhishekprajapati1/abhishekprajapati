import { SkillCardProps } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

const SkillCard: React.FC<{ data: SkillCardProps }> = ({ data }) => {
    return (
        <div className='border p-6 rounded-sm flex items-center justify-center gap-4'>
            {
                data.image && (
                    <div className='w-[30px] h-[30px] relative'>
                        <Image
                            src={data.image}
                            alt={data.label + "logo"}
                            fill
                            objectFit='cover'
                        />
                    </div>
                )
            }
            <p> {data.label}</p>
        </div>
    )
}

export default SkillCard