import CtaSection from '../components/landing/CtaSection'
import Hero from '../components/landing/Hero'
import HowItWorks from '../components/landing/HowItWorks'
import Modalities from '../components/landing/Modalities'
import SiteFooter from '../components/landing/SiteFooter'
import SiteHeader from '../components/landing/SiteHeader'

type LandingPageProps = {
  onEnter: (query?: string) => void
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader onEnter={() => onEnter()} />
      <main>
        <Hero onEnter={onEnter} />
        <HowItWorks />
        <Modalities />
        <CtaSection onEnter={() => onEnter()} />
      </main>
      <SiteFooter />
    </div>
  )
}
