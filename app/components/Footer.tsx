import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-dot"></span>XENURA
          </div>
          <p>
            Engineering intelligent systems for the companies building
            tomorrow. AI · Data · Cloud · Product.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link href="/services/artificial-intelligence">Artificial Intelligence</Link>
          <Link href="/services/data-engineering">Data Engineering</Link>
          <Link href="/services/digital-analytics">Digital Analytics</Link>
          <Link href="/services/product-engineering">Product Engineering</Link>
          <Link href="/services/cloud-devops">Cloud & DevOps</Link>
        </div>
        <div className="footer-col">
          <h4>Industries</h4>
          <Link href="/case-studies">E-Commerce</Link>
          <Link href="/case-studies">Fintech</Link>
          <Link href="/case-studies">Healthcare</Link>
          <Link href="/case-studies">EdTech</Link>
          <Link href="/case-studies">SaaS Startups</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/#about">About Us</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 XENURA. ALL RIGHTS RESERVED.</p>
        <p>ENGINEERED WITH PRECISION.</p>
      </div>
    </footer>
  );
}
