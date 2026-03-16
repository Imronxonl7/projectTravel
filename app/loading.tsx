"use client";

import React, { useEffect, useState } from "react";

const Loading = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-root">
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Grid pattern overlay */}
      <div className="grid-overlay" />

      {/* Center content */}
      <div className="loading-center">
        {/* Plane animation */}
        <div className="plane-wrapper">
          <div className="plane-track">
            <svg className="plane-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                fill="currentColor"
              />
            </svg>
            <div className="plane-trail" />
          </div>
        </div>

        {/* Logo / Brand */}
        <div className="brand-wrap">
          <div className="brand-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#1BBC9B" strokeWidth="2"/>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#1BBC9B"/>
            </svg>
          </div>
          <span className="brand-name">TravelHub</span>
        </div>

        {/* Spinner rings */}
        <div className="spinner-wrap">
          <div className=" ring-1" />
          <div className=" ring-2" />
          <div className=" ring-3" />
          <div className="ring-dot" />
        </div>

        {/* Text */}
        <div className="loading-text-wrap">
          <p className="loading-text">
            Exploring destinations
            <span className="dots">{".".repeat(dots)}</span>
          </p>
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
        </div>
      </div>

      <style>{`
        .loading-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #0a0f1e;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* ── Background blobs ── */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.25;
          animation: blobFloat 6s ease-in-out infinite;
        }
        .blob-1 {
          width: 500px;
          height: 500px;
          background: #1BBC9B;
          top: -150px;
          left: -150px;
          animation-delay: 0s;
        }
        .blob-2 {
          width: 400px;
          height: 400px;
          background: #0099FF;
          bottom: -100px;
          right: -100px;
          animation-delay: 2s;
        }
        .blob-3 {
          width: 300px;
          height: 300px;
          background: #7C3AED;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 4s;
        }
        @keyframes blobFloat {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.1) translateY(-20px); }
        }
        .blob-3 {
          animation: blobFloat3 6s ease-in-out infinite;
          animation-delay: 4s;
        }
        @keyframes blobFloat3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }

        /* ── Grid overlay ── */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(27,188,155,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27,188,155,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── Center ── */
        .loading-center {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        /* ── Plane ── */
        .plane-wrapper {
          width: 260px;
          height: 36px;
          position: relative;
          overflow: hidden;
        }
        .plane-track {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          animation: planeMove 2.8s ease-in-out infinite;
        }
        .plane-icon {
          width: 32px;
          height: 32px;
          color: #1BBC9B;
          filter: drop-shadow(0 0 8px rgba(27,188,155,0.8));
          transform: rotate(45deg);
        }
        .plane-trail {
          position: absolute;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          width: 0px;
          height: 2px;
          background: linear-gradient(to left, transparent, #1BBC9B);
          animation: trailGrow 2.8s ease-in-out infinite;
        }
        @keyframes planeMove {
          0% { left: -40px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 280px; opacity: 0; }
        }
        @keyframes trailGrow {
          0% { width: 0; }
          50% { width: 80px; }
          100% { width: 0; }
        }

        /* ── Brand ── */
        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand-icon {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .brand-name {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
        }

        /* ── Spinner rings ── */
        .spinner-wrap {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid transparent;
          animation: spin 1.5s linear infinite;
        }
        .ring-1 {
          width: 90px;
          height: 90px;
          border-top-color: #1BBC9B;
          border-right-color: rgba(27,188,155,0.3);
          animation-duration: 1.5s;
        }
        .ring-2 {
          width: 68px;
          height: 68px;
          border-top-color: #0099FF;
          border-left-color: rgba(0,153,255,0.3);
          animation-duration: 2s;
          animation-direction: reverse;
        }
        .ring-3 {
          width: 46px;
          height: 46px;
          border-top-color: rgba(27,188,155,0.6);
          border-bottom-color: rgba(27,188,155,0.2);
          animation-duration: 1.2s;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ring-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #1BBC9B;
          box-shadow: 0 0 12px rgba(27,188,155,0.9);
          animation: dotPulse 1.5s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }

        /* ── Text & progress ── */
        .loading-text-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .loading-text {
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          letter-spacing: 1px;
          font-style: italic;
          min-width: 220px;
          text-align: center;
        }
        .dots {
          color: #1BBC9B;
          font-style: normal;
          font-weight: 700;
        }
        .progress-bar {
          width: 200px;
          height: 3px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #1BBC9B, #0099FF);
          border-radius: 3px;
          animation: progressPing 2s ease-in-out infinite;
        }
        @keyframes progressPing {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loading;