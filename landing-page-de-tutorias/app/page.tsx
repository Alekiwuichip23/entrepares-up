import { CtaSection } from '@/components/landing/cta-section'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Modalities } from '@/components/landing/modalities'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Modalities />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
