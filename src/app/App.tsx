import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainFooter } from "../widgets/mainFooter/MainFooter";
import { ArticlePage } from "../pages/articlePage/ArticlePage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { DisclaimerPage } from "../pages/disclaimerPage/DisclaimerPage";
import { PrivacyPage } from "../pages/privacyPage/PrivacyPage";
import { ContactsPage } from "../pages/contactsPage/ContactsPage";
import { ScrollToTop } from "./providers/ScrollToTop";
import HomePage from "../pages/home/ui/HomePage";
import "../index.css";
import Header from "../widgets/header";
import Footer from "../widgets/footer/Footer";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};
