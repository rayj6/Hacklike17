export default function Notification() {
  return (
    <div className="notification-widget">
      <div className="header">
        <div className="header-left">
          <div className="blue-bar"></div>
          <h2 className="header-title">Hoạt động mới</h2>
        </div>
        {/* <label className="filter-checkbox">
            <input type="checkbox" />
            <span>Lọc thông báo quan trọng</span>
          </label> */}
      </div>

      <div className="notifications-list">
        <div className="notification-item">
          <div className="date-column">16/11</div>
          <div className="content-column">
            <div className="notification-dot"></div>
            <div className="notification-text">
              Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"),
              tôi thiếu mua 300k like, không giới hạn loại fanpage.
            </div>
          </div>
        </div>

        <div className="notification-item">
          <div className="date-column">16/11</div>
          <div className="content-column">
            <div className="notification-dot"></div>
            <div className="notification-text">
              Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"),
              tôi thiếu mua 300k like, không giới hạn loại fanpage.
            </div>
          </div>
        </div>

        <div className="notification-item">
          <div className="date-column">16/11</div>
          <div className="content-column">
            <div className="notification-dot"></div>
            <div className="notification-text">
              Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"),
              tôi thiếu mua 300k like, không giới hạn loại fanpage.
            </div>
          </div>
        </div>

        <div className="notification-item">
          <div className="date-column">16/11</div>
          <div className="content-column">
            <div className="notification-dot"></div>
            <div className="notification-text">
              Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"),
              tôi thiếu mua 300k like, không giới hạn loại fanpage.
            </div>
          </div>
        </div>

        <div className="notification-item">
          <div className="date-column">16/11</div>
          <div className="content-column">
            <div className="notification-dot"></div>
            <div className="notification-text">
              Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"),
              tôi thiếu mua 300k like, không giới hạn loại fanpage.
            </div>
          </div>
        </div>

        <div className="notification-item">
          <div className="date-column">16/11</div>
          <div className="content-column">
            <div className="notification-dot"></div>
            <div className="notification-text">
              Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"),
              tôi thiếu mua 300k like, không giới hạn loại fanpage.
            </div>
          </div>
        </div>

        <div className="notification-item read">
          <div className="date-column">16/11</div>
          <div className="content-column">
            <div className="notification-dot read"></div>
            <div className="notification-text">
              Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"),
              tôi thiếu mua 300k like, không giới hạn loại fanpage.
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="view-all-btn">Xem tất cả thông báo</button>
      </div>
    </div>
  );
}
