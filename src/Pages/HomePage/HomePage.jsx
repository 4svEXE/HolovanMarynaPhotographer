import HeroSection from "./components/HeroSection/HeroSection";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection";
import GallerySection from "./components/GallerySection/GallerySection";
import PriceSection from "./components/PriceSection/PriceSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";

const HomePage = () => {
return (
    <>
        <HeroSection></HeroSection>
        <IntroductionSection></IntroductionSection>
        <GallerySection></GallerySection>
        <PriceSection></PriceSection>
        <ReviewSection></ReviewSection>
    </>
);
};

export default HomePage;