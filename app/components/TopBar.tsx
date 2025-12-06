import Image from "next/image";

interface TopBarProps {
  Balance: number;
  isDarkMode: boolean;
  handleToggleDarkMode: () => void;
}

export default function TopBar({
  Balance,
  isDarkMode,
  handleToggleDarkMode,
}: TopBarProps) {
  return (
    <div className="TopBar">
      {/* SearchBar */}
      <div id="SearchBar">
        <Image
          className="icon"
          width={16}
          height={16}
          alt=""
          src="/assets/Icon/Outline/download.png"
        />
        <input placeholder="Search" />
      </div>

      {/* Toggle theme */}
      <div id="ToggleTheme">
        <div
          id={isDarkMode ? "Theme" : "Theme-on"}
          onClick={handleToggleDarkMode}
        >
          <Image
            className="icon"
            width={16}
            height={16}
            alt=""
            src="/assets/Icon/Outline/sun.png"
          />
          <p>Sáng</p>
        </div>

        <div
          id={isDarkMode ? "Theme-on" : "Theme"}
          onClick={handleToggleDarkMode}
        >
          <Image
            className="icon"
            width={16}
            height={16}
            alt=""
            src="/assets/Icon/Outline/moon.png"
          />
          <p>Tối</p>
        </div>
      </div>

      {/* Language selection */}
      <div className="select-container">
        <select className="language-select">
          <option defaultValue="vi" disabled hidden>
            Tiếng Việt
          </option>
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
        <span className="dropdown-arrow"></span>
      </div>

      {/* Mail&Alert */}
      <div id="NavButtons">
        <button>
          <Image
            className="icon"
            width={24}
            height={24}
            alt=""
            src="/assets/Icon/Outline/Message.png"
          />
        </button>

        <button>
          <Image
            className="icon"
            width={17}
            height={20}
            alt=""
            src="/assets/Icon/Outline/Notification.png"
          />
        </button>
      </div>

      {/* Personal Area */}
      <div id="PersonalArea">
        {/* Avatar */}
        <div id="Avatar">
          <Image
            width={36}
            height={36}
            alt=""
            src="/assets/Icon/fill/Avatar.png"
          />
        </div>
        {/* Name&Balance */}
        <div id="DisplayName">
          <p>Username</p>
          <p>Số dư: {Balance}₫</p>
        </div>
        {/* Open */}
        <button>
          <Image
            width={16}
            height={16}
            alt=""
            src="/assets/Icon/Outline/down.png"
          />
        </button>
      </div>
    </div>
  );
}
