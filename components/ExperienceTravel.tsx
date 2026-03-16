import React from 'react'
import Image from 'next/image'
import Container from './Container'
import WorldDote from '../assets/images/WorldDote.svg'
import Link from 'next/link'

// ---- SVG Icons (inline, no extra deps) ----
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const ExperienceTravel = () => {
  return (
    <>
      {/* Inject styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        .et-section {
          font-family: 'Nunito', sans-serif;
          background-color: #f5f5f5;
          min-height: 700px;
          display: flex;
          flex-direction: column;
        }

        /* ── Hero ── */
        .et-hero {
          position: relative;
          padding: 80px 0;
          overflow: hidden;
          flex: 1;
        }

        .et-world-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.35;
        }

        .et-world-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .et-hero-inner {
          position: relative;
          z-index: 1;
        }

        /* ── Label ── */
        .et-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 18px;
        }

        /* ── Heading ── */
        .et-heading {
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 900;
          line-height: 1.1;
          color: #111;
          margin: 0 0 52px;
        }

        .et-heading-highlight {
          color: #111;
          text-decoration: underline;
          text-decoration-color: #F5C518;
          text-decoration-thickness: 4px;
          text-underline-offset: 4px;
        }

        /* ── Search Bar ── */
        .et-search-bar {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.10);
          display: flex;
          align-items: stretch;
          flex-wrap: wrap;
          gap: 0;
          overflow: hidden;
          max-width: 780px;
        }

        .et-search-field {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 24px;
          flex: 1 1 160px;
          min-width: 120px;
          border-right: 1px solid #eee;
          cursor: pointer;
          transition: background 0.2s;
        }

        .et-search-field:last-of-type {
          border-right: none;
        }

        .et-search-field:hover {
          background: #f9fafb;
        }

        .et-field-texts {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .et-field-label {
          font-size: 13px;
          font-weight: 800;
          color: #111;
          line-height: 1;
        }

        .et-field-sub {
          font-size: 11.5px;
          color: #aaa;
          font-weight: 500;
          line-height: 1;
        }

        .et-search-btn {
          background: #1ABC9C;
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          padding: 18px 32px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          flex-shrink: 0;
          align-self: stretch;
        }

        .et-search-btn:hover {
          background: #16a085;
          transform: scale(1.03);
        }

        /* ── Bottom tag ── */
        .et-bottom-tag {
          padding: 20px 0 32px;
        }

        .et-bottom-tag p {
          font-size: 13px;
          font-style: italic;
          color: #1ABC9C;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .et-hero {
            padding: 60px 0 80px;
          }

          .et-search-bar {
            flex-direction: column;
            max-width: 100%;
            border-radius: 12px;
          }

          .et-search-field {
            border-right: none;
            border-bottom: 1px solid #eee;
            flex: unset;
            width: 100%;
          }

          .et-search-field:last-of-type {
            border-bottom: none;
          }

          .et-search-btn {
            width: 100%;
            padding: 16px;
            border-radius: 0 0 12px 12px;
          }
        }

        @media (max-width: 480px) {
          .et-hero {
            padding: 48px 0 64px;
          }

          .et-heading {
            margin-bottom: 36px;
          }

          .et-search-field {
            padding: 14px 18px;
          }
        }
      `}</style>

      <section className="et-section">
        {/* ── Hero ── */}
        <div className="et-hero">
          {/* World map dotted background */}
          <div className="et-world-bg">
            <Image
              src={WorldDote}
              alt="World Map"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <Container className=''>
            <div className="et-hero-inner">
              {/* Label */}
              <p className="et-label">Love Travel Theme</p>

              {/* Heading */}
              <h1 className="et-heading">
                <span className="et-heading-highlight">Adventure</span> &<br />
                Experience<br />
                The Travel !
              </h1>

              {/* Search Bar */}
              <div className="et-search-bar">
                {/* Search field */}
                <div className="et-search-field">
                  <SearchIcon />
                  <div className="et-field-texts">
                    <span className="et-field-label">Search</span>
                    <span className="et-field-sub">Insert keyword</span>
                  </div>
                </div>

                {/* Destinations field */}
                <div className="et-search-field">
                  <PinIcon />
                  <Link href={"/destination"} className="et-field-texts">
                    <span className="et-field-label">Destinations</span>
                    <span className="et-field-sub">All Destinations</span>
                  </Link>
                </div>

                {/* Typologies field */}
                <div className="et-search-field">
                  <GlobeIcon />
                  <Link href={"/typologies"} className="et-field-texts">
                    <span className="et-field-label">Typologies</span>
                    <span className="et-field-sub">All Typologies</span>
                  </Link>
                </div>

                {/* Search button */}
                <Link href={"/search"} className="et-search-btn flex justify-center items-center">Search</Link>
              </div>
            </div>
          </Container>
        </div>

      </section>
    </>
  )
}

export default ExperienceTravel