"use client";
import { useState } from "react";
import Image from "next/image";

export default function ResponsiveTopNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAV (<1200px) */}
      <div className="MobileTopNav">
        <div className="nav-left" onClick={() => setOpen(true)}>
          <Image
            src="/assets/Icon/Outline/menu.png"
            width={28}
            height={28}
            alt="menu"
          />
        </div>

        <div className="nav-center">
          <Image
            src="/assets/Icon/Logo/Logo.png"
            width={180}
            height={32}
            alt="logo"
          />
        </div>

        <div className="nav-right">
          <Image
            src="/assets/Icon/fill/avatar.png"
            width={28}
            height={28}
            alt="avatar"
          />
        </div>
      </div>

      {/* SLIDE-IN MENU */}
      <div
        className={`DrawerOverlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      <div className={`DrawerMenu ${open ? "open" : ""}`}>
        {/* Put your nav items here */}
        <ul>
          <li>Trang chủ</li>
          <li>Nạp tiền</li>
          <li>Dịch vụ</li>
          <li>Lịch sử</li>
          <li>Cài đặt</li>
        </ul>
      </div>
    </>
  );
}
