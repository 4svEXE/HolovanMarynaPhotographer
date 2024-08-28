import { Suspense } from "react";
import { Routes,Route } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import HomePage from "Pages/HomePage/HomePage";

export default function App() {
  return (
    <>
    <Layout>
      <HomePage></HomePage>
    </Layout>
    </>
  );
}
