"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // default: item 0 is open

  const faqList = [
    {
      question: "Tôi cần bảo hành?",
      answer:
        "Bạn đọc chủ ý, xem đơn có được bảo hành hay k? Nếu server có nút bảo hành thì chọn bảo hành, nếu không có thì inbox qua fanpage support.",
    },
    {
      question: "Tôi nạp tiền nhưng chưa nhận được!",
      answer:
        "Vui lòng liên hệ với bộ phận hỗ trợ để được giải quyết nhanh nhất.",
    },
    {
      question: "Dịch vụ mua không chạy?",
      answer:
        "Xin vui lòng kiểm tra lại thông tin dịch vụ và liên hệ support nếu có vấn đề.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-widget">
      <div className="faq-header">
        <div className="HighLight" />
        <h2>Câu hỏi thường gặp</h2>
      </div>

      {faqList.map((item, index) => (
        <div
          className={`faq-item ${openIndex === index ? "active" : ""}`}
          key={index}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            <span className="faq-question-text">{item.question}</span>
            <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
          </button>

          <div className="faq-answer">
            <div className="faq-answer-content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
