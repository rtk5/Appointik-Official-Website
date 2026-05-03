"use client";

import { useEffect, useRef } from "react";

export default function Demo() {
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("/demo.html")
      .then((res) => res.text())
      .then((html) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = html;

          // Re-run scripts manually
          const scripts = containerRef.current.querySelectorAll("script");
          scripts.forEach((oldScript) => {
            const newScript = document.createElement("script");
            newScript.textContent = oldScript.textContent;
            document.body.appendChild(newScript);
          });
        }
      });
  }, []);

  return <div ref={containerRef} />;
}
