import React, { FC } from 'react'

interface EducationSectionProps {
    title: string;
    institute: string;
    duration: string;
    description: string;
}

const EducationSection: FC<EducationSectionProps> = ({ title, institute, duration, description }) => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex items-center flex-wrap gap-4'>
                <span className='text-sm font-normal bg-blue-200 py-1 px-4 rounded-xl text-blue-700'>academics</span>
                <h1 className='font-semibold text-2xl'>{title}</h1>
            </div>
            <ul>
                <li>
                    <i className='font-semibold'>Institution:</i> <span> {institute}</span>
                </li>
                <li>
                    <i className='font-semibold'>Duration:</i> <span> {duration}</span>
                </li>
                <li>
                    <i className='font-semibold'>Description:</i> <span> {description}</span>
                </li>
            </ul>
        </div>
    )
}

export default EducationSection;