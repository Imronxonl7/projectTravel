import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "@/components/Container";

const mobileMenuSections = [
  {
    title: "Asosiy",
    emoji: "🏠",
    items: [
      { label: "Home", href: "/", desc: "Bosh sahifaga qaytish" },
      { label: "About", href: "/about", desc: "Biz haqimizda" },
      { label: "Contact Us", href: "/contactUs", desc: "Biz bilan bog'laning" },
    ],
  },
  {
    title: "Travel",
    emoji: "✈️",
    items: [
      { label: "Travel", href: "/travel", desc: "Sayohat paketlari" },
      { label: "Destination", href: "/destination", desc: "Manzillar" },
      { label: "Typologies", href: "/typologies", desc: "Tur turlari" },
    ],
  },
  {
    title: "Pages",
    emoji: "📄",
    items: [
      { label: "Pages", href: "/pages", desc: "Barcha sahifalar" },
      { label: "Preview", href: "/pewview", desc: "Ko'rib chiqish" },
      { label: "Prices", href: "/prices", desc: "Narxlar" },
      { label: "Services", href: "/services", desc: "Xizmatlar" },
    ],
  },
  {
    title: "Shop & Blog",
    emoji: "🛍️",
    items: [
      { label: "Shop", href: "/shop", desc: "Do'kon" },
      { label: "Blog", href: "/blog", desc: "Maqolalar" },
      { label: "Search", href: "/search", desc: "Qidirish" },
    ],
  },
];

const stats = [
  { value: "1,200+", label: "Happy Travelers" },
  { value: "85+", label: "Destinations" },
  { value: "10+", label: "Years Experience" },
  { value: "4.9★", label: "Average Rating" },
];

const features = [
  { icon: "🗺️", title: "Expert Guides", desc: "Professional, multilingual guides who know every hidden gem." },
  { icon: "🏨", title: "Handpicked Hotels", desc: "Only the finest accommodations, curated for comfort and style." },
  { icon: "🔒", title: "Safe & Secure", desc: "24/7 support and fully insured trips for total peace of mind." },
  { icon: "💳", title: "Best Price Guarantee", desc: "We match any lower price — no questions asked." },
];

const PagesPage = () => {
  return (
    <div className="pp-root">

      {/* ── HERO ── */}
      <div className="pp-hero">
        <Image
          src="https://assets.insuremytrip.com/wp-content/uploads/2024/12/06160852/hero-image_1440x400_travel-tips.jpg"
          alt="Pages Hero"
          fill
          className="pp-hero-img"
          priority
        />
        <div className="pp-hero-overlay" />
        <div className="pp-hero-content">
          <span className="pp-eyebrow">Explore Everything</span>
          <h1 className="pp-hero-title">Our Pages</h1>
          <p className="pp-hero-sub">Your complete guide to everything we offer</p>
        </div>
        <div className="pp-hero-wave">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60Z" fill="#ffffff"/>
          </svg>
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="pp-stats-section">
        <Container className="">
          <div className="pp-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="pp-stat-card">
                <span className="pp-stat-value">{s.value}</span>
                <span className="pp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ALL PAGES ── */}
      <section className="pp-pages-section">
        <Container className="">
          <div className="pp-section-header">
            <span className="pp-section-tag">Navigation</span>
            <h2 className="pp-section-title">All Pages</h2>
            <p className="pp-section-desc">Browse every section of our platform in one place</p>
          </div>
          <div className="pp-pages-grid">
            {mobileMenuSections.map((section) => (
              <div key={section.title} className="pp-sc-card">
                <div className="pp-sc-header">
                  <span className="pp-sc-emoji">{section.emoji}</span>
                  <h3 className="pp-sc-title">{section.title}</h3>
                </div>
                <ul className="pp-sc-list">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="pp-sc-link">
                        <div className="pp-sc-link-inner">
                          <span className="pp-sc-link-label">{item.label}</span>
                          <span className="pp-sc-link-desc">{item.desc}</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="pp-sc-arrow">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY US ── */}
      <section className="pp-features-section">
        <Container className="">
          <div className="pp-section-header">
            <span className="pp-section-tag">Why Choose Us</span>
            <h2 className="pp-section-title">Travel With Confidence</h2>
            <p className="pp-section-desc">We go above and beyond to make every journey extraordinary</p>
          </div>
          <div className="pp-features-grid">
            {features.map((f) => (
              <div key={f.title} className="pp-feature-card">
                <span className="pp-f-icon">{f.icon}</span>
                <h4 className="pp-f-title">{f.title}</h4>
                <p className="pp-f-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="pp-cta-section">
        <Container className="">
          <div className="pp-cta-card">
            <div className="pp-cta-blob" />
            <div className="pp-cta-content">
              <h2 className="pp-cta-title">Ready for Your Next Adventure?</h2>
              <p className="pp-cta-sub">Thousands of destinations, one platform. Start exploring today.</p>
              <div className="pp-cta-btns">
                <Link href="/search" className="pp-btn-primary">Browse Tours</Link>
                <Link href="/contactUs" className="pp-btn-secondary">Contact Us</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        .pp-root {
          background: #fff;
          color: #1a1a2e;
        }

        /* Hero */
        .pp-hero {
          position: relative;
          width: 100%;
          height: 420px;
          overflow: hidden;
        }
        .pp-hero-img {
          object-fit: cover;
          object-position: center;
        }
        .pp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10,30,25,0.82) 0%, rgba(0,0,0,0.2) 100%);
          z-index: 1;
        }
        .pp-hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
          padding: 0 24px;
        }
        .pp-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #1BBC9B;
          background: rgba(27,188,155,0.15);
          border: 1px solid rgba(27,188,155,0.3);
          padding: 5px 16px;
          border-radius: 20px;
        }
        .pp-hero-title {
          font-size: clamp(40px, 7vw, 68px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -1px;
        }
        .pp-hero-sub {
          font-size: clamp(14px, 2vw, 17px);
          color: rgba(255,255,255,0.75);
          margin: 0;
          font-style: italic;
        }
        .pp-hero-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 3;
          line-height: 0;
        }
        .pp-hero-wave svg { width: 100%; height: 60px; }

        /* Stats */
        .pp-stats-section { padding: 56px 0 48px; background: #fff; }
        .pp-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .pp-stat-card {
          text-align: center;
          padding: 32px 20px;
          border-radius: 16px;
          background: #f8fffe;
          border: 1.5px solid #e0f7f2;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pp-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(27,188,155,0.12);
        }
        .pp-stat-value {
          display: block;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          color: #1BBC9B;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }
        .pp-stat-label {
          font-size: 13px;
          color: #888;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Section header */
        .pp-section-header { text-align: center; margin-bottom: 48px; }
        .pp-section-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #1BBC9B;
          margin-bottom: 12px;
        }
        .pp-section-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 14px;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }
        .pp-section-desc {
          font-size: 16px;
          color: #888;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
          font-style: italic;
        }

        /* Pages grid */
        .pp-pages-section { padding: 16px 0 72px; background: #fff; }
        .pp-pages-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .pp-sc-card {
          border-radius: 18px;
          border: 1.5px solid #f0f0f0;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .pp-sc-card:hover {
          box-shadow: 0 12px 36px rgba(27,188,155,0.10);
          transform: translateY(-3px);
        }
        .pp-sc-header {
          padding: 22px 22px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1.5px solid #f5f5f5;
          background: linear-gradient(135deg, #f8fffe, #fff);
        }
        .pp-sc-emoji { font-size: 22px; }
        .pp-sc-title { font-size: 16px; font-weight: 800; color: #1a1a2e; margin: 0; }
        .pp-sc-list { list-style: none; margin: 0; padding: 10px 0; }
        .pp-sc-list li { border-bottom: 1px solid #f7f7f7; }
        .pp-sc-list li:last-child { border-bottom: none; }
        .pp-sc-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 22px;
          text-decoration: none;
          transition: background 0.15s;
          gap: 8px;
        }
        .pp-sc-link:hover { background: #f0fdf9; }
        .pp-sc-link:hover .pp-sc-arrow { color: #1BBC9B; transform: translateX(3px); }
        .pp-sc-link-inner { display: flex; flex-direction: column; gap: 2px; }
        .pp-sc-link-label { font-size: 14px; font-weight: 600; color: #1a1a2e; }
        .pp-sc-link-desc { font-size: 11.5px; color: #aaa; font-style: italic; }
        .pp-sc-arrow { color: #ccc; flex-shrink: 0; transition: color 0.15s, transform 0.15s; }

        /* Features */
        .pp-features-section { padding: 72px 0; background: #f8fffe; }
        .pp-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .pp-feature-card {
          background: #fff;
          border-radius: 18px;
          padding: 32px 24px;
          border: 1.5px solid #e8f7f3;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          text-align: center;
        }
        .pp-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(27,188,155,0.13);
        }
        .pp-f-icon { font-size: 36px; display: block; margin-bottom: 16px; }
        .pp-f-title { font-size: 17px; font-weight: 800; color: #1a1a2e; margin: 0 0 10px; }
        .pp-f-desc { font-size: 13.5px; color: #888; line-height: 1.65; margin: 0; font-style: italic; }

        /* CTA */
        .pp-cta-section { padding: 72px 0 80px; background: #fff; }
        .pp-cta-card {
          position: relative;
          background: linear-gradient(135deg, #0f2b24 0%, #1a3d32 50%, #0d2620 100%);
          border-radius: 28px;
          padding: 72px 56px;
          overflow: hidden;
          text-align: center;
        }
        .pp-cta-blob {
          position: absolute;
          top: -80px; right: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(27,188,155,0.25) 0%, transparent 70%);
          pointer-events: none;
        }
        .pp-cta-content { position: relative; z-index: 1; }
        .pp-cta-title {
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }
        .pp-cta-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.65);
          margin: 0 0 36px;
          font-style: italic;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .pp-cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .pp-btn-primary {
          background: #1BBC9B;
          color: #fff;
          text-decoration: none;
          padding: 14px 36px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          transition: background 0.2s, transform 0.15s;
        }
        .pp-btn-primary:hover { background: #17a789; transform: scale(1.03); }
        .pp-btn-secondary {
          background: rgba(255,255,255,0.1);
          color: #fff;
          text-decoration: none;
          padding: 14px 36px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          border: 1.5px solid rgba(255,255,255,0.25);
          transition: background 0.2s, transform 0.15s;
        }
        .pp-btn-secondary:hover { background: rgba(255,255,255,0.18); transform: scale(1.03); }

        /* Responsive */
        @media (max-width: 1024px) {
          .pp-pages-grid { grid-template-columns: repeat(2, 1fr); }
          .pp-features-grid { grid-template-columns: repeat(2, 1fr); }
          .pp-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .pp-hero { height: 340px; }
          .pp-cta-card { padding: 48px 28px; }
          .pp-pages-section { padding: 16px 0 52px; }
          .pp-features-section { padding: 52px 0; }
          .pp-cta-section { padding: 52px 0 60px; }
          .pp-stats-section { padding: 40px 0 32px; }
          .pp-section-header { margin-bottom: 32px; }
        }
        @media (max-width: 560px) {
          .pp-pages-grid { grid-template-columns: 1fr; }
          .pp-features-grid { grid-template-columns: 1fr; }
          .pp-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .pp-hero { height: 280px; }
          .pp-cta-card { padding: 36px 20px; border-radius: 18px; }
          .pp-cta-blob { display: none; }
        }
        @media (max-width: 360px) {
          .pp-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default PagesPage;