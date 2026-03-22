"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
      <Link href="/#home" className="logo" onClick={closeMobileMenu}>
        <span className="logo-dot"></span>
        XENURA
      </Link>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link href="/#home" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li>
          <Link href="/#about" onClick={closeMobileMenu}>About Us</Link>
        </li>
        <li>
          <div className="nav-item-with-dropdown">
            <Link href="/#services" onClick={closeMobileMenu}>
              Services <span className="chevron">▼</span>
            </Link>
            <div className="dropdown">
              <Link href="/services/artificial-intelligence" onClick={closeMobileMenu}>Artificial Intelligence</Link>
              <Link href="/services/data-engineering" onClick={closeMobileMenu}>Data Engineering</Link>
              <Link href="/services/digital-analytics" onClick={closeMobileMenu}>Digital Analytics</Link>
              <Link href="/services/product-engineering" onClick={closeMobileMenu}>Product Engineering</Link>
              <Link href="/services/cloud-devops" onClick={closeMobileMenu}>Cloud & DevOps</Link>
            </div>
          </div>
        </li>
        <li>
          <Link href="/#solutions" onClick={closeMobileMenu}>Solutions</Link>
        </li>
        <li>
          <div className="nav-item-with-dropdown">
            <Link href="/#industries" onClick={closeMobileMenu}>
              Industries <span className="chevron">▼</span>
            </Link>
            <div className="dropdown">
              <Link href="/case-studies" onClick={closeMobileMenu}>Case Studies</Link>
              <Link href="/blog" onClick={closeMobileMenu}>Blog</Link>
            </div>
          </div>
        </li>
        <li>
          <Link href="/careers" onClick={closeMobileMenu}>Careers</Link>
        </li>
        <li className="mobile-only">
          <Link href="/#contact" className="nav-cta" onClick={closeMobileMenu}>
            Get in Touch
          </Link>
        </li>
      </ul>

      <Link href="/#contact" className="nav-cta desktop-only">
        Get in Touch
      </Link>

      <button
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
