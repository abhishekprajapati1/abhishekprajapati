import type { Metadata } from 'next'
import '../styles/globals.css'
import WebsiteNavigation from '@/components/navigations/WebsiteNavigation'
import Provider from '@/store/Provider'
import PageRenderer from '@/components/PageRenderer'
import { PAGES_WITHOUT_NAVBAR } from '@/lib/constants'
import Wrapper from './Wrapper'

export const metadata: Metadata = {
  title: 'Abhishek Prajapati',
  description: `I'm not just a coder; I'm a digital storyteller, crafting experiences that resonate. Let's embark on a journey where every line of code tells a tale, and every project is an adventure waiting to unfold. Join me in shaping the future of the digital realm! `,
  verification: {
    google: "UBW1X58fR9f4b1tUjStrdvJm6h_1CvFOTHkXEUgCi1w"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <Wrapper>
        <Provider>
          <PageRenderer behaviour='exclude' pathnames={PAGES_WITHOUT_NAVBAR}>
            <WebsiteNavigation />
          </PageRenderer>
          {children}
        </Provider>
      </Wrapper>
    </html>
  )
}
