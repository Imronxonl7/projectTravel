"use client";

import { Tour } from "@/types/Tour";
import Image from "next/image";
import React, { useState } from "react";
import Container from "./Container";

const SORT_OPTIONS = [
  { value: "default", label: "Default sorting" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
];

type CartItem = { id: string; title: string; price: number; qty: number; image: string };

const ShopPageCard = ({ tour }: { tour: Tour[] }) => {
  const [sort, setSort] = useState("default");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  const openCart = () => {
    setCartOpen(true);
    // double rAF — DOM ga mount bo'lsin, keyin transition boshlaydi
    requestAnimationFrame(() => requestAnimationFrame(() => setCartVisible(true)));
  };

  const closeCart = () => {
    setCartVisible(false);
    setTimeout(() => setCartOpen(false), 350);
  };

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const addToCart = (item: Tour) => {
    const price = item.discount_pct > 0 ? item.base_price * (1 - item.discount_pct / 100) : item.base_price;
    setCart((prev) => {
      const exists = prev.find((c) => c.id === item.id);
      if (exists) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { id: item.id, title: item.title, price, qty: 1, image: item.cover_image }];
    });
  };

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((c) => c.id !== id));
  const changeQty = (id: string, delta: number) =>
    setCart((prev) => prev.map((c) => c.id === id ? { ...c, qty: c.qty + delta } : c).filter((c) => c.qty > 0));

  const sorted = [...(tour || [])].filter((t) => t.is_active).sort((a, b) => {
    if (sort === "price-asc") return a.base_price - b.base_price;
    if (sort === "price-desc") return b.base_price - a.base_price;
    if (sort === "name-asc") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <section className="shop-section">
      <Container className="">
        {/* Top bar */}
        <div className="top-bar">
          <span className="results-txt">{sorted.length} products</span>
          <div className="top-bar-right">
            <div className="sort-wrap">
              <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <svg className="sel-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <button className="cart-btn" onClick={openCart}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
            </button>
          </div>
        </div>

        {/* Grid */}
        {sorted.length === 0 ? (
          <div className="empty"><span>🌍</span><p>No tours available</p></div>
        ) : (
          <div className="cards-grid">
            {sorted.map((item) => {
              const hasDiscount = item.discount_pct > 0;
              const discountedPrice = hasDiscount ? item.base_price * (1 - item.discount_pct / 100) : null;
              const inCart = cart.find((c) => c.id === item.id);

              return (
                <div key={item.id} className="card">
                  <div className="card-img-wrap">
                    <Image src={item.cover_image} alt={item.title} fill className="card-img"
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"/>
                    {hasDiscount && <span className="badge-sale">SALE!</span>}
                    {item.is_featured && !hasDiscount && <span className="badge-featured">Featured</span>}
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-price">
                      {hasDiscount ? (
                        <>
                          <span className="price-orig">${item.base_price.toFixed(2)}</span>
                          <span className="price-sale">${discountedPrice!.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="price-main">
                          {item.base_price > 0 ? `$${item.base_price.toFixed(2)}` : "Free"}
                        </span>
                      )}
                    </div>
                    {inCart ? (
                      <div className="qty-control">
                        <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>−</button>
                        <span className="qty-num">{inCart.qty}</span>
                        <button className="qty-btn" onClick={() => changeQty(item.id, 1)}>+</button>
                      </div>
                    ) : (
                      <button className="btn-cart" onClick={() => addToCart(item)}>Add to cart</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className={`drawer-overlay${cartVisible ? " visible" : ""}`} onClick={closeCart}>
          <div className={`drawer${cartVisible ? " open" : ""}`} onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="drawer-title">Your Cart</span>
              <button className="drawer-close" onClick={closeCart}>✕</button>
            </div>

            {cart.length === 0 ? (
              <div className="drawer-empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <p>Cart is empty</p>
              </div>
            ) : (
              <>
                <div className="drawer-items">
                  {cart.map((c) => (
                    <div key={c.id} className="drawer-item">
                      <div className="di-img-wrap">
                        <Image src={c.image} alt={c.title} fill className="di-img" sizes="64px"/>
                      </div>
                      <div className="di-info">
                        <p className="di-title">{c.title}</p>
                        <p className="di-price">${(c.price * c.qty).toFixed(2)}</p>
                        <div className="di-qty">
                          <button className="qty-btn sm" onClick={() => changeQty(c.id, -1)}>−</button>
                          <span className="qty-num sm">{c.qty}</span>
                          <button className="qty-btn sm" onClick={() => changeQty(c.id, 1)}>+</button>
                        </div>
                      </div>
                      <button className="di-remove" onClick={() => removeFromCart(c.id)}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="drawer-footer">
                  <div className="drawer-total">
                    <span>Total</span>
                    <span className="total-price">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="btn-checkout">Checkout</button>
                  <button className="btn-clear" onClick={() => setCart([])}>Clear cart</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .shop-section { background: #fff; padding: 36px 0 60px; }

        /* Top bar */
        .top-bar {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 28px; flex-wrap: wrap; gap: 12px;
        }
        .results-txt { font-size: 13px; color: #888; }
        .top-bar-right { display: flex; align-items: center; gap: 12px; }
        .sort-wrap { position: relative; display: flex; align-items: center; }
        .sort-select {
          appearance: none; padding: 8px 32px 8px 14px;
          border: 1px solid #ddd; border-radius: 6px;
          font-size: 13px; color: #555; background: #fff; cursor: pointer; outline: none;
        }
        .sel-arrow { position: absolute; right: 10px; pointer-events: none; }

        /* Cart button */
        .cart-btn {
          position: relative; background: none; border: 1.5px solid #e0e0e0;
          border-radius: 8px; padding: 7px 10px; cursor: pointer; color: #444;
          display: flex; align-items: center; transition: border-color 0.2s, color 0.2s;
        }
        .cart-btn:hover { border-color: #1BBC9B; color: #1BBC9B; }
        .cart-badge {
          position: absolute; top: -7px; right: -7px;
          background: #1BBC9B; color: #fff; font-size: 10px; font-weight: 800;
          width: 18px; height: 18px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        /* Grid */
        .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }

        /* Card */
        .card {
          background: #fff; border-radius: 10px; overflow: hidden;
          border: 1px solid #f0f0f0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex; flex-direction: column;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgba(0,0,0,0.10); }
        .card-img-wrap { position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; }
        .card-img { object-fit: cover; transition: transform 0.5s ease; }
        .card:hover .card-img { transform: scale(1.05); }
        .badge-sale {
          position: absolute; top: 10px; right: 10px;
          background: #1BBC9B; color: #fff; font-size: 10px; font-weight: 800;
          padding: 4px 10px; border-radius: 4px; letter-spacing: 0.5px; z-index: 2;
        }
        .badge-featured {
          position: absolute; top: 10px; right: 10px;
          background: #FFB800; color: #fff; font-size: 10px; font-weight: 800;
          padding: 4px 10px; border-radius: 4px; z-index: 2;
        }
        .card-body { padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
        .card-title { font-size: 15px; font-weight: 700; color: #1a1a2e; text-align: center; margin: 0; line-height: 1.35; }
        .card-price { display: flex; align-items: center; gap: 8px; }
        .price-main { font-size: 15px; font-weight: 600; color: #333; }
        .price-orig { font-size: 13px; color: #bbb; text-decoration: line-through; }
        .price-sale { font-size: 15px; font-weight: 700; color: #1BBC9B; }
        .btn-cart {
          margin-top: 4px; background: #1BBC9B; color: #fff; border: none;
          border-radius: 6px; padding: 9px 22px; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: background 0.2s, transform 0.15s; white-space: nowrap;
        }
        .btn-cart:hover { background: #17a789; transform: scale(1.03); }

        /* Qty control */
        .qty-control {
          display: flex; align-items: center;
          border: 1.5px solid #1BBC9B; border-radius: 6px; overflow: hidden; margin-top: 4px;
        }
        .qty-btn {
          background: none; border: none; width: 32px; height: 34px;
          font-size: 16px; font-weight: 700; color: #1BBC9B; cursor: pointer;
          transition: background 0.15s; display: flex; align-items: center; justify-content: center;
        }
        .qty-btn:hover { background: #e8f9f6; }
        .qty-btn.sm { width: 28px; height: 28px; font-size: 14px; }
        .qty-num {
          padding: 0 10px; font-size: 14px; font-weight: 700; color: #1a1a2e;
          border-left: 1.5px solid #1BBC9B; border-right: 1.5px solid #1BBC9B;
          height: 34px; display: flex; align-items: center;
        }
        .qty-num.sm { height: 28px; padding: 0 8px; font-size: 13px; }

        /* Empty */
        .empty { text-align: center; padding: 80px 20px; color: #aaa; font-size: 15px; }
        .empty span { font-size: 48px; display: block; margin-bottom: 12px; }

        /* ── Cart Drawer — silliq animation ── */
        .drawer-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0);
          z-index: 300;
          display: flex; justify-content: flex-end;
          transition: background 0.35s ease;
        }
        .drawer-overlay.visible {
          background: rgba(0,0,0,0.35);
        }
        .drawer {
          background: #fff;
          width: 360px; max-width: 100vw; height: 100%;
          display: flex; flex-direction: column;
          box-shadow: -4px 0 24px rgba(0,0,0,0.12);
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .drawer.open {
          transform: translateX(0);
        }
        .drawer-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px; border-bottom: 1px solid #f0f0f0;
        }
        .drawer-title { font-size: 18px; font-weight: 700; color: #1a1a2e; }
        .drawer-close {
          background: #f5f5f5; border: none; border-radius: 8px;
          width: 32px; height: 32px; cursor: pointer; font-size: 14px; color: #555;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
        }
        .drawer-close:hover { background: #ebebeb; }
        .drawer-empty {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 12px; color: #bbb; font-size: 14px;
        }
        .drawer-items {
          flex: 1; overflow-y: auto; padding: 16px 24px;
          display: flex; flex-direction: column; gap: 16px;
        }
        .drawer-item {
          display: flex; gap: 14px; align-items: flex-start;
          padding-bottom: 16px; border-bottom: 1px solid #f5f5f5;
        }
        .di-img-wrap {
          position: relative; width: 64px; height: 64px;
          border-radius: 8px; overflow: hidden; flex-shrink: 0;
        }
        .di-img { object-fit: cover; }
        .di-info { flex: 1; }
        .di-title { font-size: 13px; font-weight: 600; color: #1a1a2e; margin: 0 0 4px; line-height: 1.35; }
        .di-price { font-size: 14px; font-weight: 700; color: #1BBC9B; margin: 0 0 8px; }
        .di-qty {
          display: flex; align-items: center;
          border: 1.5px solid #e0e0e0; border-radius: 6px; overflow: hidden; width: fit-content;
        }
        .di-remove {
          background: none; border: none; cursor: pointer; padding: 4px;
          flex-shrink: 0; opacity: 0.6; transition: opacity 0.15s;
        }
        .di-remove:hover { opacity: 1; }
        .drawer-footer { padding: 20px 24px; border-top: 1px solid #f0f0f0; display: flex; flex-direction: column; gap: 10px; }
        .drawer-total { display: flex; justify-content: space-between; font-size: 15px; font-weight: 600; color: #333; margin-bottom: 4px; }
        .total-price { color: #1a1a2e; font-size: 18px; font-weight: 800; }
        .btn-checkout {
          background: #1BBC9B; color: #fff; border: none; border-radius: 8px;
          padding: 13px; font-size: 15px; font-weight: 700; cursor: pointer; transition: background 0.2s;
        }
        .btn-checkout:hover { background: #17a789; }
        .btn-clear {
          background: none; border: 1.5px solid #e0e0e0; border-radius: 8px;
          padding: 10px; font-size: 13px; color: #888; cursor: pointer; transition: all 0.15s;
        }
        .btn-clear:hover { border-color: #FF4D6D; color: #FF4D6D; }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .cards-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
        @media (max-width: 768px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .shop-section { padding: 24px 0 48px; }
          .drawer { width: 100vw; }
        }
        @media (max-width: 480px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .card-title { font-size: 13px; }
          .btn-cart { padding: 8px 14px; font-size: 12px; }
          .card-body { padding: 12px 10px; gap: 6px; }
        }
        @media (max-width: 360px) { .cards-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
};

export default ShopPageCard;