export default function Careers() {
  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "50vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb2"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag">Company</div>
          <h1 className="hero-h1" style={{ fontSize: "clamp(42px, 6vw, 80px)", marginBottom: "24px" }}>
            <span className="line1">Join the</span>
            <span className="accent-word">Collective</span>
          </h1>
          <p className="hero-sub" style={{ margin: "0", maxWidth: "600px" }}>
            We are always looking for driven engineers, data scientists, and strategists ready to build the next generation of scalable platforms.
          </p>
        </div>
      </section>
      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div style={{ background: "var(--card)", padding: "60px", borderRadius: "24px", border: "1px solid var(--border)", textAlign: "center" }}>
             <h2 className="section-h2" style={{ fontSize: "32px", marginBottom: "20px" }}>Open Positions</h2>
             <p className="section-desc" style={{ maxWidth: "100%", margin: "0 auto 40px" }}>
               Our remote-first infrastructure empowers you to do your best work from anywhere. We currently have openings across our frontend, backend, and machine learning verticals. Send your resume to our operational team.
             </p>
             <a href="mailto:careers@xenura.test" className="btn-primary" style={{ display: "inline-block" }}>
                Apply Now →
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
