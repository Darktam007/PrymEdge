import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatedSection, AnimatedLine } from "@/components/ui/AnimatedSection";

const ORANGE = "#F05A00";

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(" ");

  return (
    <span ref={ref} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.055 }}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

const deepServices = [
  {
    title: "Hospitality Brand Positioning System",
    what: "We define who your hotel is, who it is for, and why it is the only reasonable choice for that guest. This is the foundation everything else is built on — identity, tone, visual direction, emotional positioning, and competitive differentiation.",
    why: "Without clear positioning, your hotel competes on price. With it, your hotel competes on desire. Guests pay more for a brand they feel connected to. They negotiate harder with a hotel that feels generic.",
    change: "Your hotel stops looking like every other property online and starts feeling like the only one worth choosing.",
    impact: "Guest desirability — Perceived value — Premium pricing ability — Brand clarity",
  },
  {
    title: "Hospitality Content & Storytelling System",
    what: "A structured content and storytelling architecture designed specifically for your property. We build the narrative direction, visual language, content calendar system, and campaign themes — so every piece of content your hotel publishes moves guests closer to booking.",
    why: "Random content builds followers. Strategic storytelling builds desire. Most hotels post visuals of rooms. The hotels that win post the feeling of staying in them. There is a difference, and that difference is a system.",
    change: "Your content stops being a task and starts being a growth engine. Every post, caption, and campaign reinforces why your hotel is the right choice.",
    impact: "Online presence — Emotional connection — Audience engagement — Booking intent",
  },
  {
    title: "Direct Booking & Conversion System",
    what: "We audit and rebuild the entire journey a guest takes from first contact to confirmed reservation. This includes your WhatsApp inquiry flow, website booking path, response timing, offer framing, and follow-up system — all optimized to convert interest into payment.",
    why: "Most hotels leak revenue not at the awareness stage but at the conversion stage. A guest finds your hotel, messages you, and never hears back in time. Or they visit your website and leave confused. These are fixable systems problems, not market problems.",
    change: "More of the guests who discover your hotel actually book it. Your conversion rate improves without spending more on advertising.",
    impact: "Direct booking rate — Inquiry conversion — Revenue per visitor — Platform independence",
  },
  {
    title: "Hospitality Guest Acquisition System",
    what: "We design and manage the paid and organic systems that put your hotel in front of the right guests — people with the intent, budget, and interest to book your specific property. This includes Meta advertising, TikTok campaigns, and content-driven organic strategies built for your audience.",
    why: "A beautiful brand with no visibility generates nothing. Acquisition is how you introduce your hotel to guests who have never heard of you — and make sure the introduction is compelling enough to stay with them until they book.",
    change: "Your hotel reaches more of the right people, more consistently, with messaging that moves them toward a booking rather than past it.",
    impact: "Visibility — Audience growth — Cost per booking — New guest acquisition",
  },
  {
    title: "Website & Digital Experience System",
    what: "We audit your current digital presence and redesign or optimize it to function as a genuine conversion asset. This includes website structure, page speed, visual hierarchy, copywriting, booking flow clarity, and the emotional experience a guest has when they land on your site.",
    why: "Your website is the moment a guest decides whether to trust your hotel enough to pay for it. If that experience feels disjointed, slow, or unconvincing, they leave. Most hotel websites lose guests they already had.",
    change: "Your website stops being a digital brochure and starts performing as your most effective salesperson — converting visitors into guests around the clock.",
    impact: "Website conversion rate — Digital trust — Guest first impression — Direct booking support",
  },
  {
    title: "Hospitality Offer & Revenue Strategy System",
    what: "We help you structure your packages, rates, and offers in a way that increases what each guest spends, improves your hotel's perceived value, and creates genuine, compelling reasons to book directly rather than through third-party platforms.",
    why: "Most hotels undercharge not because the market won't pay more, but because their offers are not structured to justify the price. A well-framed offer communicates value before a guest even sees the room.",
    change: "Your revenue per guest increases. Your offers feel worth paying for. And guests have a clear reason to come directly to you rather than through a platform that takes your margin.",
    impact: "Revenue per guest — Offer clarity — Direct booking incentives — Pricing confidence",
  },
  {
    title: "Hospitality Staff Experience Training",
    what: "We train your guest-facing team on brand communication, hospitality standards, and experience delivery — ensuring that the brand your marketing creates is the brand your guests actually encounter when they arrive.",
    why: "Marketing brings guests to the door. Your team decides whether they come back and what they say about you. If the experience inside doesn't match the promise outside, no marketing system can fix the damage a poor guest interaction creates.",
    change: "Your team delivers a consistent, premium guest experience. Review quality improves. Repeat bookings increase. Word of mouth becomes a genuine acquisition channel.",
    impact: "Guest experience consistency — Review quality — Repeat bookings — Brand integrity",
  },
];

function DeepServiceAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {deepServices.map((s, i) => (
        <div
          key={i}
          className="accordion-line"
          data-testid={`deep-service-${i}`}
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.4rem 0" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#f0f0f0" }}>{s.title}</span>
            <motion.div
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ color: ORANGE, flexShrink: 0, marginLeft: "1rem" }}
            >
              <Plus size={18} />
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingBottom: "2rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: ORANGE, marginBottom: "0.4rem" }}>What it is</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>{s.what}</p>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: ORANGE, marginBottom: "0.4rem" }}>Why it matters</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>{s.why}</p>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: ORANGE, marginBottom: "0.4rem" }}>What it changes</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>{s.change}</p>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(240,90,0,0.8)", fontStyle: "italic" }}>
                Impact: {s.impact}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

const tiers = [
  {
    num: "01",
    title: "Hospitality Brand & Booking Audit",
    sub: "30 Days — Entry Point",
    body: "Before fixing anything, you need to know what is actually broken. The audit is a complete strategic review of your hotel's brand, online presence, booking journey, and growth infrastructure.",
    points: ["Full brand and perception audit", "Online presence and content review", "Booking journey analysis", "Competitor positioning review", "Clear priority growth recommendations", "Staff communication assessment"],
    closing: "This is where every PrymEdge partnership begins. You leave with clarity — and a clear path forward.",
    cta: "Start With the Audit",
  },
  {
    num: "02",
    title: "90-Day Hospitality Growth Partnership",
    sub: "Active System Building",
    body: "We take the audit findings and build. Over 90 days, PrymEdge actively restructures your hotel's brand, marketing, and booking systems — turning the diagnosis into a functioning growth infrastructure.",
    points: ["Brand positioning and identity system", "Content and storytelling direction", "Paid acquisition campaigns", "Booking conversion optimization", "WhatsApp inquiry system", "Website experience improvements", "Offer and revenue structuring"],
    closing: "By the end of 90 days, your hotel has a system — not just better content.",
    cta: "Discuss the Partnership",
  },
  {
    num: "03",
    title: "Hospitality Growth Department",
    sub: "Ongoing Retainer — Full Management",
    body: "For hotels ready to treat growth as an ongoing discipline, not a project. PrymEdge becomes your external growth department — managing every system, every campaign, and every optimization on a continuous basis.",
    points: ["Brand consistency and evolution", "Content direction and campaign execution", "Paid advertising management", "Booking conversion monitoring", "Revenue offer updates", "Performance review and strategy sessions", "Staff experience alignment"],
    closing: "You focus entirely on running an exceptional hotel. We focus entirely on filling it.",
    cta: "Explore the Retainer",
  },
];

const cards = [
  { title: "How We Grow Your Revenue", points: ["Improve occupancy rates", "Increase guest spending per stay", "Optimize pricing perception", "Fix revenue leaks in your booking flow"] },
  { title: "How We Get You Direct Bookings", points: ["Increase direct reservations", "Reduce platform dependency", "Improve inquiry-to-booking conversion", "Build owned audience systems"] },
  { title: "How We Build Your Brand's Desirability", points: ["Define your hotel's unique positioning", "Build consistent visual and verbal identity", "Create storytelling that converts attention into desire", "Ensure every touchpoint reinforces your brand"] },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "7rem 1.5rem 4rem", position: "relative", overflow: "hidden", background: "#050505" }}
      >
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&auto=format&q=70"
          alt="Hotel rooftop pool"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.55 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 40%, rgba(240,90,0,0.13) 0%, transparent 55%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow"
            style={{ marginBottom: "1.5rem" }}
          >
            What We Build
          </motion.p>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "1.75rem" }}>
            <WordReveal text="Growth Systems Built" delay={0.3} />
            <br />
            <WordReveal text="Specifically for Hospitality." delay={0.6} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 2rem" }}
          >
            Every service PrymEdge offers is designed around one outcome — a hotel that grows with intention. Not scattered marketing. Not random content. Structured systems that improve how your hotel is perceived, discovered, and booked.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Link href="/contact">
              <button
                data-testid="services-hero-cta"
                className="pe-btn-orange"
                style={{ padding: "0.9rem 2rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", cursor: "pointer", border: "none", textTransform: "uppercase" }}
              >
                Schedule a Strategy Conversation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* POSITIONING STATEMENT */}
      <section style={{ padding: "6rem 1.5rem 0", background: "#0d0d0d", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              We don't offer services.<br />
              We build systems that compound.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
              A social media post disappears in 24 hours.<br />
              A brand system built correctly appreciates over years.<br />
              PrymEdge is in the business of the latter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* VISUAL BREAK — 3 images */}
      <section style={{ background: "#0d0d0d", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", gap: "1rem", alignItems: "center" }}>
          <AnimatedSection delay={0}>
            <div style={{ borderRadius: "6px", overflow: "hidden", height: "240px" }}>
              <img src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=600&auto=format&q=75" alt="Hotel hallway" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 600ms ease", filter: "brightness(0.85)" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div style={{ borderRadius: "6px", overflow: "hidden", height: "320px", position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&auto=format&q=75" alt="Hotel suite" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 600ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.9)" }}>Systems, not tasks.</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div style={{ borderRadius: "6px", overflow: "hidden", height: "240px" }}>
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&auto=format&q=75" alt="Luxury hotel view" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 600ms ease", filter: "brightness(0.85)" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* DEEP SERVICES */}
      <section style={{ padding: "6rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Services</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Seven Systems.<br />
              Every One Connected to Revenue.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "3rem" }}>
              Each service below exists to move a specific part of your hotel's growth. Perception, acquisition, and conversion. Pick one area to improve or let PrymEdge build all three together. Either way, everything connects.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <DeepServiceAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE DO IT — repeat */}
      <section style={{ padding: "6rem 1.5rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>How We Do It For You</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "3rem" }}>
              Three Ways PrymEdge<br />
              Moves Your Hotel Forward.
            </h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {cards.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className="card-glow"
                  data-testid={`services-card-${i}`}
                  style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px", padding: "2rem", height: "100%" }}
                >
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "1rem" }}>
                    <span style={{ display: "block", height: "2px", width: "24px", background: ORANGE, marginBottom: "0.75rem" }} />
                    {c.title}
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {c.points.map((pt, j) => (
                      <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.5rem", paddingLeft: "1rem", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: ORANGE }}>—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-WIDTH IMAGE BANNER */}
      <section style={{ position: "relative", height: "380px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&auto=format&q=70"
          alt="Luxury hotel lobby"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.75) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 clamp(1.5rem, 8vw, 8rem)" }}>
          <AnimatedSection>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#F05A00", marginBottom: "1rem" }}>How We Engage</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 3rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, maxWidth: "540px" }}>
              Choose how deeply<br />you want to grow.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* ENGAGEMENT TIERS */}
      <section style={{ padding: "6rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>How We Engage</p>
            <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Three Ways to Work<br />
              With PrymEdge.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "560px", marginBottom: "3.5rem" }}>
              Every hotel is at a different stage. PrymEdge structures its engagements to meet you where you are — and move you to where you need to be.
            </p>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
            {tiers.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className="card-glow"
                  data-testid={`tier-card-${i}`}
                  style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}
                >
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 700, color: "rgba(240,90,0,0.2)", lineHeight: 1 }}>{t.num}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.3rem" }}>{t.title}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: ORANGE, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.sub}</p>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{t.body}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {t.points.map((pt, j) => (
                      <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem", display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: ORANGE, flexShrink: 0, marginTop: "0.4rem" }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontStyle: "italic" }}>{t.closing}</p>
                  <Link href="/contact" style={{ marginTop: "auto" }}>
                    <button
                      data-testid={`tier-cta-${i}`}
                      className="pe-btn-orange"
                      style={{ padding: "0.65rem 1.25rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", cursor: "pointer", border: "none", textTransform: "uppercase", width: "100%" }}
                    >
                      {t.cta}
                    </button>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", textAlign: "center", marginTop: "3rem", fontStyle: "italic" }}>
              All tiers begin with a conversation.<br />
              Pricing is discussed based on your hotel's specific scope and goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES FINAL CTA */}
      <section style={{ padding: "7rem 1.5rem", background: "#090909", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <AnimatedSection>
            <h2 className="section-headline" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", marginBottom: "1.5rem" }}>
              The Right System Changes<br />
              Everything About How a Hotel Grows.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              PrymEdge works with hotel owners who are ready to close the gap between the property they have built and the revenue it deserves to generate. If that is where you are, the next step is a conversation.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.22}>
            <Link href="/contact">
              <button
                data-testid="services-final-cta"
                className="pe-btn-orange"
                style={{ padding: "1rem 2.5rem", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.06em", cursor: "pointer", border: "none", textTransform: "uppercase" }}
              >
                Schedule a Strategy Conversation
              </button>
            </Link>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginTop: "1rem" }}>
              No commitment required. We start by understanding your hotel.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
