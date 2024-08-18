import React from "react";
import { useTranslation } from "react-i18next";

import TeamCarousel from "./components/TeamCarousel";

export default function Team() {
  const { t } = useTranslation();

  return (
    <div className="pt-20 flex flex-col items-center h-max bg-black dark:bg-black">
      <h2 className="text-white p-20">{t([`homepage.Team.title`])}</h2>

      <TeamCarousel />
    </div>
  );
}
