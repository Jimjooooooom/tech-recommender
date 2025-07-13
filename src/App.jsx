import { useState } from "react";
import Mermaid from "./Mermaid";

export default function App() {
  const [chart, setChart] = useState(`graph TD
  A[User Prompt] --> B{Analyze}
  B -->|Tool| C[OpenAI]
  B -->|Tool| D[Mistral]
  B -->|Tool| E[LangChain]
  C --> F[Recommendation]
  D --> F
  E --> F`);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🧠 Tech Recommender</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Describe your project idea..."
        onChange={(e) => {
          const userInput = e.target.value;
          // בהמשך נשלב API. לעת עתה: דוגמה סטטית
          setChart(`graph TD
          A[${userInput || "User Prompt"}] --> B{Analyze}
          B --> C[OpenRouter]
          C --> D[Mermaid.js]
          D --> E[Response]
          `);
        }}
      />
      <div style={{ marginTop: "2rem" }}>
        <Mermaid chart={chart} />
      </div>
    </div>
  );
}
