import HeroSection from '../components/sections/HeroSection'
import WhoWeAre from '../components/sections/WhoWeAre'
import EmmySection from '../components/sections/EmmySection'
import Services from '../components/sections/Services'
import SpecialtyAssets from '../components/sections/SpecialtyAssets'
import SelectedCredits from '../components/sections/SelectedCredits'
import WhyMorocco from '../components/sections/WhyMorocco'
import Footer from '../components/layout/Footer'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WhoWeAre />
            <Services />
            <EmmySection />
            <SpecialtyAssets />
            <WhyMorocco />
            <SelectedCredits />
            <Footer />
        </main>
    )
}
