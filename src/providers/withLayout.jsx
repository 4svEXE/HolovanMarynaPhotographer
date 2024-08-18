import Header from "components/layouts/header";
import ButtonToUp from "components/shared/buttonToUp/ButtonToUp";
import Footer from "components/layouts/footer";

export default function WithLayout({ children, toggleTheme }) {
  return (
    <div className="bg-white dark:bg-black h-[100vh]">

      <Header toggleTheme={toggleTheme} />

      {children}

      <ButtonToUp />

      <Footer />
    </div>
  );
}
