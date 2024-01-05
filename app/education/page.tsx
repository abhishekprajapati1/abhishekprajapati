import CertificateSection from '@/components/education/CertificateSection'
import EducationSection from '@/components/education/EducationSection'
import { certifications, commonKeywords, educations } from '@/lib/list'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Education | Abhishek Prajapati',
    description: `Discover my educational journey on the Education page. From a comprehensive Information Technology diploma to high school achievements, explore how each chapter has shaped my understanding and proficiency. Uncover the foundation that fuels my passion for technology, learning, and growth.`,
    verification: {
        google: "UBW1X58fR9f4b1tUjStrdvJm6h_1CvFOTHkXEUgCi1w"
    },
    keywords: [...commonKeywords, 'Education Abhishek Prajapati', 'education qualification Abhishek Prajapati', "qualification", "education"],
}


const EducationPage = () => {
    return (
        <main className='mt-14'>
            <div className='mb-14'>

                <p>
                    Embarking on a journey of knowledge and growth, my educational pursuits have laid the foundation for my passion in the world of technology.
                    From comprehensive diploma studies to the foundational years of high school,
                    each chapter has contributed to my understanding and proficiency in the field of Information Technology.
                </p>
            </div>

            {
                educations.map(e => (
                    <div className='mb-14' key={e.description}>
                        <EducationSection
                            title={e.title}
                            institute={e.institute}
                            duration={e.duration}
                            description={e.description}
                        />
                    </div>
                ))
            }

            {
                certifications.map(c => (
                    <div className='mb-14' key={c.id}>
                        <CertificateSection
                            title={c.title}
                            description={c.description}
                            href={c.href}
                            id={c.id}
                            issue_date={c.issue_date}
                            organization={c.organization}
                        />
                    </div>
                ))
            }
        </main>
    )
}

export default EducationPage