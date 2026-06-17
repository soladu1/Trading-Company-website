import React, { useState } from "react";
import "./Agent.css";

const STATIC_QA = [
  {
    q: "what do you sell",
    a: "Serenta Trading offers industrial machinery, laboratory equipment, smart city infrastructure, solar & electrical systems, raw materials, finished products, and turnkey supply solutions for commercial and industrial customers.",
  },
  {
    q: "service offerings",
    a: "Our solutions include sourcing and supplying heavy machinery, automation equipment, lab instruments, solar panels, electrical distribution systems, smart poles, and reliable raw materials with global logistics support.",
  },
  {
    q: "where are you located",
    a: "Our headquarters is in Dubai, UAE, and we support customers across Africa, Asia, Europe, the Middle East, the Americas, and Australia through regional partnerships and international shipping.",
  },
  {
    q: "how to contact",
    a: "Reach us at info@serentatrading.com or use the contact form on the Contact page for inquiries, quotations, or technical support.",
  },
  {
    q: "what industries do you serve",
    a: "We serve manufacturing, energy, infrastructure, construction, laboratories, smart cities, agriculture, and import/export businesses with tailored equipment and material supply.",
  },
];

function findStaticAnswer(text) {
  const t = text.toLowerCase();
  for (const item of STATIC_QA) {
    if (t.includes(item.q)) return item.a;
  }

  if (t.includes("price") || t.includes("cost") || t.includes("quote")) {
    return "For pricing or quotes please provide product details and required quantities; our sales team will follow up.";
  }

  if (
    t.includes("support") ||
    t.includes("warranty") ||
    t.includes("service")
  ) {
    return "We provide after-sales support and service agreements. Please describe the product and issue.";
  }

  return "Thanks for your question! Please email info@serentatrading.com for specific details.";
}

const Agent = ({ float = false }) => {
  const [messages, setMessages] = useState([
    {
      from: "agent",
      text: "Hello, I am the Serenta assistant. I can help you with product sourcing, service details, shipping, procurement, and support for our full trading portfolio.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(float ? false : true);

  const send = async () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");

    const staticReply = findStaticAnswer(userText);
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "agent", text: staticReply }]);
      setLoading(false);
    }, 600);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const clearHistory = () => {
    setMessages([
      {
        from: "agent",
        text: "Hello, I am the Serenta assistant. I can help you with product sourcing, service details, shipping, procurement, and support for our full trading portfolio.",
      },
    ]);
  };

  if (float && !isOpen) {
    return (
      <div
        className="agent-fab-pill"
        onClick={() => setIsOpen(true)}
        aria-label="Open Serenta chat"
      >
        <div className="fab-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
              fill="white"
            />
          </svg>
        </div>
        <div className="fab-label">Serenta Agent</div>
        <div className="fab-arrow">▴</div>
      </div>
    );
  }

  return (
    <div className={`agent-widget ${float ? "agent-floating" : ""}`}>
      <div className="agent-header">
        <div className="agent-title">
          <span className="online-dot" />
          <div>
            <h3>Serenta Assistant</h3>
            <div className="status">Online</div>
          </div>
        </div>
        <div className="agent-controls">
          {float && (
            <button
              onClick={() => setIsOpen(false)}
              className="small close-btn"
              aria-label="Minimize"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="agent-body">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>
            <div className="msg-text">{m.text}</div>
          </div>
        ))}

        {loading && (
          <div className="msg agent">
            <div className="msg-text">Typing...</div>
          </div>
        )}

        <div className="clear-history">
          <button onClick={clearHistory} className="clear-history-btn">
            🗑️ Clear previous chat history
          </button>
        </div>
      </div>

      <div className="agent-input">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          onFocus={() => setIsOpen(true)}
        />
        <button onClick={send} className="send-btn" aria-label="Send">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="#fff" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Agent;
