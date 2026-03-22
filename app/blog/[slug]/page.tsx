import Link from "next/link";
import { notFound } from "next/navigation";

const BLOG_POSTS = {
  "future-of-llms": {
    category: "AI & NLP",
    title: "The Future of LLMs in Enterprise Logic",
    desc: "Why wrapping APIs is no longer enough, and how fine-tuning offers compounding returns on automation.",
    date: "March 15, 2026",
    readTime: "8 min read",
    author: "Dr. Elena Vance — Head of AI Engineering",
    icon: "🤖",
    content: [
      {
        type: "p",
        text: "The initial excitement around Large Language Models (LLMs) was driven by their ability to generate human-like text from simple prompts. However, for enterprise-grade applications, the window for simple API wrapping is closing. True competitive advantage now lies in vertical integration: fine-tuning models on proprietary datasets and embedding them directly into specialized logical workflows."
      },
      {
        type: "h2",
        text: "Beyond Prompt Engineering"
      },
      {
        type: "p",
        text: "Prompt engineering is a vital horizontal skill, but it's ultimately limited by the base model's training data. For complex industries like Fintech or Healthcare, models must understand niche terminology and specific regulatory logic that generic checkpoints often skip."
      },
      {
        type: "p",
        text: "At Xenura, we've observed that fine-tuned Llama-3 and Mistral variants frequently outperform GPT-4 on narrow domains when RAG (Retrieval-Augmented Generation) is combined with specialized parameter-efficient fine-tuning (PEFT)."
      },
      {
        type: "h2",
        text: "Compounding Returns on Automation"
      },
      {
        type: "p",
        text: "The goal of AI in the enterprise isn't just to replace human labor—it's to augment logic. By building custom models, companies create an intellectual moat that becomes more valuable as more data flows through the system. This creates a feedback loop of continuous learning and improved accuracy."
      }
    ]
  },
  "migrating-to-iceberg": {
    category: "Data Eng",
    title: "Migrating to Iceberg with Zero Downtime",
    desc: "A technical walkthrough of how we moved a massive petabyte scale data warehouse using Apache Iceberg.",
    date: "March 10, 2026",
    readTime: "12 min read",
    author: "Marcus Thorne — Senior Data Architect",
    icon: "❄️",
    content: [
      {
        type: "p",
        text: "Scaling a modern data warehouse means overcoming the limitations of traditional file-based architectures. As our clients' datasets grew into the petabyte range, we faced significant performance degradation using standard Hive-based tables. The solution? Migrating the entire architecture to Apache Iceberg."
      },
      {
        type: "h2",
        text: "The Challenge of Petabyte Scale"
      },
      {
        type: "p",
        text: "When managing millions of small files across thousands of partitions, filesystem operations like listing directories become the primary bottleneck. Iceberg's metadata-first approach eliminates this by tracking full table snapshots, enabling much faster query planning and data skipping."
      },
      {
        type: "h2",
        text: "No Window for Error"
      },
      {
        type: "p",
        text: "The project's primary constraint was a absolute zero-downtime requirement. We achieved this through a 'mirror and swap' strategy: duplicating active ingestion streams to Iceberg tables and running validation suites in parallel before executing a metadata-level switch for the downstream query layer."
      }
    ]
  },
  "serverless-performance": {
    category: "Architecture",
    title: "Serverless Computing: Peak Performance?",
    desc: "Evaluating the actual cost models of deploying scalable microservices to AWS Lambda vs pure K8s clusters.",
    date: "March 05, 2026",
    readTime: "10 min read",
    author: "Sarah Jenaro — Director of Cloud Operations",
    icon: "☁️",
    content: [
      {
        type: "p",
        text: "The promise of serverless computing is zero operational overhead and infinite scale. But for high-traffic enterprise applications, the reality is often more complex. This article breaks down the performance trade-offs and cost curves of AWS Lambda versus managed Kubernetes (EKS)."
      },
      {
        type: "h2",
        text: "Cold Starts and Concurrency"
      },
      {
        type: "p",
        text: "For latency-sensitive applications, cold starts remain a persistent challenge in serverless environments. While provisioned concurrency solves this, it significantly alters the cost equation. In our tests, we found that services with highly predictable, constant traffic often achieve 30-40% lower TCO on optimized EKS clusters compared to purely serverless models."
      },
      {
        type: "h2",
        text: "Choosing the Right Layer"
      },
      {
        type: "p",
        text: "The decision shouldn't be binary. At Xenura, we leverage a hybrid approach: using Lambda for event-driven, intermittent tasks while keeping high-throughput API gateways and core logic on containerized autoscaling groups. This delivers the best balance of flexibility and cost-efficiency."
      }
    ]
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

  if (!post) {
    notFound();
  }

  return (
    <main>
      <section style={{ paddingTop: "150px", minHeight: "60vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-orb orb2"></div>
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="reveal visible">
            <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "var(--accent)", fontSize: "14px", marginBottom: "32px", fontFamily: "var(--font-mono)" }}>
              ← BACK TO INSIGHTS
            </Link>
            <div className="section-tag">{post.category}</div>
            <h1 className="hero-h1" style={{ fontSize: "clamp(36px, 6vw, 72px)", marginBottom: "32px", lineHeight: "1.1" }}>
              {post.title}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                 <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>{post.icon}</div>
                 <span>{post.author}</span>
              </div>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--muted)" }}></div>
              <span>{post.date}</span>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--muted)" }}></div>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0 130px" }}>
        <div className="section-inner" style={{ maxWidth: "800px" }}>
          <div className="reveal visible" style={{ color: "var(--text)", lineHeight: "1.8", fontSize: "18px" }}>
            {post.content.map((item, idx) => {
              if (item.type === "h2") {
                return <h2 key={idx} className="section-h2" style={{ fontSize: "32px", marginTop: "64px", marginBottom: "24px" }}>{item.text}</h2>;
              }
              return <p key={idx} style={{ marginBottom: "24px", opacity: 0.9 }}>{item.text}</p>;
            })}
          </div>

          <div className="cta-box reveal visible" style={{ marginTop: "100px", padding: "60px", textAlign: "left" }}>
            <h3 className="section-h2" style={{ fontSize: "28px", marginBottom: "16px" }}>Ready to implement these insights?</h3>
            <p className="section-desc" style={{ marginBottom: "32px", maxWidth: "100%" }}>Our engineering team specializes in making these complex architectures a reality for your organization.</p>
            <Link href="/#contact" className="btn-primary" style={{ display: "inline-block" }}>Work With Xenura →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
