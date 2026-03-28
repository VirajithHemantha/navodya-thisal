import React, { useMemo, useState, useEffect } from "react";

export function EnvelopeOpening({ onComplete, onMusicStart }: { onComplete: () => void, onMusicStart?: () => void }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      if (onMusicStart) onMusicStart();
      const timer = setTimeout(() => {
        onComplete();
      }, 6000); // Wait 6 seconds so they can read the inner card before transitioning
      return () => clearTimeout(timer);
    }
  }, [opened, onComplete, onMusicStart]);

  const threads = useMemo(
    () => [
      { top: "43%", rotate: -8, width: "100%", left: "0%" },
      { top: "50%", rotate: 0, width: "100%", left: "0%" },
      { top: "57%", rotate: 8, width: "100%", left: "0%" },
    ],
    []
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Great+Vibes&family=Inter:wght@400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        html, body, #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
        }

        body {
          font-family: "Cormorant Garamond", serif;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.95), rgba(242,236,228,0.96)),
            linear-gradient(180deg, #f8f3ee 0%, #efe7df 100%);
          color: #1f1f1f;
          overflow-x: hidden;
        }

        button {
          font: inherit;
        }

        .app-shell {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 10%, rgba(255,255,255,0.8), transparent 35%),
            radial-gradient(circle at 10% 20%, rgba(243,230,210,0.5), transparent 30%),
            radial-gradient(circle at 90% 15%, rgba(213,225,243,0.35), transparent 28%),
            linear-gradient(180deg, #f7f2eb 0%, #ede3d9 100%);
        }

        .paper-noise {
          position: absolute;
          inset: 0;
          background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }

        .top-floral-wash {
          position: absolute;
          inset: 0 0 auto 0;
          height: 320px;
          background:
            radial-gradient(circle at 12% 40%, rgba(213, 168, 160, 0.18), transparent 20%),
            radial-gradient(circle at 24% 20%, rgba(162, 183, 160, 0.16), transparent 18%),
            radial-gradient(circle at 82% 22%, rgba(209, 189, 152, 0.18), transparent 18%),
            radial-gradient(circle at 92% 38%, rgba(137, 156, 182, 0.14), transparent 18%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-stage {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          z-index: 1;
        }

        .envelope-scene {
          position: relative;
          width: min(1100px, 100%);
          min-height: 760px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glow-behind-envelope {
          position: absolute;
          width: 680px;
          height: 680px;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(223,231,242,0.45) 35%, rgba(255,255,255,0) 72%);
          filter: blur(15px);
          z-index: 0;
          pointer-events: none;
        }

        .invitation-site {
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%) scale(${opened ? 1 : 0.92});
          width: min(820px, calc(100vw - 40px));
          min-height: 620px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.98), rgba(252,249,245,0.98));
          border-radius: 34px;
          box-shadow:
            0 40px 100px rgba(61, 43, 29, 0.18),
            inset 0 1px 0 rgba(255,255,255,0.85);
          border: 1px solid rgba(190, 176, 161, 0.35);
          z-index: 1;
          opacity: ${opened ? 1 : 0};
          transition:
            transform 1.35s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 1.05s ease;
          overflow: hidden;
          pointer-events: ${opened ? "auto" : "none"};
        }

        .site-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(210, 198, 185, 0.45);
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(14px);
        }

        .brand-mini {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Inter", sans-serif;
          color: #5b4a3e;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .brand-badge {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #204f90 0%, #17396a 100%);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 10px 24px rgba(23, 57, 106, 0.28);
        }

        .nav-mini {
          display: flex;
          align-items: center;
          gap: 18px;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          color: #7b6c61;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .site-content {
          position: relative;
          padding: 36px 28px 28px;
        }

        .site-hero {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 52px 26px 34px;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.95), rgba(255,255,255,0) 35%),
            linear-gradient(135deg, #f7efe6 0%, #fdfaf7 35%, #eef3fa 100%);
          border: 1px solid rgba(206, 191, 175, 0.36);
        }

        .site-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 8% 16%, rgba(205, 163, 158, 0.18), transparent 13%),
            radial-gradient(circle at 90% 12%, rgba(52, 94, 162, 0.12), transparent 14%),
            radial-gradient(circle at 72% 85%, rgba(167, 188, 167, 0.16), transparent 16%);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 24px;
          align-items: center;
        }

        .eyebrow {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #8e735e;
          margin-bottom: 14px;
        }

        .headline-script {
          font-family: "Great Vibes", cursive;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.95;
          color: #183a69;
          margin: 0 0 10px;
        }

        .headline-sub {
          font-size: clamp(18px, 2.4vw, 26px);
          color: #51443b;
          margin: 0 0 18px;
        }

        .hero-copy {
          max-width: 520px;
          font-size: 18px;
          line-height: 1.7;
          color: #67574b;
          margin-bottom: 24px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .hero-btn {
          border: none;
          border-radius: 999px;
          padding: 14px 22px;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .hero-btn:hover {
          transform: translateY(-2px);
        }

        .hero-btn.primary {
          background: linear-gradient(135deg, #1f4f92 0%, #173762 100%);
          color: #fff;
          box-shadow: 0 16px 34px rgba(23, 57, 106, 0.22);
        }

        .hero-btn.secondary {
          background: rgba(255,255,255,0.8);
          color: #5c4c40;
          border: 1px solid rgba(190, 176, 161, 0.4);
        }

        .photo-card {
          position: relative;
          height: 360px;
          border-radius: 28px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(24,58,105,0.08), rgba(24,58,105,0.18)),
            url("https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
          box-shadow: 0 30px 60px rgba(45, 40, 34, 0.16);
        }

        .photo-card::after {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 45%;
          background: linear-gradient(180deg, transparent, rgba(36, 27, 20, 0.55));
        }

        .photo-badge {
          position: absolute;
          left: 18px;
          top: 18px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.84);
          backdrop-filter: blur(10px);
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5d4e44;
          z-index: 1;
        }

        .date-chip {
          position: absolute;
          bottom: 18px;
          left: 18px;
          right: 18px;
          padding: 16px 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.16);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          z-index: 1;
        }

        .date-chip strong {
          display: block;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .date-chip span {
          display: block;
          margin-top: 4px;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.92;
        }

        .details-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .detail-card {
          background: rgba(255,255,255,0.74);
          border: 1px solid rgba(208, 193, 178, 0.38);
          border-radius: 22px;
          padding: 22px 18px;
          box-shadow: 0 12px 26px rgba(82, 62, 46, 0.06);
        }

        .detail-label {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a7f68;
          margin-bottom: 10px;
        }

        .detail-value {
          font-size: 26px;
          color: #23497f;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .detail-copy {
          font-size: 16px;
          line-height: 1.6;
          color: #6b5b50;
        }

        .envelope-wrapper {
          position: relative;
          width: 440px;
          height: 720px;
          z-index: 3;
          transform: scale(${opened ? 0.88 : 1}) translateX(${opened ? "280px" : "0"});
          opacity: 1;
          transition: transform 1.35s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: ${opened ? "none" : "auto"};
        }

        .envelope-shadow {
          position: absolute;
          inset: auto 6% 2% 10%;
          height: 48px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(40, 29, 18, 0.24) 0%, rgba(40,29,18,0.04) 60%, transparent 75%);
          filter: blur(14px);
          z-index: 0;
        }

        .invitation-card {
          position: absolute;
          top: 0;
          left: 7%;
          width: 87%;
          height: 100%;
          border-radius: 10px;
          background:
            linear-gradient(180deg, #f8effc 0%, #ecdcf5 100%);
          box-shadow:
            0 24px 60px rgba(65, 48, 34, 0.16),
            inset 0 1px 0 rgba(255,255,255,0.95);
          padding: 20px;
          z-index: 1;
          transform:
            translateX(${opened ? "22%" : "0"})
            scale(${opened ? 0.98 : 1});
          transition: transform 1.35s cubic-bezier(0.22, 1, 0.36, 1);
          border: 1px solid rgba(210, 198, 184, 0.42);
          overflow: hidden;
        }

        .card-frame {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          border: 2px solid rgba(104, 71, 154, 0.55);
          position: relative;
          padding: 42px 26px 34px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.68), rgba(255,255,255,0.16));
        }

        .card-frame::before {
          content: "";
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(104, 71, 154, 0.48);
          border-radius: 4px;
          pointer-events: none;
        }

        .card-frame::after {
          content: "";
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(104, 71, 154, 0.2);
          border-radius: 2px;
          pointer-events: none;
        }

        .card-frame > * {
          position: relative;
          z-index: 1;
        }

        .card-corner-image {
          position: absolute;
          width: 86px;
          height: 86px;
          object-fit: contain;
          pointer-events: none;
          z-index: 0;
          opacity: 0.95;
          filter: drop-shadow(0 2px 3px rgba(92, 41, 117, 0.2));
        }

        .card-corner-image.top-left {
          top: 6px;
          left: 6px;
        }

        .card-corner-image.bottom-right {
          right: 6px;
          bottom: 6px;
          transform: rotate(180deg);
        }

        .card-monogram {
          width: 88px;
          height: 88px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: #5c2975;
          border: 1px solid rgba(92, 41, 117, 0.15);
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.8), rgba(255,255,255,0.3));
          box-shadow: 0 16px 34px rgba(92, 41, 117, 0.08);
          font-size: 34px;
          font-family: "Great Vibes", cursive;
          margin-bottom: 20px;
        }

        .card-kicker {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(92, 41, 117, 0.9);
          margin-bottom: 14px;
        }

        .card-title {
          font-family: "Great Vibes", cursive;
          font-size: 58px;
          line-height: 1;
          color: #4a2060;
          margin: 0;
        }

        .card-subtitle {
          margin: 16px 0 26px;
          font-size: 18px;
          line-height: 1.7;
          color: rgba(92, 41, 117, 0.85);
          max-width: 280px;
        }

        .card-divider {
          width: 90px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(92,41,117,0.3), transparent);
          margin-bottom: 24px;
        }

        .card-date {
          font-size: 18px;
          color: rgba(92, 41, 117, 0.9);
          margin-bottom: 10px;
          font-style: italic;
        }

        .card-day {
          font-size: 30px;
          letter-spacing: 0.08em;
          color: #4a2060;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .card-time {
          font-size: 18px;
          color: rgba(92, 41, 117, 0.85);
          margin-bottom: 18px;
        }

        .card-venue {
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.9;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(92, 41, 117, 0.9);
        }

        .envelope-sleeve {
          position: absolute;
          top: 0;
          left: ${opened ? "-70%" : "0"};
          width: 84%;
          height: 100%;
          border-radius: 10px;
          border-top-right-radius: 220px 54%;
          border-bottom-right-radius: 220px 54%;
          background:
            linear-gradient(135deg, #6c3287 0%, #4a2060 48%, #2d113f 100%);
          box-shadow:
            -18px 0 50px rgba(18, 35, 68, 0.36),
            inset 2px 0 8px rgba(255,255,255,0.18),
            inset -5px 0 14px rgba(0,0,0,0.3);
          z-index: 4;
          overflow: visible;
          transition: left 1.45s cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }

        .envelope-sleeve::before {
          content: "";
          position: absolute;
          inset: 24px 16px 24px 16px;
          border-radius: 12px 160px 160px 12px;
          border: 1px solid rgba(239, 215, 170, 0.24);
          background:
            linear-gradient(145deg, rgba(255, 233, 198, 0.12), rgba(255, 233, 198, 0) 42%),
            radial-gradient(circle at 88% 28%, rgba(255, 234, 196, 0.2), transparent 42%);
          pointer-events: none;
          z-index: 1;
        }

        .envelope-sleeve::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 12% 50%, rgba(14, 38, 71, 0.3), transparent 44%);
          pointer-events: none;
          z-index: 0;
        }

        .sleeve-texture {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0)),
            url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
          opacity: 0.2;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .sleeve-shine {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            110deg,
            transparent 18%,
            rgba(255,255,255,0.06) 28%,
            rgba(255,255,255,0.22) 44%,
            rgba(255,255,255,0.06) 58%,
            transparent 72%
          );
          background-size: 260% 100%;
          animation: shimmer 6s linear infinite;
          pointer-events: none;
        }

        .sleeve-edge {
          position: absolute;
          top: 0;
          right: 0;
          width: 54px;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.2), rgba(10,26,53,0.1));
          opacity: 0.55;
          backdrop-filter: blur(2px);
          pointer-events: none;
        }

        .sleeve-content {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
          width: 80%;
          pointer-events: none;
          opacity: ${opened ? 0 : 1};
          transition: opacity 0.6s ease;
          text-align: center;
        }

        .sleeve-names {
          font-family: "Great Vibes", cursive;
          font-size: min(42px, 9vw);
          color: #efd7aa;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.4), 0 0 15px rgba(239, 215, 170, 0.2);
          margin-bottom: 2px;
          white-space: nowrap;
          filter: drop-shadow(0 1px 3px rgba(0,0,0,0.2));
        }

        .sleeve-tagline {
          font-family: "Inter", sans-serif;
          font-size: 8px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: rgba(239, 215, 170, 0.6);
          border-top: 1px solid rgba(239, 215, 170, 0.15);
          padding-top: 8px;
          margin-top: 2px;
          white-space: nowrap;
        }

        .wax-seal {
          position: absolute;
          top: 50%;
          left: -8px;
          transform: translateY(-50%) scale(${opened ? 0.7 : 1});
          width: 62px;
          height: 62px;
          border-radius: 999px;
          border: 1px solid rgba(255, 230, 150, 0.5);
          background:
            radial-gradient(circle at 30% 30%, #f9f5d7 0%, #c49e49 20%, transparent 40%),
            radial-gradient(circle at 70% 70%, rgba(130, 80, 20, 0.8), transparent 50%),
            conic-gradient(from 15deg, #c49e49, #8a5a19, #dfbf6c, #a67c00, #c49e49);
          box-shadow:
            0 16px 30px rgba(0,0,0,0.25),
            0 0 0 3px rgba(210, 160, 60, 0.15),
            inset 0 4px 12px rgba(255,255,255,0.4),
            inset 0 -10px 16px rgba(100, 60, 10, 0.35);
          z-index: 6;
          cursor: pointer;
          opacity: ${opened ? 0 : 1};
          transition:
            transform 0.4s ease,
            opacity 0.5s ease,
            box-shadow 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: sealPulse 4.8s ease-in-out infinite;
        }

        .wax-seal:hover {
          transform: translateY(-50%) scale(1.06);
          box-shadow:
            0 22px 38px rgba(0,0,0,0.35),
            0 0 0 4px rgba(210, 160, 60, 0.25),
            inset 0 6px 12px rgba(255,255,255,0.5),
            inset 0 -12px 18px rgba(100, 60, 10, 0.45);
        }

        .wax-seal::before {
          content: "";
          position: absolute;
          inset: 5px;
          border-radius: inherit;
          border: 1px solid rgba(255, 220, 120, 0.4);
        }

        .wax-seal::after {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: inherit;
          background: radial-gradient(circle at 28% 22%, rgba(255,255,255,0.2), transparent 34%);
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .seal-decor-image {
          position: absolute;
          left: -58px;
          top: 47%;
          width: 220px;
          height: 360px;
          object-fit: contain;
          pointer-events: none;
          z-index: 5;
          opacity: ${opened ? 0 : 0.96};
          transition: opacity 0.45s ease;
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.35));
          transform: translateY(-50%) rotate(14deg);
        }

        .seal-inner {
          width: 72px;
          height: 72px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 40%),
            linear-gradient(145deg, rgba(255,255,255,0.1), rgba(120, 80, 20, 0.1));
          border: 1px solid rgba(255, 230, 150, 0.2);
          box-shadow:
            inset 0 2px 8px rgba(255,255,255,0.2),
            inset 0 -6px 10px rgba(100, 60, 20, 0.2);
          color: #d8aa4a;
        }

        .seal-leaf {
          width: 60%;
          height: 60%;
          color: #8c6a25;
          filter: drop-shadow(0px 1px 1px rgba(255,255,255,0.4)) drop-shadow(0px -1px 2px rgba(80,50,10,0.5));
          opacity: 0.9;
        }

        .seal-letters {
          font-family: "Great Vibes", cursive;
          font-size: 38px;
          color: #8c6a25;
          text-shadow: 0px 1px 1px rgba(255,255,255,0.4), 0px -1px 2px rgba(80,50,10,0.5);
          opacity: 0.9;
          line-height: 1;
        }

        .thread {
          position: absolute;
          height: 1.5px;
          background: linear-gradient(
            90deg,
            #a67c00, #d4af37, #f3e5ab, #d4af37, #8a5a19
          );
          z-index: 5;
          box-shadow: 0 1px 2px rgba(0,0,0,0.4);
          opacity: ${opened ? 0 : 1};
          transition: opacity 0.45s ease;
          pointer-events: none;
        }

        .flower-cluster {
          position: absolute;
          left: -16px;
          top: 28%;
          width: 160px;
          height: 370px;
          z-index: 4;
          opacity: ${opened ? 0 : 0.96};
          transition: opacity 0.45s ease;
          pointer-events: none;
          animation: floralFloat 6s ease-in-out infinite;
        }

        .real-flowers-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.4)) contrast(1.1) brightness(0.9);
          transform: translateY(-102px) rotate(15deg) scale(1.36);
        }

        .flower-bundle-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
        }

        .stem {
          position: absolute;
          height: 240px;
          width: 2px;
          background: linear-gradient(180deg, #c4a77d, #9a7b4f, #7a5f3d);
          border-radius: 999px;
          box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
          transform-origin: center 180px;
        }

        .click-hint {
          position: absolute;
          bottom: -46px;
          left: 50%;
          transform: translateX(-50%);
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #8a7059;
          opacity: ${opened ? 0 : 0.78};
          transition: opacity 0.35s ease;
          white-space: nowrap;
        }

        .floating-note {
          position: absolute;
          top: 26px;
          left: 28px;
          padding: 12px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(209, 192, 176, 0.38);
          box-shadow: 0 10px 25px rgba(72, 57, 43, 0.08);
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8f715c;
          opacity: ${opened ? 1 : 0};
          transform: translateY(${opened ? "0" : "10px"});
          transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
          z-index: 2;
        }

        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }

        @keyframes sealPulse {
          0%,
          100% {
            filter: saturate(1) brightness(1);
          }
          50% {
            filter: saturate(1.08) brightness(1.04);
          }
        }

        @keyframes floralFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }

        @keyframes sparkleDrift {
          0%,
          100% {
            transform: translateY(0) scale(0.9);
            opacity: 0.28;
          }
          50% {
            transform: translateY(-5px) scale(1.2);
            opacity: 0.9;
          }
        }

        @media (max-width: 980px) {
          .envelope-scene {
            min-height: 940px;
          }

          .invitation-site {
            width: min(720px, calc(100vw - 28px));
            top: auto;
            bottom: 24px;
            transform: translateX(-50%) scale(${opened ? 1 : 0.96});
          }

          .hero-inner {
            grid-template-columns: 1fr;
          }

          .photo-card {
            height: 280px;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .envelope-wrapper {
            transform: scale(${opened ? 0.82 : 1}) translateY(${opened ? "-140px" : "0"});
          }
        }

        @media (max-width: 640px) {
          .hero-stage {
            padding: 18px 10px 26px;
          }

          .envelope-scene {
            min-height: 900px;
          }

          .envelope-wrapper {
            width: 320px;
            height: 540px;
          }

          .wax-seal {
            width: 56px;
            height: 56px;
            left: -8px;
          }

          .seal-inner {
            width: 62px;
            height: 62px;
          }

          .seal-letters {
            font-size: 28px;
          }

          .flower-cluster {
            right: -36px;
            width: 146px;
            height: 286px;
          }

          .real-flowers-img {
            transform: translateY(-90px) rotate(15deg) scale(1.42);
          }

          .seal-decor-image {
            left: -42px;
            top: 48%;
            width: 178px;
            height: 288px;
          }

          .invitation-card {
            padding: 14px;
          }

          .card-frame {
            padding: 28px 16px 24px;
          }

          .card-frame::before {
            inset: 8px;
          }

          .card-frame::after {
            inset: 14px;
          }

          .card-corner-image {
            width: 62px;
            height: 62px;
          }

          .card-corner-image.top-left {
            top: 6px;
            left: 6px;
          }

          .card-corner-image.bottom-right {
            right: 6px;
            bottom: 6px;
          }

          .card-title {
            font-size: 42px;
          }

          .card-subtitle {
            font-size: 16px;
            max-width: 230px;
          }

          .card-day {
            font-size: 22px;
          }

          .card-venue {
            font-size: 11px;
            line-height: 1.65;
            letter-spacing: 0.08em;
            max-width: 220px;
            margin: 0 auto;
            white-space: normal;
            overflow-wrap: anywhere;
          }

          .invitation-site {
            min-height: 560px;
            border-radius: 24px;
          }

          .site-topbar {
            padding: 14px 16px;
          }

          .nav-mini {
            gap: 10px;
            font-size: 10px;
          }

          .site-content {
            padding: 18px 14px 16px;
          }

          .site-hero {
            padding: 26px 16px 18px;
            border-radius: 22px;
          }

          .hero-copy {
            font-size: 16px;
          }

          .photo-card {
            height: 220px;
            border-radius: 22px;
          }

          .headline-script {
            font-size: 48px;
          }

          .headline-sub {
            font-size: 18px;
          }

          .floating-note {
            left: 14px;
            right: 14px;
            top: 14px;
            text-align: center;
          }
        }
      `}</style>

      <div className="app-shell">
        <div className="paper-noise" />
        <div className="top-floral-wash" />

        <div className="hero-stage">
          <div className="envelope-scene">
            <div className="glow-behind-envelope" />

            {/* Envelope */}
            <div
              className="envelope-wrapper"
              role="button"
              tabIndex={opened ? -1 : 0}
              aria-label="Open invitation"
              onClick={() => {
                if (!opened) setOpened(true);
              }}
              onKeyDown={(e) => {
                if (!opened && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setOpened(true);
                }
              }}
            >
              <div className="envelope-shadow" />

              {threads.map((t, i) => (
                <div
                  key={i}
                  className="thread"
                  style={{
                    top: t.top,
                    left: t.left,
                    width: t.width,
                    transform: `rotate(${t.rotate}deg)`,
                  }}
                />
              ))}

              <div className="flower-cluster">
                <img
                  src="/sea.png"
                  alt="Decorative motif"
                  className="real-flowers-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.setAttribute('style', 'display:block; position:relative; width:100%; height:100%; transform: translateY(-70px) rotate(15deg);');
                  }}
                />

                {/* Fallback real-looking stems structure if image is missing */}
                <div className="flower-bundle-fallback" style={{ display: 'none' }}>
                  {/* Long stems coming out the top */}
                  <div className="stem" style={{ left: "40%", transform: "rotate(-18deg)" }}>
                    <div style={{ position: "absolute", top: "0", left: "-8px", fontSize: "18px", filter: "sepia(1) hue-rotate(-30deg) saturate(1.5)" }}>🌿</div>
                  </div>
                  <div className="stem" style={{ left: "50%", transform: "rotate(-4deg)" }}>
                    <div style={{ position: "absolute", top: "-10px", left: "-6px", fontSize: "20px", filter: "sepia(1) hue-rotate(-20deg) opacity(0.8)" }}>🌾</div>
                  </div>
                  <div className="stem" style={{ left: "60%", transform: "rotate(14deg)" }}>
                    <div style={{ position: "absolute", top: "10px", left: "-6px", fontSize: "16px", filter: "sepia(0.8) hue-rotate(-30deg)" }}>🌾</div>
                  </div>
                  <div className="stem" style={{ left: "45%", transform: "rotate(-8deg)" }}>
                    <div style={{ position: "absolute", top: "30px", left: "-5px", fontSize: "14px", filter: "sepia(1) hue-rotate(10deg)" }}>🌾</div>
                  </div>
                </div>
              </div>

              <div className="invitation-card">
                <div className="card-frame">
                  <img src="/111.png" alt="" className="card-corner-image top-left" aria-hidden="true" />
                  <img src="/111.png" alt="" className="card-corner-image bottom-right" aria-hidden="true" />
                  <div className="card-kicker">Promise Of Love</div>
                  <h2 className="card-title">Dinuka & Supuni</h2>

                  <div className="card-subtitle">
                    Request the honour of your presence as they unite in marriage
                    and share in a day of love and togetherness.
                  </div>

                  <div className="card-divider" />

                  <div className="card-date">Thursday Morning</div>
                  <div className="card-day">MAY 07, 2026</div>
                  <div className="card-time">At 9:00 AM</div>

                  <div className="card-venue">
                    Seven Say Banquet Hall
                    <br />
                    Magalegoda, Veyangoda
                  </div>
                </div>
              </div>

              <div className="envelope-sleeve">
                <div className="sleeve-texture" />
                <div className="sleeve-shine" />
                <div className="sleeve-edge" />
                <div className="sleeve-content">
                </div>
              </div>

              <img
                src="/sea.png"
                alt=""
                className="seal-decor-image"
                aria-hidden="true"
              />

              <div className="click-hint">Click to open invitation</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}