import './globals.css'
import localFont from 'next/font/local'
import Navbar from '../components/layout/Navbar'
import ChatbotIcon from '../components/layout/ChatbotIcon'

const neueKabel = localFont({
    src: [
        {
            path: '../../public/fonts/fonts/fonnts.com-Neue_Kabel_Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/fonts/fonnts.com-Neue_Kabel_Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/fonts/fonnts.com-Neue_Kabel_ExtraBold.otf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-neue-kabel',
    display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://dreamakerproductions.ma'),
  title: {
    template: '%s | Dreamaker Productions Morocco',
    default: 'Dreamaker Productions | Premier Film Production Services in Morocco',
  },
  description: 'World-class film production services, line producing, fully equipped green screen soundstages, and custom fabrication in Marrakech, Morocco. Maximize your budget with our 20% Cash Rebate.',
  keywords: ['Film production Morocco', 'Line producer Marrakech', 'Film tax rebate Morocco', 'Soundstages Africa', 'Film Fixer in Morocco', 'Movie production services Marrakech', 'Oasis Studios Morocco'],
  openGraph: {
    title: 'Dreamaker Productions | Premier Film Production in Morocco',
    description: 'Providing uncompromising technical environments and world-class production services for global networks and blockbusters.',
    url: 'https://dreamakerproductions.ma', 
    siteName: 'Dreamaker Productions',
    images: [
      {
        url: '/works/posters/aazaan.png', 
        width: 1200,
        height: 630,
        alt: 'Dreamaker Productions Morocco',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${neueKabel.variable} ${neueKabel.className} font-sans bg-black text-white antialiased`}>
                <Navbar />
                {children}
                <ChatbotIcon />
            </body>
        </html>
    )
}
