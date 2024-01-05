import Anuation from '@/components/work/Anuation'
import Ars from '@/components/work/Ars'
import ContinuedGrowth from '@/components/work/ContinuedGrowth'
import Softication from '@/components/work/Softication'
import { commonKeywords } from '@/lib/list'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Work | Abhishek Prajapati',
    description: `Embark on a journey through my professional endeavors on the Work page. From crafting dynamic digital experiences at ARS to playing a pivotal role in the backend and DevOps realms at Softication, each chapter contributes to a story of innovation and growth. Explore my ongoing commitment to evolving projects and creating extraordinary solutions in the tech landscape.`,
    verification: {
        google: "UBW1X58fR9f4b1tUjStrdvJm6h_1CvFOTHkXEUgCi1w"
    },
    keywords: [...commonKeywords, 'Work Abhishek Prajapati', 'Work experience Abhishek Prajapati', "experience", "workexperience"],
}

const WorkPage = () => {
    return (
        <main className='mt-14'>
            <div className='mb-14'>

                <p>
                    Greetings from a professional beginning where each project is a tale just waiting to be told.
                    As a full-stack developer, I have had the honor of lending my expertise to a variety of projects,
                    each of which has had a lasting impact on my development.
                </p>
            </div>

            <div className='mb-14'>
                <Anuation />
            </div>
            <div className='mb-14'>
                <Softication />
            </div>
            <div className='mb-14'>
                <Ars />
            </div>
            <div className='mb-14'>
                <ContinuedGrowth />
            </div>
        </main>
    )
}

export default WorkPage