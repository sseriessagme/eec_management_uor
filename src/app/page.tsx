import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        EEC Management
      </h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        System is up and running.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link
          href="/about"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1px solid #ddd",
            borderRadius: 6,
          }}
        >
          About →
        </Link>
        <Link
          href="/contact"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1px solid #ddd",
            borderRadius: 6,
          }}
        >
          Contact →
        </Link>
        <Link
          href="/api/health"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1px solid #ddd",
            borderRadius: 6,
          }}
        >
          API Health →
        </Link>
      </div>
    </main>
  );
}
