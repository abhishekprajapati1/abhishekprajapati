import SocialLinks from '@/components/SocialLinks'
import IntroSection from '@/components/home/IntroSection'
import RecentArticles from '@/components/home/RecentArticles'
import Techverse from '@/components/home/Techverse'
import { commonKeywords } from '@/lib/list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  keywords: [...commonKeywords, 'Skills Abhishek Prajapati', 'Engineer Abhishek Prajapati'],
  verification: {
    google: "UBW1X58fR9f4b1tUjStrdvJm6h_1CvFOTHkXEUgCi1w"
  }
}

export default function Home() {
  return (
    <main className="mt-14">

      <div className='mb-14'>
        <IntroSection />
      </div>

      <div className='mb-14'>
        <Techverse />
      </div>

      <div className='mb-14'>
        <RecentArticles />
      </div>

      <div className='mb-14'>
        <SocialLinks />
      </div>

    </main>
  )
}
