import Link from "next/link";

export default function About() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <Link href="/" style={{ color: "#666", fontSize: "0.875rem" }}>
        ← Back
      </Link>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginTop: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        About
      </h1>
      <p style={{ lineHeight: 1.7, color: "#444" }}>
        EEC Management is a system for managing operations and resources. This
        is a placeholder page — replace it with your actual content.
      </p>
    </main>
  );
}
