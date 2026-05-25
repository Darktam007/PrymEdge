import { Link } from "wouter";

export default function NotFound() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
      <div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#F05A00", marginBottom: "1.5rem" }}>
          404
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, color: "#ffffff", marginBottom: "1.25rem" }}>
          Page Not Found
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)", marginBottom: "2rem" }}>
          This page doesn't exist. Let's get you back on track.
        </p>
        <Link href="/">
          <button style={{ background: "#F05A00", color: "#fff", padding: "0.75rem 2rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", cursor: "pointer", border: "none", textTransform: "uppercase" }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
