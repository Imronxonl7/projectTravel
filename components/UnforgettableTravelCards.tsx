"use client";

import { Faq } from "@/types/Faq";
import React, { useState, useEffect, useCallback } from "react";


const UnforgettableTravelCards = ({ faqs}:{faqs:Faq[]}) => {
  const active = faqs
    .filter((f) => f.is_active)
    .sort((a, b) => a.sort_order - b.sort_order);

  const totalSlides = Math.ceil(active.length / 2);
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(((idx % totalSlides) + totalSlides) % totalSlides);
        setFading(false);
      }, 180);
    },
    [fading, totalSlides]
  );

  useEffect(() => {
    if (totalSlides <= 1) return;
    const t = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(t);
  }, [current, totalSlides, goTo]);

  const visible = active.slice(current * 2, current * 2 + 2);

  if (!active.length) return null;

  return (
    <div className="pb-6 sm:pb-8">
      {/* 2 cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 180ms ease" }}
      >
        {visible.map((faq) => (
          <div
            key={faq.id}
            className="rounded-2xl p-5 flex flex-col gap-3"
            style={{ backgroundColor: "#1ec6a4" }}
          >
            <p className="text-white font-bold text-sm sm:text-base leading-snug">
              {faq.question}
            </p>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
        {visible.length === 1 && <div className="hidden sm:block" />}
      </div>

      {/* Dots + arrows */}
      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Prev"
            className="w-7 h-7 rounded-full text-white flex items-center justify-center text-base"
            style={{ background: "rgba(255,255,255,0.20)" }}
          >
            ‹
          </button>

          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                height: 8,
                width: i === current ? 24 : 8,
                background:
                  i === current ? "#1ec6a4" : "rgba(255,255,255,0.40)",
              }}
            />
          ))}

          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next"
            className="w-7 h-7 rounded-full text-white flex items-center justify-center text-base"
            style={{ background: "rgba(255,255,255,0.20)" }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default UnforgettableTravelCards;