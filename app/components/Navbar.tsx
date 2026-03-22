"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar">
      <Link href="/#home" className="logo">
        <span className="logo-dot"></span>
        XENURA
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/#home">Home</Link>
        </li>
        <li>
          <Link href="/#about">About Us</Link>
        </li>
        <li>
          <Link href="/#services">
            Services <span className="chevron">▼</span>
          </Link>
          <div className="dropdown">
            <Link href="/services/artificial-intelligence">Artificial Intelligence</Link>
            <Link href="/services/data-engineering">Data Engineering</Link>
            <Link href="/services/digital-analytics">Digital Analytics</Link>
            <Link href="/services/product-engineering">Product Engineering</Link>
            <Link href="/services/cloud-devops">Cloud & DevOps</Link>
          </div>
        </li>
        <li>
          <Link href="/#solutions">Solutions</Link>
        </li>
        <li>
          <Link href="/#industries">
            Industries <span className="chevron">▼</span>
          </Link>
          <div className="dropdown">
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </li>
        <li>
          <Link href="/careers">Careers</Link>
        </li>
      </ul>
      <Link href="/#contact" className="nav-cta">
        Get in Touch
      </Link>
    </nav>
  );
}
