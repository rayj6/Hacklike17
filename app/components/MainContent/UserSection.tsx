import Image from "next/image";
export default function UserSection() {
  return (
    <div id="UserSection">
      <div id="AvatarContainer">
        <Image
          width={150}
          height={150}
          alt=""
          src="/assets/Icon/fill/Avatar.png"
        />
      </div>
      <div id="InfoContainer">
        <div id="FirstSection">
          <div id="FirstSection-info">
            <p id="Username">Username</p>
            <p id="Email">example@gmail.com</p>
          </div>

          <div id="FirstSection-amount">
            <Image
              width={20}
              height={20}
              alt=""
              src="/assets/Icon/Outline/wallet.png"
            />
            <p>1.234.567₫</p>
          </div>
        </div>

        <div id="SecondSection">
          <div id="SecondSection-info">
            <Image
              width={14}
              height={14}
              alt=""
              src="/assets/Icon/Outline/money.png"
            />
            <p>Nạp trong tháng</p>
          </div>
          <div id="SecondSection-amount">1.234.567₫</div>
        </div>

        <div id="ThirdSection">
          <div id="ThirdSection-info">
            <Image
              width={14}
              height={14}
              alt=""
              src="/assets/Icon/Outline/level.png"
            />
            <p>Cấp bậc</p>
          </div>
          <div id="ThirdSection-type">Thành Viên</div>
        </div>

        {/* LoadBar */}
        <div className="progress-bar">
          <div className="progress-filler" style={{ width: "45%" }}></div>
        </div>
        <p id="Note">Nạp thêm 500.000đ để thăng hạng Cộng tác viên.</p>
      </div>
    </div>
  );
}
