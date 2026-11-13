import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainHeader } from "../widgets/mainHeader/MainHeader";
import { MainFooter } from "../widgets/mainFooter/MainFooter";
import { MainHome } from "../pages/mainHome/ui/MainHome";
import { ArticlePage } from "../pages/articlePage/ArticlePage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { DisclaimerPage } from "../pages/disclaimerPage/DisclaimerPage";
import { PrivacyPage } from "../pages/privacyPage/PrivacyPage";
import { ContactsPage } from "../pages/contactsPage/ContactsPage";
import { ScrollToTop } from "./providers/ScrollToTop";
import "../index.css";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <MainHeader />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <MainFooter />
      </div>
    </BrowserRouter>
  );
};
