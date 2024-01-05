import Link from 'next/link'
import React, { FC } from 'react'

interface EducationSectionProps {
    title: string,
    issue_date: string,
    organization: {
        link: string,
        label: string
    },
    id: string,
    href: string,
    description: string
}

const CertificateSection: FC<EducationSectionProps> = ({ title, organization, issue_date, href, description }) => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex items-center gap-4'>
                <span className='text-sm font-normal bg-green-200 py-1 px-4 rounded-xl text-green-700'>certification</span>
                <h1 className='font-semibold text-2xl'>{title}</h1>
            </div>
            <ul>
                <li>
                    <i className='font-semibold'>Issuing Organization:</i> <Link className='underline' href={organization.link}> {organization.label}</Link>
                </li>
                <li>
                    <i className='font-semibold'>Issue Date:</i> <span> {issue_date}</span>
                </li>
                <li>
                    <i className='font-semibold'>Certificate:</i> <Link className='underline' href={href}> view </Link>
                </li>
                <li>
                    <i className='font-semibold'>Description:</i> <span> {description}</span>
                </li>
            </ul>
        </div>
    )
}

export default CertificateSection;