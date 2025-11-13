"use client";

import { useEffect, useRef } from "react";

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Code characters to display
    const codeSnippets = [
      "const", "function", "return", "import", "export", "class", "=>", 
      "{}", "[]", "()", "if", "else", "for", "while", "async", "await",
      "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS",
      "0", "1", "</>", "===", "!==", "&&", "||", "...", "?", ":",
    ];

    // Column configuration
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    const speeds: number[] = Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.3);

    // Animation function
    const draw = () => {
      // Semi-transparent black for fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random code snippet
        const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Create gradient effect - brighter at the front
        const opacity = Math.min(1, drops[i] / 20);
        ctx.fillStyle = `rgba(30, 30, 30, ${opacity})`;
        
        // Draw the text
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y coordinate with variable speed
        drops[i] += speeds[i];
      }
    };

    // Animation loop
    const intervalId = setInterval(draw, 50);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10"
      style={{ zIndex: 0 }}
    />
  );
}
