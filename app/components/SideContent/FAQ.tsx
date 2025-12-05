export default function FAQ() {
  return (
    <div className="faq-widget">
      <div className="faq-header">
        <div className="HighLight" />
        <h2>Câu hỏi thường gặp</h2>
      </div>

      <div className="faq-item active">
        <button className="faq-question">
          <span className="faq-question-text">Tôi cần bảo hành?</span>
          <span className="faq-icon">−</span>
        </button>
        <div className="faq-answer">
          <div className="faq-answer-content">
            Bạn đọc chủ ý, xem đơn có được bảo hành hay k? Nếu server có nút bảo
            hành thì chọn bảo hành, nếu không có thì inbox qua fanpage support.
          </div>
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question">
          <span className="faq-question-text">
            Tôi nạp tiền nhưng chưa nhận được!
          </span>
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-answer">
          <div className="faq-answer-content">
            Vui lòng liên hệ với bộ phận hỗ trợ để được giải quyết nhanh nhất.
          </div>
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question">
          <span className="faq-question-text">Dịch vụ mua không chay?</span>
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-answer">
          <div className="faq-answer-content">
            Xin vui lòng kiểm tra lại thông tin dịch vụ và liên hệ support nếu
            có vấn đề.
          </div>
        </div>
      </div>
    </div>
  );
}
