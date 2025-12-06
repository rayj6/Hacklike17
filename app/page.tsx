"use client";
import "./styles/Home.css";
import "./styles/Home-Darkmode.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import UserSection from "./components/MainContent/UserSection";
import AlertSection from "./components/MainContent/AlertSection";
import SocialService from "./components/MainContent/SocialService";
import Post from "./components/MainContent/Post";
import Notification from "./components/SideContent/Notification";
import Support from "./components/SideContent/Support";
import FAQ from "./components/SideContent/FAQ";
import Usage from "./components/SideContent/Usage";
import ResponsiveTopNav from "./components/ResponsiveTopNav";

const BottomBarItem = ({ icon, text, active }: any) => (
  <div className={`BottomBarItem ${active ? "active" : ""}`}>
    <span className="icon">{icon}</span> <span className="text">{text}</span>
  </div>
);
export default function Home() {
  const [Balance, setBalance] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`AppContainer ${isDarkMode ? "dark-mode" : ""}`}>
      <NavBar />
      <ResponsiveTopNav />

      <TopBar
        Balance={Balance}
        isDarkMode={isDarkMode}
        handleToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      {/* MAIN AREA (Desktop = 2 columns, Mobile = stacked) */}
      <div className="Main">
        {/* LEFT COLUMN (Desktop) — MainContent */}
        <div className="MainContent">
          <UserSection /> <AlertSection /> <SocialService />
          {/* Desktop: posts stay here */}
          <div className="PostsDesktop">
            <Post /> <Post /> <Post />
          </div>
        </div>
        {/* RIGHT COLUMN — Side content */}
        <div className="SideContent">
          <div className="notification-widget">
            <Notification />
          </div>
          <div className="support-container">
            <Support />
          </div>
          <div className="faq-widget">
            <FAQ />
          </div>
          <div className="usage-container">
            <Usage />
          </div>
        </div>
        {/* Mobile only: posts move BELOW side content */}
        <div className="PostsMobile">
          <Post /> <Post /> <Post />
        </div>
      </div>
      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="BottomBar">
        <BottomBarItem icon="🏠" text="Trang chủ" active />
        <BottomBarItem icon="💳" text="Nạp tiền" />
        <BottomBarItem icon="📣" text="Dịch vụ" />
        <BottomBarItem icon="📜" text="Lịch sử" />
      </div>
    </div>
  );
}
