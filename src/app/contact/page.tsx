import Link from "next/link";

export default function Contact() {
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
        Contact
      </h1>
      <p style={{ lineHeight: 1.7, color: "#444" }}>
        Get in touch — this is a placeholder page. Replace with your contact
        form or details.
      </p>
    </main>
  );
}
