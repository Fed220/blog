import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ArticlePage } from "../pages/articlePage/ArticlePage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { DisclaimerPage } from "../pages/disclaimerPage/DisclaimerPage";
import { PrivacyPage } from "../pages/privacyPage/PrivacyPage";
import { ContactsPage } from "../pages/contactsPage/ContactsPage";
import { MainHome } from "../pages/mainHome/ui/MainHome";
import HomePage from "../pages/home/ui/HomePage";

import { MainHeader } from "../widgets/mainHeader/MainHeader";
import { MainFooter } from "../widgets/mainFooter/MainFooter";

import Header from "../widgets/header";
import Footer from "../widgets/footer/Footer";

import { ScrollToTop } from "./providers/ScrollToTop";

import "../index.css";

// Layout для HomePage
const HomeLayout = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Header />

    <main style={{ flex: 1 }}>
      <HomePage />
    </main>

    <Footer />
  </div>
);

// Layout для остальных страниц
const MainLayout = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <MainHeader />

    <main style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>

    <MainFooter />
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/blog" element={<HomeLayout />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
