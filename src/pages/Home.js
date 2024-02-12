import HeroSection from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CustomerReviews from "../components/home/CustomerReviews";
import HowItWorks from "../components/home/HowItWorks";
import FinalCTASection from "../components/home/FinalCTASection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <CustomerReviews />
      <FinalCTASection />
    </>
  );
}

export default HomePage;
