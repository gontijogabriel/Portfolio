import type React from "react"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export const metadata = {
    title: "Gabriel Gontijo - Full Stack Developer",
    description:
        "Portfólio de Gabriel Gontijo, desenvolvedor Full Stack especializado em React, Django e tecnologias modernas.",
    generator: 'v0.dev'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="fixed inset-0 bg-black -z-20" />
                <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23333333&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] -z-10" />
                {children}
            </body>
        </html>
    )
}
