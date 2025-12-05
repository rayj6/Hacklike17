export default function SocialService() {
  return (
    <div id="ServiceContainer">
      {/* Title */}
      <div id="TitleContainer">
        <div className="HighLight" />
        <p>Dịch Vụ Mạng Xã Hội</p>
      </div>
      {/* Row */}
      <div className="row">
        <div className="form-group">
          <label>Nền tảng</label>
          <select>
            <option>Facebook</option>
          </select>
        </div>
        <div className="form-group">
          <label>Dịch vụ</label>
          <select>
            <option>Tăng Like Bài Viết</option>
          </select>
        </div>
      </div>
      {/* Link */}
      <div className="Link">
        <label>Link:</label>
        <input type="text" placeholder="Nhập link bài viết" />
        <div className="toggle-group">
          <input
            type="checkbox"
            id="multi-order-toggle"
            className="toggle-checkbox"
            checked
          />

          <label htmlFor="multi-order-toggle" className="toggle-label"></label>
          <span className="toggle-text">Mua nhiều đơn cùng lúc</span>
        </div>
      </div>
    </div>
  );
}
