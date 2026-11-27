"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PERSONAL_INFO } from "@/data/projects";
import { Mail, MapPin, Copy, Check, Send, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function ContactClient() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=Message%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setStatus("sent");
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-32 pb-24 grid-bg">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-border">
            <span className="mono-tag block mb-1">[ DIRECT COMMUNICATION ]</span>
            <h1 className="text-4xl sm:text-5xl font-syne font-extrabold uppercase text-foreground">
              CONTACT
            </h1>
            <p className="mt-2 text-sm text-muted-foreground font-sans">
              Founder inquiries, summer 2027 internship discussions, and project collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Direct Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="mono-tag block">[ PRIMARY COORDINATES ]</span>

              {/* Email Card */}
              <div className="p-6 border border-border bg-card">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    PRIMARY EMAIL
                  </span>
                </div>
                <p className="font-mono text-sm text-foreground break-all">
                  {PERSONAL_INFO.email}
                </p>

                <button
                  onClick={handleCopyEmail}
                  className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-background text-foreground font-mono text-xs hover:border-secondary transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-secondary" />
                      COPIED TO CLIPBOARD
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      COPY EMAIL ADDRESS
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-6 border border-border bg-card">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    LOCATION & AVAILABILITY
                  </span>
                </div>
                <p className="font-mono text-sm text-foreground">
                  Mumbai, India (IST / UTC+5:30)
                </p>
                <p className="mt-2 text-xs text-muted-foreground font-sans">
                  Available for in-person or remote Summer 2027 internships in product, fintech and startup operations.
                </p>
              </div>

              {/* Profiles */}
              <div className="p-6 border border-border bg-card">
                <span className="mono-tag block mb-4">[ DIGITAL CHANNELS ]</span>
                <div className="flex flex-col gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-border bg-background hover:border-secondary transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-foreground" />
                      <span className="font-mono text-xs font-bold text-foreground">GITHUB</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-border bg-background hover:border-secondary transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-secondary" />
                      <span className="font-mono text-xs font-bold text-foreground">LINKEDIN</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Dispatch Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 border border-border bg-card">
                <span className="mono-tag block mb-2">[ DISPATCH FORM ]</span>
                <h3 className="text-xl font-syne font-bold uppercase text-foreground mb-6">
                  SEND A DIRECT MESSAGE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Founder / Engineering Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground font-mono text-sm focus:outline-none focus:border-secondary transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      YOUR EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="E.g., founder@startup.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground font-mono text-sm focus:outline-none focus:border-secondary transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      MESSAGE / OPPORTUNITY BRIEF
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your startup, team role, or internship project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground font-sans text-sm focus:outline-none focus:border-secondary transition-colors rounded-none resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 border border-primary bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-secondary" />
                    SEND DISPATCH -&gt;
                  </button>

                  {status === "sent" && (
                    <p className="font-mono text-xs text-secondary text-center">
                      ✓ Email client triggered with prefilled dispatch details!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
