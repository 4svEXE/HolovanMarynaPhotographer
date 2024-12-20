import { Routes,Route,Navigate } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import HomePage from "Pages/HomePage/HomePage";
import PortfolioPage from "Pages/PortfolioPage/PortfolioPage";

export default function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="HolovanMarynaPhotographer/home" element={<HomePage/>}/>
        <Route path="HolovanMarynaPhotographer/portfolio" element={<PortfolioPage/>}/>
        <Route path="HolovanMarynaPhotographer/" element={<Navigate to={"/HolovanMarynaPhotographer/home"} replace/>}/>
      </Routes>
    </Layout>
    </>
  );
}
