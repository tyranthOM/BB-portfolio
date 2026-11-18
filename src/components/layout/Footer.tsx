"use client";

import React from "react";
import Link from "next/link";
import { portfolioContent } from "@/data/content";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <Link className="footer-brand" href="#home">
          OB<span>© 2026 OM BHALERAO</span>
        </Link>

        <a
          className="footer-note"
          href={portfolioContent.personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD RESUME ↓
        </a>

        <button
          onClick={scrollToTop}
          type="button"
          className="back-top cursor-pointer"
          style={{ display: "inline-flex" }}
        >
          BACK TO THE SURFACE ↑
        </button>
      </div>

      <p className="theme-note">An independent portfolio inspired by Breaking Bad.</p>
    </footer>
  );
}
