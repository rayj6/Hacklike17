"use client";
import "./styles/Home.css";
import "./styles/Home-Darkmode.css";
import {
  Home,
  CreditCard,
  ShoppingBag,
  MessageSquare,
  FileText,
} from "lucide-react";

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
    <span className="icon">{icon}</span>
    <span className="text">{text}</span>
  </div>
);

export default function HomeSreen() {
  const [Balance, setBalance] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const NavItem = ({ id, icon: Icon, label, isActive }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`nav-item ${isActive ? "active" : ""}`}
    >
      <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
      <span>{label}</span>
    </button>
  );

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
          <div className="notification-widget-wrap">
            <Notification />
          </div>
          <div className="support-container-wrap">
            <Support />
          </div>
          <div className="faq-widget-wrap">
            <FAQ />
          </div>
          <div className="usage-container-wrap">
            <Usage />
          </div>
        </div>
        {/* Mobile only: posts move BELOW side content */}
        <div className="PostsMobile">
          <Post /> <Post /> <Post />
        </div>
      </div>
      {/* NEW MOBILE BOTTOM BAR */}
      <div className="BottomBar">
        <button
          className={`BottomBarItem ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
        >
          <Home size={20} />
          <span className="text">Trang chủ</span>
        </button>

        <button
          className={`BottomBarItem ${activeTab === "deposit" ? "active" : ""}`}
          onClick={() => setActiveTab("deposit")}
        >
          <CreditCard size={20} />
          <span className="text">Nạp tiền</span>
        </button>

        <div className="BottomBarCenter">
          <div className="CenterButton" onClick={() => setActiveTab("orders")}>
            <ShoppingBag size={26} />
          </div>
        </div>

        <button
          className={`BottomBarItem ${activeTab === "support" ? "active" : ""}`}
          onClick={() => setActiveTab("support")}
        >
          <MessageSquare size={20} />
          <span className="text">Hỗ trợ</span>
        </button>

        <button
          className={`BottomBarItem ${activeTab === "account" ? "active" : ""}`}
          onClick={() => setActiveTab("account")}
        >
          <FileText size={20} />
          <span className="text">Tài khoản</span>
        </button>
      </div>
    </div>
  );
}
