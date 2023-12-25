import type { Metadata } from 'next'
import { Inter, Fira_Code, M_PLUS_Code_Latin } from 'next/font/google'
import '../styles/globals.css'
import WebsiteNavigation from '@/components/navigations/WebsiteNavigation'
import Provider from '@/store/Provider'

const inter = Inter({ subsets: ['latin'] })
const fira = Fira_Code()
const mpcl = M_PLUS_Code_Latin()

export const metadata: Metadata = {
  title: 'Abhishek Prajapati',
  description: `I'm not just a coder; I'm a digital storyteller, crafting experiences that resonate. Let's embark on a journey where every line of code tells a tale, and every project is an adventure waiting to unfold. Join me in shaping the future of the digital realm! `,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full sm:w-[90%] md:w-[60%] lg:w-[732px] mx-auto px-6 py-[58px] ${mpcl.className}`}>
        <Provider>
          <WebsiteNavigation />
          {children}
        </Provider>
      </body>
    </html>
  )
}
