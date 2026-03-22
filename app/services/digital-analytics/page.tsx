export default function DigitalAnalytics() {
  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "50vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb3"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag">Service</div>
          <h1 className="hero-h1" style={{ fontSize: "clamp(42px, 6vw, 80px)", marginBottom: "24px" }}>
            <span className="line1">Digital</span>
            <span className="accent-word">Analytics</span>
          </h1>
          <p className="hero-sub" style={{ margin: "0", maxWidth: "600px" }}>
            Advanced analytics, business intelligence dashboards, and data-driven strategies that turn metrics into sustainable growth.
          </p>
        </div>
      </section>
      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div style={{ background: "var(--card)", padding: "60px", borderRadius: "24px", border: "1px solid var(--border)" }}>
             <h2 className="section-h2" style={{ fontSize: "32px", marginBottom: "20px" }}>Data-Driven Precision</h2>
             <p className="section-desc" style={{ maxWidth: "100%", marginBottom: "40px" }}>
               Our team implements industry-leading visualization and analytics to unify fragmented organizational metrics. By developing custom dashboards, we equip management suites and marketing teams with real-time insight to act decisively in fluctuating markets.
             </p>
             <div className="about-pills">
                <span className="pill">Business Intelligence</span>
                <span className="pill">Custom Dashboards</span>
                <span className="pill">KPI Strategy</span>
                <span className="pill">Behavioral Tracking</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
