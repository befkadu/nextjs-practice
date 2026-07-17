"use client";
import { useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState(0);

  return (
    <div
      style={{
        padding: "60px",
        fontFamily: "sans-serif",
        textAlign: "center",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#1a365d" }}>🚀 My Next.js Playground</h1>
      <p style={{ margin: "20px 0", fontSize: "1.2rem", color: "#4a5568" }}>
        You have clicked the button <strong>{clicks}</strong> times!
      </p>

      <button
        onClick={() => setClicks(clicks + 1)}
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          backgroundColor: "#3182ce",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Click Me!
      </button>
    </div>
  );
}
