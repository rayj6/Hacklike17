import {
  NavBarMenuComponents,
  NavBarServiceComponents,
} from "./NavBarElements";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div id="LogoCOntainer">
        <Image
          width={214.39}
          height={37.4}
          alt=""
          src="/assets/Icon/Logo/Logo.png"
        />
      </div>

      <div className="Splitter" />

      {/* Menu section */}
      <div id="MenuContainer">
        <p id="MenuTitle">Menu</p>
        {NavBarMenuComponents.map((element) => (
          <div key={element.id} id="ELementContainer">
            <div id="MenuImage">
              <Image
                className="icon"
                width={24}
                height={24}
                alt=""
                src={element.ImagePath}
              />
            </div>
            <div id="MenuTextElement">
              <p>{element.Category}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Splitter" />

      {/* Service section */}
      <div id="MenuContainer">
        <p id="MenuTitle">Danh sách dịch vụ</p>
        {NavBarServiceComponents.map((element) => (
          <div key={element.id} id="ELementContainer">
            <div id="MenuImage">
              <Image width={24} height={24} alt="" src={element.ImagePath} />
            </div>
            <div id="MenuTextElement">
              <p>{element.Category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
