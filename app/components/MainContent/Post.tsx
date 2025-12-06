import Image from "next/image";

export default function Post() {
  return (
    <div id="PostContainer">
      <div id="PersonalInfo">
        <div id="PersonAvatar">
          <Image
            width={50}
            height={50}
            alt=""
            src="/assets/Icon/fill/admin.png"
          />
        </div>
        <div id="PersonRole">
          <p id="Role">Quản Trị Viên</p>
          <div id="DisplayDate">
            <Image
              className="icon"
              width={16}
              height={16}
              alt=""
              src="/assets/Icon/Outline/clock.png"
            />
            <p id="Date">2025-05-04 21:14:27</p>
          </div>
        </div>
      </div>

      <div id="PostText">
        <p>
          KHUYẾN MÃI HALLOWEEN – NẠP TIỀN NHẬN THÊM 10%  ⏰ Thời gian: Từ 10h00
          ngày 31/10 đến 23h00 ngày 02/11
        </p>
      </div>

      <div id="PostImageContainer">
        <Image
          width={400}
          height={400}
          alt=""
          src="/assets/background/postImage.png"
        />
      </div>
    </div>
  );
}
