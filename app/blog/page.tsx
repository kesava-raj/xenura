import Link from "next/link";

const BLOG_POSTS = [
  {
    slug: "future-of-llms",
    category: "AI & NLP",
    title: "The Future of LLMs in Enterprise Logic",
    desc: "Why wrapping APIs is no longer enough, and how fine-tuning offers compounding returns on automation.",
    date: "March 15, 2026",
    readTime: "8 min read",
    icon: "🤖"
  },
  {
    slug: "migrating-to-iceberg",
    category: "Data Eng",
    title: "Migrating to Iceberg with Zero Downtime",
    desc: "A technical walkthrough of how we moved a massive petabyte scale data warehouse using Apache Iceberg.",
    date: "March 10, 2026",
    readTime: "12 min read",
    icon: "❄️"
  },
  {
    slug: "serverless-performance",
    category: "Architecture",
    title: "Serverless Computing: Peak Performance?",
    desc: "Evaluating the actual cost models of deploying scalable microservices to AWS Lambda vs pure K8s clusters.",
    date: "March 05, 2026",
    readTime: "10 min read",
    icon: "☁️"
  }
];

export default function Blog() {
  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "60vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb1"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal visible">
            <div className="section-tag">Resources</div>
            <h1 className="hero-h1" style={{ fontSize: "clamp(42px, 8vw, 100px)", marginBottom: "24px" }}>
              <span className="line1">Engineering</span>
              <span className="accent-word">Insights</span>
            </h1>
            <p className="hero-sub" style={{ margin: "0", maxWidth: "600px" }}>
              Technical deep-dives, industry analysis, and methodology from the front lines of digital engineering.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner">
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "24px" }}>
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div className="ind-card reveal visible" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <div className="section-tag" style={{ margin: 0 }}>{post.category}</div>
                    <span style={{ fontSize: "24px" }}>{post.icon}</span>
                  </div>
                  <h3 className="ind-name" style={{ fontSize: "24px", marginBottom: "16px", lineHeight: "1.3" }}>{post.title}</h3>
                  <p className="ind-desc" style={{ marginBottom: "24px", flex: 1 }}>{post.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid var(--border)", paddingTop: "20px", marginTop: "auto" }}>
                    <span className="cat-tag" style={{ border: "none", padding: 0 }}>{post.date}</span>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--muted)" }}></div>
                    <span className="cat-tag" style={{ border: "none", padding: 0 }}>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
