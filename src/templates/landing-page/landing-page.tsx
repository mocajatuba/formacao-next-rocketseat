import { CallToAction, CustomerStorySection, FeatureSection, HeroSection, SupporSection } from "@/templates/landing-page/sections"

export const LandingPage = () => {
  return (
      <article className="flex flex-col gap-10 md:gap-20">
          <HeroSection />
          <FeatureSection />
          <SupporSection />
          <CustomerStorySection />
          <CallToAction />
      </article>
  )
}
