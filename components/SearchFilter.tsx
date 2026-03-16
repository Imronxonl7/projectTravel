"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Package } from "@/types/Package";

// ─── Package Card ─────────────────────────────────────────────────────────────
const PackageCard = ({ pkg }: { pkg: Package }) => {
  const hasDiscount = pkg.discount_pct > 0;

  return (
    <div className="pkg-card">
      <div className="pkg-img-wrap">
        <Image
          src={pkg.cover_image}
          alt={pkg.title}
          fill
          className="pkg-img"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {hasDiscount && <span className="badge-sale">SALE</span>}
        {pkg.is_featured && !hasDiscount && <span className="badge-featured">Featured</span>}

        {/* Chips — rasmdagi dark style */}
        <div className="img-chips">
          <span className="chip">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            {pkg.duration_days} Days
          </span>
          <span className="chip">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </span>
          <span className="chip">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="pkg-body">
        <h3 className="pkg-title">{pkg.title}</h3>
        <p className="pkg-location">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#1BBC9B">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          {pkg.departure_city}
        </p>
        <p className="pkg-desc">{pkg.description}</p>

        <div className="pkg-footer">
          <button className="btn-details">Details</button>
          <div className="price-right">
            <span className="price-from">From</span>
            <div className="price-row">
              <span className="price-main">${pkg.total_price.toLocaleString()}</span>
              {hasDiscount && (
                <span className="price-orig">${pkg.original_price.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pkg-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .pkg-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.10);
        }
        .pkg-img-wrap {
          position: relative;
          width: 100%;
          height: 196px;
          overflow: hidden;
        }
        .pkg-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .pkg-card:hover .pkg-img { transform: scale(1.05); }
        .badge-sale {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #FF4D6D;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 1px;
          z-index: 2;
        }
        .badge-featured {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #FFB800;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 20px;
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
          background: rgba(26, 46, 45, 0.85);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 20px;
          line-height: 1;
          backdrop-filter: blur(4px);
        }
        .pkg-body {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .pkg-title {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 4px;
          line-height: 1.35;
        }
        .pkg-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #888;
          margin: 0 0 10px;
        }
        .pkg-desc {
          font-size: 13px;
          color: #777;
          line-height: 1.6;
          margin: 0 0 18px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pkg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .btn-details {
          background: #1BBC9B;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 22px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-details:hover {
          background: #17a789;
          transform: scale(1.03);
        }
        .price-right { text-align: right; }
        .price-from {
          font-size: 11px;
          color: #aaa;
          display: block;
        }
        .price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .price-main {
          font-size: 22px;
          font-weight: 800;
          color: #1a1a2e;
        }
        .price-orig {
          font-size: 12px;
          color: #bbb;
          text-decoration: line-through;
        }
      `}</style>
    </div>
  );
};

// ─── Collapsible Section ──────────────────────────────────────────────────────
const CollapsibleSection = ({
  label,
  children,
  defaultOpen = true,
}: {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="cf-section">
      <button className="cf-btn" onClick={() => setOpen(!open)}>
        <span className="cf-label">{label}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="#999" strokeWidth="2.5"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "0.2s", flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && <div className="cf-body">{children}</div>}
      <style jsx>{`
        .cf-section {
          padding: 16px 0;
          border-bottom: 1px solid #efefef;
        }
        .cf-btn {
          background: none;
          border: none;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 0;
        }
        .cf-label {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }
        .cf-body { margin-top: 12px; }
      `}</style>
    </div>
  );
};

// ─── Checkbox Grid ────────────────────────────────────────────────────────────
const CheckboxGrid = ({
  items,
  selected,
  toggle,
  cols = 2,
}: {
  items: string[];
  selected: string[];
  toggle: (v: string) => void;
  cols?: number;
}) => (
  <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "8px 12px" }}>
    {items.map((item) => (
      <label key={item} className="cb-item">
        <input type="checkbox" checked={selected.includes(item)} onChange={() => toggle(item)} />
        <span className="cb-box" />
        <span className="cb-text">{item}</span>
      </label>
    ))}
    <style jsx>{`
      .cb-item {
        display: flex;
        align-items: center;
        gap: 7px;
        cursor: pointer;
        font-size: 13px;
      }
      .cb-item input { display: none; }
      .cb-box {
        width: 15px;
        height: 15px;
        border: 1.5px solid #ccc;
        border-radius: 3px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s;
        background: #fff;
      }
      .cb-item input:checked + .cb-box {
        background: #1BBC9B;
        border-color: #1BBC9B;
      }
      .cb-item input:checked + .cb-box::after {
        content: '';
        width: 4px;
        height: 7px;
        border: 1.5px solid #fff;
        border-top: none;
        border-left: none;
        transform: rotate(42deg) translateY(-1px);
        display: block;
      }
      .cb-text {
        color: #555;
        user-select: none;
        line-height: 1.3;
        text-transform: capitalize;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}</style>
  </div>
);

// ─── Sidebar ──────────────────────────────────────────────────────────────────
type SidebarProps = {
  uniqueTypes: string[];
  uniqueDurations: number[];
  uniqueCities: string[];
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  selectedTypes: string[];
  toggleType: (v: string) => void;
  selectedDurations: number[];
  toggleDuration: (v: number) => void;
  selectedCities: string[];
  toggleCity: (v: string) => void;
  showPromo: boolean;
  setShowPromo: (v: boolean) => void;
  onClose?: () => void;
};

const Sidebar = (props: SidebarProps) => {
  const {
    uniqueTypes, uniqueDurations, uniqueCities,
    maxPrice, setMaxPrice,
    selectedTypes, toggleType,
    selectedDurations, toggleDuration,
    selectedCities, toggleCity,
    showPromo, setShowPromo,
    onClose,
  } = props;

  return (
    <div>
      {/* Destination cities — datadan */}
      {uniqueCities.length > 0 && (
        <div className="top-section">
          <p className="sf-label">Select your destination :</p>
          <CheckboxGrid
            items={uniqueCities}
            selected={selectedCities}
            toggle={toggleCity}
            cols={1}
          />
        </div>
      )}

      {/* Package types — datadan */}
      {uniqueTypes.length > 0 && (
        <CollapsibleSection label="Typologies :">
          <CheckboxGrid
            items={uniqueTypes}
            selected={selectedTypes}
            toggle={toggleType}
            cols={2}
          />
        </CollapsibleSection>
      )}

      {/* Max Price */}
      <CollapsibleSection label="Max Price :">
        <div className="price-row-hdr">
          <span className="price-val">$ {maxPrice.toLocaleString()}</span>
        </div>
        <input
          type="range" min={100} max={5000} step={50}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="sf-range"
        />
        <div className="range-ends">
          <span>$100</span><span>$5,000</span>
        </div>
        <label className="promo-label">
          <input
            type="checkbox"
            checked={showPromo}
            onChange={(e) => setShowPromo(e.target.checked)}
          />
          <span className="p-cb-box" />
          <span className="p-cb-text">See only promotions</span>
        </label>
      </CollapsibleSection>

      {/* Durations — datadan */}
      {uniqueDurations.length > 0 && (
        <CollapsibleSection label="Durations :">
          <CheckboxGrid
            items={uniqueDurations.map((d) => `${d} Days`)}
            selected={selectedDurations.map((d) => `${d} Days`)}
            toggle={(v) => toggleDuration(Number(v.replace(" Days", "")))}
            cols={2}
          />
        </CollapsibleSection>
      )}

      {onClose && (
        <button className="apply-btn" onClick={onClose}>Apply Filters</button>
      )}

      <style jsx>{`
        .top-section {
          padding: 0 0 16px;
          border-bottom: 1px solid #efefef;
        }
        .sf-label {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin: 0 0 10px;
        }
        .price-row-hdr {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 8px;
        }
        .price-val {
          font-size: 14px;
          font-weight: 700;
          color: #333;
        }
        .sf-range {
          width: 100%;
          -webkit-appearance: none;
          height: 3px;
          background: #e0e0e0;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          margin-bottom: 6px;
        }
        .sf-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fff;
          border: 2.5px solid #333;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }
        .range-ends {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #bbb;
          margin-bottom: 10px;
        }
        .promo-label {
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          margin-top: 4px;
        }
        .promo-label input { display: none; }
        .p-cb-box {
          width: 15px;
          height: 15px;
          border: 1.5px solid #ccc;
          border-radius: 3px;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          background: #fff;
        }
        .promo-label input:checked + .p-cb-box {
          background: #1BBC9B;
          border-color: #1BBC9B;
        }
        .promo-label input:checked + .p-cb-box::after {
          content: '';
          width: 4px;
          height: 7px;
          border: 1.5px solid #fff;
          border-top: none;
          border-left: none;
          transform: rotate(42deg) translateY(-1px);
          display: block;
        }
        .p-cb-text { font-size: 13px; color: #555; user-select: none; }
        .apply-btn {
          width: 100%;
          margin-top: 20px;
          padding: 13px;
          background: #1BBC9B;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

// ─── Pagination ───────────────────────────────────────────────────────────────
const Pagination = ({ total, perPage }: { total: number; perPage: number }) => {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(total / perPage));
  if (pages <= 1) return null;
  return (
    <div className="pagination">
      {Array.from({ length: Math.min(pages, 6) }, (_, i) => i + 1).map((p) => (
        <button key={p} className={`page-btn${page === p ? " active" : ""}`} onClick={() => setPage(p)}>
          {p}
        </button>
      ))}
      <style jsx>{`
        .pagination { display: flex; gap: 6px; justify-content: center; padding: 32px 0 0; }
        .page-btn {
          width: 34px; height: 34px;
          border-radius: 8px;
          border: 1.5px solid #e0e0e0;
          background: #fff;
          font-size: 13px; font-weight: 600; color: #555;
          cursor: pointer; transition: all 0.15s;
        }
        .page-btn:hover { border-color: #1BBC9B; color: #1BBC9B; }
        .page-btn.active { background: #1BBC9B; border-color: #1BBC9B; color: #fff; }
      `}</style>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const SearchFilter = ({
  packages,
  uniqueTypes,
  uniqueDurations,
  uniqueCities,
}: {
  packages: Package[];
  uniqueTypes: string[];
  uniqueDurations: number[];
  uniqueCities: string[];
}) => {
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<number[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [showPromo, setShowPromo] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggle<T>(arr: T[], val: T, set: (v: T[]) => void) {
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  }

  const filtered = useMemo(() => {
    return (packages || []).filter((pkg) => {
      if (!pkg.is_active) return false;
      if (pkg.total_price > maxPrice) return false;
      if (showPromo && pkg.discount_pct === 0) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(pkg.package_type)) return false;
      if (selectedDurations.length > 0 && !selectedDurations.includes(pkg.duration_days)) return false;
      if (selectedCities.length > 0 && !selectedCities.includes(pkg.departure_city)) return false;
      return true;
    });
  }, [packages, maxPrice, showPromo, selectedTypes, selectedDurations, selectedCities]);

  const activeCount =
    selectedTypes.length + selectedDurations.length + selectedCities.length +
    (showPromo ? 1 : 0) + (maxPrice < 5000 ? 1 : 0);

  const sidebarProps: SidebarProps = {
    uniqueTypes, uniqueDurations, uniqueCities,
    maxPrice, setMaxPrice,
    selectedTypes,
    toggleType: (v) => toggle(selectedTypes, v, setSelectedTypes),
    selectedDurations,
    toggleDuration: (v) => toggle(selectedDurations, v, setSelectedDurations),
    selectedCities,
    toggleCity: (v) => toggle(selectedCities, v, setSelectedCities),
    showPromo, setShowPromo,
  };

  return (
    <div className="sf-root">
      <div className="sf-layout">
        {/* Desktop Sidebar */}
        <div className="sidebar-col">
          <Sidebar {...sidebarProps} />
        </div>

        {/* Cards */}
        <div className="cards-col">
          <div className="mobile-bar">
            <button className="mobile-filter-btn" onClick={() => setDrawerOpen(true)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
              </svg>
              Filters
              {activeCount > 0 && <span className="filter-dot">{activeCount}</span>}
            </button>
            <span className="results-txt">{filtered.length} tours found</span>
          </div>

          <div className="desktop-bar">
            <span className="results-txt">{filtered.length} tours found</span>
            {activeCount > 0 && (
              <button
                className="clear-btn"
                onClick={() => {
                  setSelectedTypes([]);
                  setSelectedDurations([]);
                  setSelectedCities([]);
                  setShowPromo(false);
                  setMaxPrice(5000);
                }}
              >
                Clear all
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="empty">
              <span>🌍</span>
              <p>No tours found — try adjusting filters</p>
            </div>
          ) : (
            <div className="cards-grid">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          )}

          <Pagination total={filtered.length} perPage={6} />
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="drawer-bg" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-box" onClick={(e) => e.stopPropagation()}>
            <Sidebar {...sidebarProps} onClose={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}

      <style jsx>{`
        .sf-root {
          background: #f5f5f5;
          min-height: 80vh;
          padding: 40px 0 60px;
        }
        .sf-layout {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 36px;
          align-items: start;
        }
        .sidebar-col {
          background: #fff;
          border-radius: 12px;
          padding: 22px 20px;
          box-shadow: 0 1px 8px rgba(0,0,0,0.05);
          position: sticky;
          top: 90px;
        }
        .mobile-bar {
          display: none;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .mobile-filter-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 18px;
          background: #1a2e2d;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }
        .filter-dot {
          background: #FF4D6D;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .desktop-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .results-txt { font-size: 13px; color: #888; }
        .clear-btn {
          font-size: 12px;
          color: #FF4D6D;
          background: none;
          border: 1px solid #FF4D6D;
          border-radius: 7px;
          padding: 5px 12px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .clear-btn:hover { background: #FF4D6D; color: #fff; }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .empty {
          text-align: center;
          padding: 80px 20px;
          color: #aaa;
          font-size: 15px;
        }
        .empty span { font-size: 48px; display: block; margin-bottom: 12px; }
        .drawer-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          z-index: 200;
          display: flex;
          align-items: flex-end;
        }
        .drawer-box {
          background: #fff;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          border-radius: 20px 20px 0 0;
          padding: 24px 20px 32px;
        }
        @media (max-width: 768px) {
          .sf-layout { grid-template-columns: 1fr; padding: 0 16px; }
          .sidebar-col { display: none; }
          .mobile-bar { display: flex; }
          .desktop-bar { display: none; }
          .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 480px) {
          .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default SearchFilter;