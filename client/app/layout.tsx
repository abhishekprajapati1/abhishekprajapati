import type { Metadata } from 'next'
import { M_PLUS_Code_Latin } from 'next/font/google'
import '../styles/globals.css'
import WebsiteNavigation from '@/components/navigations/WebsiteNavigation'
import Provider from '@/store/Provider'
import PageRenderer from '@/components/PageRenderer'
import { PAGES_WITHOUT_NAVBAR } from '@/lib/constants'

const mpcl = M_PLUS_Code_Latin({ subsets: ['latin'] })

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
      <body className={`w-full h-screen overflow-auto sm:w-[90%] md:w-[60%] lg:w-[732px] mx-auto px-6 py-[58px] ${mpcl.className}`}>
        <Provider>
          <PageRenderer behaviour='exclude' pathnames={PAGES_WITHOUT_NAVBAR}>
            <WebsiteNavigation />
          </PageRenderer>
          {children}
        </Provider>
      </body>
    </html>
  )
}
