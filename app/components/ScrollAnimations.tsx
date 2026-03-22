"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // REVEAL ON SCROLL
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeReveals = () => {
      const reveals = document.querySelectorAll(".reveal:not(.visible)");
      reveals.forEach((el) => observer.observe(el));
    };

    observeReveals();

    // Observe stats if on homepage
    let statsObserver: IntersectionObserver | null = null;
    if (pathname === "/" || pathname === "/#home") {
      const animateCounter = (el: Element, target: number, suffix = "") => {
        let start = 0;
        const dur = 1800;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / dur, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(step);
      };

      statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const nums = e.target.querySelectorAll(".stat-num");
              nums.forEach((n) => {
                const text = n.textContent || "";
                const num = parseInt(text, 10);
                const suffix = text.replace(num.toString(), "");
                animateCounter(n, num, suffix);
              });
              statsObserver?.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );

      const stats = document.querySelector(".hero-stats");
      if (stats) statsObserver.observe(stats);
    }

    return () => {
      observer.disconnect();
      statsObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
