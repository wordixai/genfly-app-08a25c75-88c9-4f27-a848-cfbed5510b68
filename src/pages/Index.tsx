import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import StatCards from "../components/StatCards"
import OnboardingSteps from "../components/OnboardingSteps"

const Index = () => {
  return (
    <div className="tabular-nums">
      <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
        <HeroSection />
        
        <div className="flex flex-col gap-8 md:gap-12">
          <StatCards />
        </div>

        <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
          <OnboardingSteps />
        </div>
      </div>
    </div>
  )
}

export default Index