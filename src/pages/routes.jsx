import { useRoutes } from "react-router-dom";

import HomePage from "./home/home";
import CasesPage from "./gallery/gallery";
import P404 from "./404/404";

const routesMap = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cases",
    element: <CasesPage />,
  },
  {
    path: "*",
    element: <P404 />,
  },
];

const Routes = () => useRoutes(routesMap);

export default Routes;
