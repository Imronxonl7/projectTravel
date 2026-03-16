import { Destination } from "@/types/Destination";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const DestinatoinPageCards = ({
  destinations,
}: {
  destinations: Destination[];
}) => {
  const active = (destinations || []).filter((d) => d.is_active);

  return (
    <section className="dest-section">
      <Container className="">
        {/* Section header */}
        <div className="dest-header">
          <span className="dest-tag">Explore the World</span>
          <h2 className="dest-title">Popular Destinations</h2>
          <p className="dest-sub">
            Hand-picked destinations for your perfect journey
          </p>
        </div>

        {/* Cards grid */}
        {active.length === 0 ? (
          <div className="dest-empty">
            <span>🌍</span>
            <p>No destinations found</p>
          </div>
        ) : (
          <div className="dest-grid">
            {active.map((dest, i) => {
              const mapsUrl = `https://www.google.com/maps?q=${dest.latitude},${dest.longitude}`;
              const isPopular = dest.is_popular;

              return (
                <div key={dest.id} className="dest-card">
                  {/* Image */}
                  <div className="dest-img-wrap">
                    <Image
                      src={dest.cover_image}
                      alt={dest.name}
                      fill
                      className="dest-img"
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Popular badge */}
                    {isPopular && (
                      <span className="badge-popular">
                        ⭐ Popular
                      </span>
                    )}

                    {/* Overlay gradient */}
                    <div className="dest-overlay" />

                    {/* Bottom meta on image */}
                    <div className="dest-img-bottom">
                      <h3 className="dest-name">{dest.name}</h3>
                      {dest.best_season && (
                        <span className="dest-season">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                          </svg>
                          Best: {dest.best_season}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="dest-body">
                    {dest.description && (
                      <p className="dest-desc">{dest.description}</p>
                    )}

                    {/* Highlights */}
                    {dest.highlights && dest.highlights.length > 0 && (
                      <div className="dest-highlights">
                        <p className="highlights-label">Highlights</p>
                        <div className="highlights-list">
                          {dest.highlights.slice(0, 3).map((h, idx) => (
                            <span key={idx} className="highlight-chip">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="dest-footer">
                      {/* Coordinates → Google Maps */}
                      {dest.latitude && dest.longitude && (
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dest-map-link"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          View on Map
                        </a>
                      )}

                      <Link
                        href={`/destination/${dest.slug}`}
                        className="dest-btn"
                      >
                        Explore
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>

      <style>{`
        .dest-section {
          background: #f7f8fc;
          padding: 56px 0 80px;
        }

        /* Header */
        .dest-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .dest-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #1BBC9B;
          margin-bottom: 12px;
        }
        .dest-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 14px;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }
        .dest-sub {
          font-size: 16px;
          color: #888;
          max-width: 480px;
          margin: 0 auto;
          font-style: italic;
          line-height: 1.6;
        }

        /* Grid - 3 columns */
        .dest-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        /* Card */
        .dest-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .dest-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(27,188,155,0.13);
        }

        /* Image */
        .dest-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .dest-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .dest-card:hover .dest-img { transform: scale(1.06); }

        .badge-popular {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #1BBC9B;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          z-index: 2;
          letter-spacing: 0.3px;
        }

        .dest-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%);
          z-index: 1;
        }

        .dest-img-bottom {
          position: absolute;
          bottom: 14px;
          left: 16px;
          right: 16px;
          z-index: 2;
        }
        .dest-name {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 4px;
          line-height: 1.2;
          text-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        .dest-season {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(6px);
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.25);
        }

        /* Body */
        .dest-body {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 12px;
        }
        .dest-desc {
          font-size: 13.5px;
          color: #666;
          line-height: 1.65;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Highlights */
        .dest-highlights { }
        .highlights-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #aaa;
          margin: 0 0 8px;
        }
        .highlights-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .highlight-chip {
          font-size: 11.5px;
          font-weight: 600;
          color: #1a1a2e;
          background: #f0fdf9;
          border: 1px solid #c3f0e6;
          padding: 3px 10px;
          border-radius: 20px;
        }

        /* Footer */
        .dest-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #f0f0f0;
        }
        .dest-map-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12.5px;
          font-weight: 600;
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }
        .dest-map-link:hover { color: #1BBC9B; }

        .dest-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #1BBC9B;
          color: #fff;
          text-decoration: none;
          padding: 9px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          transition: background 0.2s, transform 0.15s;
        }
        .dest-btn:hover { background: #17a789; transform: scale(1.03); }

        /* Empty */
        .dest-empty {
          text-align: center;
          padding: 80px 20px;
          color: #aaa;
          font-size: 15px;
        }
        .dest-empty span { font-size: 48px; display: block; margin-bottom: 12px; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .dest-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (max-width: 768px) {
          .dest-section { padding: 40px 0 56px; }
          .dest-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .dest-header { margin-bottom: 32px; }
        }
        @media (max-width: 520px) {
          .dest-grid { grid-template-columns: 1fr; gap: 18px; }
          .dest-name { font-size: 18px; }
        }
      `}</style>
    </section>
  );
};

export default DestinatoinPageCards;