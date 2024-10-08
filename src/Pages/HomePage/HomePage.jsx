import HeroSection from "./components/HeroSection/HeroSection";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection";
import GallerySection from "./components/GallerySection/GallerySection";
import PriceSection from "./components/PriceSection/PriceSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import FAQ from "./components/FAQ/FAQ";
import ContactsSection from "./components/ContactsSection/ContactsSection";

const HomePage = () => {
return (
    <>
        <HeroSection></HeroSection>
        <IntroductionSection></IntroductionSection>
        <GallerySection></GallerySection>
        <PriceSection></PriceSection>
        <ReviewSection></ReviewSection>
        <FAQ></FAQ>
        <ContactsSection></ContactsSection>
    </>
);
};

export default HomePage;