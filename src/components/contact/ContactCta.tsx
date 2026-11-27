"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/projects";

export function ContactCta() {
  return (
    <section className="py-20 bg-primary text-primary-foreground border-b border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-3">
          [ 04 // NEXT STEP ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-syne font-extrabold uppercase leading-tight">
          LOOKING FOR A PRODUCT BUILDER OR{" "}
          <span className="font-playfair italic font-normal text-secondary lowercase">
            technical team lead?
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-primary-foreground/80 max-w-xl mx-auto font-sans leading-relaxed">
          Open to Summer 2027 internships in product management, fintech, and early-stage startup operations. Let&apos;s build together.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Om%20Bhalerao%20Internship%20Inquiry`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-background text-foreground font-mono text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-opacity border border-border shadow-lg"
          >
            <Mail className="w-4 h-4 text-secondary" />
            EMAIL ME DIRECTLY
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity border border-secondary shadow-lg"
          >
            SEND A MESSAGE
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
