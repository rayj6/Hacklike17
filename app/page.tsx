"use client";

import "./styles/Home.css";
import Image from "next/image";
import { useState } from "react";

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

// Simple component for the bottom bar item for demonstration
const BottomBarItem = ({ icon, text, active }: any) => (
  <div className={`BottomBarItem ${active ? "active" : ""}`}>
    <span className="icon">{icon}</span>
    <span className="text">{text}</span>
  </div>
);

export default function Home() {
  const [Balance, setBalance] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="AppContainer">
      {/* NavBar */}
      <NavBar />

      {/* TopBar */}
      <TopBar
        Balance={Balance}
        isDarkMode={isDarkMode}
        handleToggleDarkMode={handleToggleDarkMode}
      />

      {/* MainContent */}
      <div className="Main">
        {/* 1. Left Column: Top Content (User, Alert, Social) */}
        <div className="MainContent">
          <UserSection />
          <AlertSection />
          <SocialService />
        </div>

        {/* 2. Right Column: Side Content (Notification, Support, FAQ, Usage) */}
        <div className="SideContent">
          <Notification />
          <Support />
          <FAQ />
          <Usage />
        </div>

        {/* 3. NEW: Posts, separated for mobile reordering */}
        <div className="PostsWrapper">
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar (as seen in the design image) */}
      <div className="BottomBar">
        <BottomBarItem icon="🏠" text="Trang chủ" active={true} />
        <BottomBarItem icon="💳" text="Nạp tiền" active={false} />
        <BottomBarItem icon="📣" text="Hịch vụ" active={false} />
        <BottomBarItem icon="📜" text="Lịch sử" active={false} />
      </div>
    </div>
  );
}
