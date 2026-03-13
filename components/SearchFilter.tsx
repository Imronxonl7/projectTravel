"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Package } from "@/types/Package";

const PACKAGE_TYPES = [
  "luxury",
  "historical",
  "cultural",
  "adventure",
  "beach",
  "eco",
];

// ─── Package Card ─────────────────────────────────────────────────────────────
const PackageCard = ({ pkg }: { pkg: Package }) => {
  const hasDiscount = pkg.discount_pct > 0;

  return (
    <div className="package-card">
      <div className="card-image-wrapper">
        <Image
          src={pkg.cover_image}
          alt={pkg.title_uz}
          fill
          className="card-img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {hasDiscount && (
          <span className="badge-sale">–{pkg.discount_pct}%</span>
        )}
        {pkg.is_featured && !hasDiscount && (
          <span className="badge-featured">Featured</span>
        )}
        <div className="card-overlay" />
        <div className="card-meta-top">
          <span className="meta-pill">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {pkg.duration_days} Days
          </span>
          <span className="meta-pill">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {pkg.min_people}–{pkg.max_people}
          </span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-type">{pkg.package_type}</div>
        <h3 className="card-title">{pkg.title}</h3>
        <p className="card-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          {pkg.departure_city} → {new Date(pkg.departure_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </p>
        <p className="card-desc">{pkg.description}</p>

        <div className="card-footer">
          <div className="price-block">
            <span className="price-label">From</span>
            <span className="price-main">${pkg.total_price.toLocaleString()}</span>
            {hasDiscount && (
              <span className="price-original">${pkg.original_price.toLocaleString()}</span>
            )}
          </div>
          <button className="btn-details">Details</button>
        </div>
      </div>

      <style jsx>{`
        .package-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          transition: transform 0.28s cubic-bezier(.22,.68,0,1.2), box-shadow 0.28s ease;
          display: flex;
          flex-direction: column;
        }
        .package-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.13);
        }
        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }
        .card-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .package-card:hover .card-img {
          transform: scale(1.06);
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%);
        }
        .badge-sale {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #FF4D6D;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          z-index: 2;
        }
        .badge-featured {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #FFB800;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          z-index: 2;
        }
        .card-meta-top {
          position: absolute;
          bottom: 14px;
          left: 14px;
          display: flex;
          gap: 8px;
          z-index: 2;
        }
        .meta-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-type {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #00B4AA;
          margin-bottom: 6px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 6px;
          line-height: 1.3;
        }
        .card-location {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #999;
          margin: 0 0 10px;
        }
        .card-desc {
          font-size: 13.5px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 20px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
        }
        .price-block {
          display: flex;
          flex-direction: column;
        }
        .price-label {
          font-size: 11px;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .price-main {
          font-size: 22px;
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1.1;
        }
        .price-original {
          font-size: 12px;
          color: #bbb;
          text-decoration: line-through;
        }
        .btn-details {
          background: linear-gradient(135deg, #00B4AA, #0099FF);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 10px 22px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          letter-spacing: 0.3px;
        }
        .btn-details:hover {
          opacity: 0.88;
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
};

// ─── Sidebar Filter ───────────────────────────────────────────────────────────
const Sidebar = ({
  maxPrice,
  setMaxPrice,
  selectedTypes,
  toggleType,
  showPromo,
  setShowPromo,
  selectedDuration,
  setSelectedDuration,
  onClose,
}: {
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  selectedTypes: string[];
  toggleType: (t: string) => void;
  showPromo: boolean;
  setShowPromo: (v: boolean) => void;
  selectedDuration: string;
  setSelectedDuration: (v: string) => void;
  onClose?: () => void;
}) => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <span className="sidebar-title">Filters</span>
      {onClose && (
        <button className="close-btn" onClick={onClose}>✕</button>
      )}
    </div>

    {/* Typologies */}
    <div className="filter-section">
      <p className="filter-label">Package Type</p>
      <div className="checkbox-grid">
        {PACKAGE_TYPES.map((t) => (
          <label key={t} className="check-item">
            <input
              type="checkbox"
              checked={selectedTypes.includes(t)}
              onChange={() => toggleType(t)}
            />
            <span className="checkmark" />
            <span className="check-label">{t.charAt(0).toUpperCase() + t.slice(1)}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Max Price */}
    <div className="filter-section">
      <p className="filter-label">
        Max Price: <strong>${maxPrice.toLocaleString()}</strong>
      </p>
      <input
        type="range"
        min={100}
        max={5000}
        step={50}
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="range-input"
      />
      <div className="range-ends">
        <span>$100</span>
        <span>$5000</span>
      </div>
      <label className="check-item promo-check">
        <input
          type="checkbox"
          checked={showPromo}
          onChange={(e) => setShowPromo(e.target.checked)}
        />
        <span className="checkmark" />
        <span className="check-label">Sale only</span>
      </label>
    </div>

    {/* Duration */}
    <div className="filter-section">
      <p className="filter-label">Duration</p>
      {["any", "1-3", "4-7", "8+"].map((d) => (
        <label key={d} className="check-item radio-item">
          <input
            type="radio"
            name="duration"
            checked={selectedDuration === d}
            onChange={() => setSelectedDuration(d)}
          />
          <span className="checkmark radio-mark" />
          <span className="check-label">
            {d === "any" ? "Any duration" : d === "8+" ? "8+ days" : `${d} days`}
          </span>
        </label>
      ))}
    </div>

    <style jsx>{`
      .sidebar {
        background: #fff;
        border-radius: 20px;
        padding: 28px 24px;
        box-shadow: 0 2px 20px rgba(0,0,0,0.07);
        height: fit-content;
        position: sticky;
        top: 100px;
      }
      .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }
      .sidebar-title {
        font-size: 20px;
        font-weight: 800;
        color: #1a1a2e;
        letter-spacing: -0.5px;
      }
      .close-btn {
        background: #f5f5f5;
        border: none;
        border-radius: 8px;
        width: 32px;
        height: 32px;
        cursor: pointer;
        font-size: 14px;
        color: #555;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .filter-section {
        margin-bottom: 28px;
        padding-bottom: 28px;
        border-bottom: 1px solid #f0f0f0;
      }
      .filter-section:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .filter-label {
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #999;
        margin: 0 0 14px;
      }
      .checkbox-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .check-item {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 13.5px;
      }
      .check-item input {
        display: none;
      }
      .checkmark {
        width: 18px;
        height: 18px;
        border: 2px solid #ddd;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: all 0.2s;
        position: relative;
      }
      .radio-mark {
        border-radius: 50%;
      }
      .check-item input:checked + .checkmark {
        background: linear-gradient(135deg, #00B4AA, #0099FF);
        border-color: transparent;
      }
      .check-item input:checked + .checkmark::after {
        content: '';
        width: 5px;
        height: 9px;
        border: 2px solid #fff;
        border-top: none;
        border-left: none;
        transform: rotate(42deg) translateY(-1px);
        display: block;
      }
      .radio-mark::after {
        border: none !important;
        width: 7px !important;
        height: 7px !important;
        border-radius: 50% !important;
        background: #fff;
        transform: none !important;
        translateY: 0 !important;
      }
      .check-label {
        color: #444;
        user-select: none;
      }
      .promo-check {
        margin-top: 12px;
      }
      .range-input {
        width: 100%;
        -webkit-appearance: none;
        height: 4px;
        border-radius: 4px;
        background: linear-gradient(to right, #00B4AA 0%, #0099FF 100%);
        outline: none;
        cursor: pointer;
        margin-bottom: 8px;
      }
      .range-input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        border: 3px solid #00B4AA;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,180,170,0.3);
      }
      .range-ends {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #bbb;
        margin-bottom: 10px;
      }
      .radio-item {
        margin-bottom: 8px;
      }
    `}</style>
  </aside>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const SearchFilter = ({ packages }: { packages: Package[] }) => {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showPromo, setShowPromo] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("any");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleType = (t: string) =>
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  const filtered = useMemo(() => {
    return (packages || []).filter((pkg) => {
      if (!pkg.is_active) return false;
      if (search && !pkg.title.toLowerCase().includes(search.toLowerCase()) &&
          !pkg.title_uz.toLowerCase().includes(search.toLowerCase())) return false;
      if (pkg.total_price > maxPrice) return false;
      if (showPromo && pkg.discount_pct === 0) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(pkg.package_type)) return false;
      if (selectedDuration !== "any") {
        const [min, max] = selectedDuration === "8+"
          ? [8, 999]
          : selectedDuration.split("-").map(Number);
        if (pkg.duration_days < min || pkg.duration_days > (max || min)) return false;
      }
      return true;
    });
  }, [packages, search, maxPrice, showPromo, selectedTypes, selectedDuration]);

  const activeFilterCount =
    selectedTypes.length +
    (showPromo ? 1 : 0) +
    (maxPrice < 5000 ? 1 : 0) +
    (selectedDuration !== "any" ? 1 : 0);

  return (
    <div className="page-wrapper">
      {/* Search Bar */}
      <div className="search-bar-section">
        <div className="search-inner">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search destinations, tours..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
          <button
            className="filter-toggle-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
            </svg>
            Filters
            {activeFilterCount > 0 && (
              <span className="filter-badge">{activeFilterCount}</span>
            )}
          </button>
        </div>
      </div>

      <div className="layout">
        {/* Sidebar – desktop */}
        <div className="sidebar-desktop">
          <Sidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedTypes={selectedTypes}
            toggleType={toggleType}
            showPromo={showPromo}
            setShowPromo={setShowPromo}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
          />
        </div>

        {/* Mobile Sidebar Drawer */}
        {sidebarOpen && (
          <div className="drawer-overlay" onClick={() => setSidebarOpen(false)}>
            <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
              <Sidebar
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                selectedTypes={selectedTypes}
                toggleType={toggleType}
                showPromo={showPromo}
                setShowPromo={setShowPromo}
                selectedDuration={selectedDuration}
                setSelectedDuration={setSelectedDuration}
                onClose={() => setSidebarOpen(false)}
              />
              <button className="apply-btn" onClick={() => setSidebarOpen(false)}>
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Results Grid */}
        <div className="results-area">
          <div className="results-header">
            <span className="results-count">
              <strong>{filtered.length}</strong> tours found
            </span>
            {activeFilterCount > 0 && (
              <button
                className="clear-btn"
                onClick={() => {
                  setSelectedTypes([]);
                  setShowPromo(false);
                  setMaxPrice(5000);
                  setSelectedDuration("any");
                }}
              >
                Clear all
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🌍</div>
              <h3>No tours found</h3>
              <p>Try adjusting your filters</p>
            </div>
          ) : (
            <div className="cards-grid">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .page-wrapper {
          background: #f7f8fc;
          min-height: 100vh;
          padding: 0 0 60px;
        }

        /* Search bar */
        .search-bar-section {
          background: #fff;
          border-bottom: 1px solid #eee;
          padding: 16px 24px;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .search-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .search-input-wrapper {
          flex: 1;
          position: relative;
        }
        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #aaa;
        }
        .search-input {
          width: 100%;
          padding: 12px 16px 12px 46px;
          border: 2px solid #eee;
          border-radius: 14px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
          background: #f9f9f9;
          color: #1a1a2e;
        }
        .search-input:focus {
          border-color: #00B4AA;
          background: #fff;
        }
        .filter-toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #1a1a2e;
          color: #fff;
          border: none;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          position: relative;
          transition: background 0.2s;
        }
        .filter-toggle-btn:hover {
          background: #00B4AA;
        }
        .filter-badge {
          background: #FF4D6D;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Layout */
        .layout {
          max-width: 1280px;
          margin: 0 auto;
          padding: 32px 24px 0;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 28px;
          align-items: start;
        }

        /* Sidebar visibility */
        .sidebar-desktop {
          display: block;
        }

        /* Mobile drawer */
        .drawer-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 100;
          align-items: flex-end;
        }
        .drawer-panel {
          background: #fff;
          width: 100%;
          max-height: 90vh;
          border-radius: 24px 24px 0 0;
          padding: 24px 20px 32px;
          overflow-y: auto;
        }
        .apply-btn {
          width: 100%;
          margin-top: 20px;
          padding: 16px;
          background: linear-gradient(135deg, #00B4AA, #0099FF);
          color: #fff;
          border: none;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Results */
        .results-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .results-count {
          font-size: 14px;
          color: #666;
        }
        .results-count strong {
          color: #1a1a2e;
          font-size: 18px;
        }
        .clear-btn {
          font-size: 13px;
          color: #FF4D6D;
          background: none;
          border: 1px solid #FF4D6D;
          border-radius: 8px;
          padding: 6px 14px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .clear-btn:hover {
          background: #FF4D6D;
          color: #fff;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          color: #999;
        }
        .empty-icon {
          font-size: 56px;
          margin-bottom: 16px;
        }
        .empty-state h3 {
          font-size: 20px;
          color: #444;
          margin: 0 0 8px;
        }
        .empty-state p {
          font-size: 14px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .layout {
            grid-template-columns: 240px 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .layout {
            grid-template-columns: 1fr;
            padding: 20px 16px 0;
          }
          .sidebar-desktop {
            display: none;
          }
          .filter-toggle-btn {
            display: flex;
          }
          .drawer-overlay {
            display: flex;
          }
          .cards-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .search-bar-section {
            padding: 12px 16px;
          }
        }

        @media (max-width: 520px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
          .filter-toggle-btn span:last-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchFilter;