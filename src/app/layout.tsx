import './globals.css'
import localFont from 'next/font/local'
import Navbar from '../components/layout/Navbar'
import ChatbotIcon from '../components/layout/ChatbotIcon'

const borscha = localFont({
    src: [
        {
            path: '../../public/fonts/borscha/Borscha-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/borscha/Borscha-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/borscha/Borscha-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-borscha',
})

export const metadata = {
    title: 'Dreamaker Productions',
    description: 'Crafting Epic Masterpieces. Global visionary in cinematic storytelling.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${borscha.variable} bg-black text-white antialiased`}>
                <Navbar />
                {children}
                <ChatbotIcon />
            </body>
        </html>
    )
}
