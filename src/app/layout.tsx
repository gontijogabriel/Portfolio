'use client'
import { Roboto } from 'next/font/google'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/styles'
import StyledComponentsRegistry from './registry'

const inter = Roboto({ subsets: ['latin'], weight:"400" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  style={{scrollBehavior:'smooth'}}>
        <body className={inter.className}>
          <StyledComponentsRegistry>

            <Header/>
              {children}
            <GlobalStyles/>
          </StyledComponentsRegistry>
        </body>
    </html>
  )
}
