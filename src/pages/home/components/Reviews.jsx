import { useTranslation } from "react-i18next";
import RevivesCarousel from "./components/RevivesCarousel";

export default function Revives() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center h-max bg-white dark:bg-black bg-opacity-25">
      <h2 className="text-black dark:text-white p-20">
        {t([`homepage.Revives.title`])}
      </h2>

      <RevivesCarousel />
    </div>
  );
}
