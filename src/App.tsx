import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import WhoWeAre from './components/sections/WhoWeAre'
import EmmySection from './components/sections/EmmySection'
import Services from './components/sections/Services'
import SpecialtyAssets from './components/sections/SpecialtyAssets'
import SelectedCredits from './components/sections/SelectedCredits'
import WhyMorocco from './components/sections/WhyMorocco'
import Founder from './components/sections/Founder'
import Footer from './components/layout/Footer'
import LocationsPage from './app/locations/page'
import ChatbotIcon from './components/layout/ChatbotIcon'

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handleLocationChange = () => setCurrentPath(window.location.pathname)
        window.addEventListener('popstate', handleLocationChange)
        return () => window.removeEventListener('popstate', handleLocationChange)
    }, [])

    if (currentPath === '/locations') {
        return <LocationsPage />
    }

    return (
        <div className="min-h-screen text-white selection:bg-white selection:text-black">
            <Navbar />
            <main>
                <HeroSection />
                <WhoWeAre />
                <Services />
                <EmmySection />
                <SpecialtyAssets />
                <WhyMorocco />
                <SelectedCredits />
            </main>
            <Footer />
            <ChatbotIcon />
        </div>
    )
}

export default App
