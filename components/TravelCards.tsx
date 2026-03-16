"use client";

import React, { useState, useMemo } from "react";
import Container from "./Container";
import { Package } from "@/types/Package";
import Image from "next/image";
import Link from "next/link";

const PER_PAGE = 6;

const TravelCards = ({ allPackages }: { allPackages: Package[] }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const active = (allPackages || []).filter((p) => p.is_active);

  // Search faqat departure_city bo'yicha
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return active;
    return active.filter((p) =>
      p.departure_city.toLowerCase().includes(q)
    );
  }, [active, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <section className="tc-section">
      <Container className="">

        {/* ── Search bar ── */}
        <div className="search-wrap">
          <div className="search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search by country / city..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button className="search-clear" onClick={() => handleSearch("")}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ── Results count ── */}
        <p className="results-txt">
          <strong>{filtered.length}</strong> tours found
        </p>

        {/* ── Cards grid ── */}
        {paginated.length === 0 ? (
          <div className="empty">
            <span>🌍</span>
            <p>No tours found for "{search}"</p>
          </div>
        ) : (
          <div className="cards-grid">
            {paginated.map((pkg) => {
              const hasDiscount = pkg.discount_pct > 0;
              const discountedPrice = hasDiscount
                ? pkg.original_price * (1 - pkg.discount_pct / 100)
                : null;

              return (
                <div key={pkg.id} className="card">
                  {/* Image */}
                  <div className="card-img-wrap">
                    <Image
                      src={pkg.cover_image}
                      alt={pkg.title}
                      fill
                      className="card-img"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    {hasDiscount && <span className="badge-sale">SALE</span>}

                    {/* Top-left chips */}
                    <div className="img-chips">
                      <span className="chip">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                        </svg>
                        {pkg.duration_days} Days
                      </span>
                      <span className="chip icon-chip">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </span>
                      <span className="chip icon-chip">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                          <polyline points="16 6 12 2 8 6"/>
                          <line x1="12" y1="2" x2="12" y2="15"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="card-body">
                    <h3 className="card-title">{pkg.title}</h3>
                    <p className="card-city">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#1BBC9B">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {pkg.departure_city}
                    </p>
                    <p className="card-desc">{pkg.description}</p>

                    <div className="card-footer">
                      <Link href={`/travel/${pkg.slug}`} className="btn-details">
                        Details
                      </Link>
                      <div className="price-block">
                        <span className="price-from">From</span>
                        <div className="price-row">
                          <span className="price-main">
                            ${(discountedPrice ?? pkg.total_price).toLocaleString()}
                          </span>
                          {hasDiscount && (
                            <span className="price-orig">
                              ${pkg.original_price.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`page-btn${page === p ? " active" : ""}`}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                {p}
              </button>
            ))}
          </div>
        )}

      </Container>

      <style>{`
        .tc-section {
          background: #f5f5f5;
          padding: 40px 0 72px;
        }

        /* Search */
        .search-wrap {
          margin-bottom: 20px;
        }
        .search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 2px solid #eee;
          border-radius: 14px;
          padding: 12px 18px;
          transition: border-color 0.2s;
          max-width: 480px;
        }
        .search-box:focus-within {
          border-color: #1BBC9B;
        }
        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 14px;
          color: #1a1a2e;
          background: transparent;
        }
        .search-input::placeholder { color: #bbb; }
        .search-clear {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
        }

        /* Results */
        .results-txt {
          font-size: 13px;
          color: #888;
          margin-bottom: 22px;
        }
        .results-txt strong {
          font-size: 17px;
          color: #1a1a2e;
        }

        /* Grid — 2 ustun */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        /* Card */
        .card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.10);
        }

        /* Image */
        .card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .card-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .card:hover .card-img { transform: scale(1.05); }

        .badge-sale {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #FF4D6D;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 1px;
          z-index: 2;
        }

        .img-chips {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 6px;
          z-index: 2;
        }
        .chip {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(26, 46, 45, 0.82);
          backdrop-filter: blur(4px);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 20px;
        }
        .icon-chip { padding: 5px 9px; }

        /* Body */
        .card-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 8px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0;
          line-height: 1.3;
        }
        .card-city {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #999;
          margin: 0;
        }
        .card-desc {
          font-size: 13.5px;
          color: #777;
          line-height: 1.65;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        /* Footer */
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
          padding-top: 16px;
          border-top: 1px solid #f0f0f0;
        }
        .btn-details {
          background: #1BBC9B;
          color: #fff;
          text-decoration: none;
          border-radius: 8px;
          padding: 10px 24px;
          font-size: 13px;
          font-weight: 700;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-details:hover { background: #17a789; transform: scale(1.03); }

        .price-block {
          text-align: right;
        }
        .price-from {
          font-size: 11px;
          color: #aaa;
          display: block;
        }
        .price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          justify-content: flex-end;
        }
        .price-main {
          font-size: 24px;
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1;
        }
        .price-orig {
          font-size: 12px;
          color: #bbb;
          text-decoration: line-through;
        }

        /* Empty */
        .empty {
          text-align: center;
          padding: 80px 20px;
          color: #aaa;
          font-size: 15px;
        }
        .empty span { font-size: 52px; display: block; margin-bottom: 14px; }

        /* Pagination — rasmdagidek */
        .pagination {
          display: flex;
          gap: 8px;
          justify-content: center;
          padding-top: 40px;
          flex-wrap: wrap;
        }
        .page-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: none;
          background: #2d3748;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.18s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .page-btn:hover { background: #3d4a5c; transform: scale(1.05); }
        .page-btn.active {
          background: #1BBC9B;
        }
        .page-btn.active:hover { background: #17a789; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .tc-section { padding: 28px 0 56px; }
          .cards-grid { gap: 16px; }
          .card-title { font-size: 16px; }
          .price-main { font-size: 20px; }
        }

        @media (max-width: 600px) {
          .cards-grid { grid-template-columns: 1fr; }
          .card-img-wrap { aspect-ratio: 16 / 9; }
          .search-box { max-width: 100%; }
        }

        @media (max-width: 400px) {
          .card-body { padding: 16px; }
          .btn-details { padding: 9px 18px; }
        }
      `}</style>
    </section>
  );
};

export default TravelCards;