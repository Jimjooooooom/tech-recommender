import { useEffect } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }) {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="mermaid">
      {chart}
    </div>
  );
}
