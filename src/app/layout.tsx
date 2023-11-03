'use client'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/styles'
import { StyleRegistry } from 'styled-jsx'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  style={{scrollBehavior:'smooth'}}>
        <body className={inter.className}>
          <StyleRegistry>
            <Header/>
              {children}
            <GlobalStyles/>
          </StyleRegistry>
        </body>
    </html>
  )
}
