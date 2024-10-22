import GallerySection from "Pages/HomePage/components/GallerySection/GallerySection";
import ContactsSection from "Pages/HomePage/components/ContactsSection/ContactsSection";

const PortfolioPage = () => {
  return (
    <>
      <GallerySection
        categoriesContainer={"text-center"}
        categoriesList={"md:flex md:justify-center"}
        section={"pt-36 pb-36 xlg:pt-44"}
        categoryButton={"border-gray-200 bg-white"}
        categoryBtnActive={"bg-black text-white"}
      ></GallerySection>
      <ContactsSection></ContactsSection>
    </>
  );
};

export default PortfolioPage;
