import BoostYourOnlinePresence from "@/components/BoostYourOnlinePresence/BoostYourOnlinePresence"
import ContactUs from "@/components/ContactUsSection/ContactUs"
import FrequentlyAskedQuestion from "@/components/Frequently Asked Question/FrequentlyAskedQuestion"
import HeroSection from "@/components/heroSection/HeroSection"
import DifferentSection from "@/components/howAreWeDifferent/DifferentSection"
import IncreaseROIToday from "@/components/IncreaseROItoday/IncreaseROIToday"
import Portfolio from "@/components/portfolioSection/Portfolio"

export default function Home() {
  return (
 <div className="flex flex-col mx-auto">
      <HeroSection/>
      <ContactUs/>
      <Portfolio/>
      <DifferentSection/>
      <BoostYourOnlinePresence/>
      <IncreaseROIToday/>
      <FrequentlyAskedQuestion/>
    </div> 
  );
}
