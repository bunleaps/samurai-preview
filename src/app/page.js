import Hero from "./hero";
import WhyUs from "./why_us";
import TrustedPartners from "@/components/trusted_partners";
import Approach from "./approah";
import Solutions from "./solutions";
import WhyService from "./why_service";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <WhyUs />
        <Approach />
        <Solutions />
        <WhyService />
        <TrustedPartners />
      </div>
    </>
  );
}
