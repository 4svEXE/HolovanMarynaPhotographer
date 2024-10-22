import { Suspense } from "react";
import { Routes,Route } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import HomePage from "Pages/HomePage/HomePage";
import PortfolioPage from "Pages/PortfolioPage/PortfolioPage";

export default function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="HolovanMarynaPhotographer/" element={<HomePage/>}/>
        <Route path="HolovanMarynaPhotographer/portfolio" element={<PortfolioPage/>}/>
      </Routes>
    </Layout>
    </>
  );
}
