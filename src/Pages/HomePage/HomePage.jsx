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
        <GallerySection categoriesContainer={"xlg:ml-20"} section={"bg-white"} categoryBtnActive={"bg-gray-200 border border-gray-200"} categoryButton={"border border-gray-200"}></GallerySection>
        <PriceSection></PriceSection>
        <ReviewSection></ReviewSection>
        <FAQ></FAQ>
        <ContactsSection></ContactsSection>
    </>
);
};

export default HomePage;