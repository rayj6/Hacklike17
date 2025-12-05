import Image from "next/image";
export default function Support() {
  return (
    <div className="support-container">
      <div className="support-header">
        <div className="header-icon"></div>
        <h2>Bạn cần hỗ trợ?</h2>
      </div>

      <div className="support-links">
        <a href="#" className="support-link facebook">
          <div className="icon-wrapper">
            <Image
              width={32}
              height={32}
              src="/assets/Icon/fill/facebook.png"
              alt="Facebook"
            />
          </div>
          <span className="link-text">Fanpage Hỗ trợ</span>
        </a>

        <a href="#" className="support-link zalo">
          <div className="icon-wrapper">
            <Image
              width={32}
              height={32}
              src="/assets/Icon/fill/zalo.png"
              alt="Zalo"
            />
          </div>
          <span className="link-text">ZALO Hỗ trợ</span>
        </a>

        <a href="#" className="support-link telegram">
          <div className="icon-wrapper">
            <Image
              width={32}
              height={32}
              src="/assets/Icon/fill/telegram.png"
              alt="Telegram"
            />
          </div>
          <span className="link-text">Liên Kết Telegram</span>
        </a>

        <a href="#" className="support-link youtube">
          <div className="icon-wrapper">
            <Image
              width={32}
              height={32}
              src="/assets/Icon/fill/youtube.png"
              alt="Youtube"
            />
          </div>
          <span className="link-text">Youtube HDSD</span>
        </a>
      </div>
    </div>
  );
}
