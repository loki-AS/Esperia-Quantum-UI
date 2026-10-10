import React from 'react';
import { MotionButton, CinematicReveal } from './MotionWrappers';

interface FooterProps {
  activePage?:
    | 'home'
    | 'what-we-do'
    | 'why-esperia'
    | 'works'
    | 'watermelon'
    | 'blogs'
    | 'contact'
    | 'privacy'
    | 'terms';
  onNavigateToHome?: (sectionId?: string) => void;
  onNavigateToWorks?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
  hideCta?: boolean;
}

export default function Footer({
  activePage,
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia,
  onNavigateToPrivacy,
  onNavigateToTerms,
  hideCta = false,
}: FooterProps) {
  const handleHome = () => {
    if (onNavigateToHome) onNavigateToHome();
    else window.location.hash = '';
  };

  const handleWhatWeDo = () => {
    if (onNavigateToWhatWeDo) onNavigateToWhatWeDo();
    else window.location.hash = '#what-we-do';
  };

  const handleWhyEsperia = () => {
    if (onNavigateToWhyEsperia) onNavigateToWhyEsperia();
    else if (onNavigateToHome) onNavigateToHome('why-esperia');
    else window.location.hash = '#why-esperia';
  };

  const handleWorks = () => {
    if (onNavigateToWorks) onNavigateToWorks();
    else window.location.hash = '#our-works';
  };

  const handleBlogs = () => {
    if (onNavigateToBlogs) onNavigateToBlogs();
    else window.location.hash = '#blogs';
  };

  const handleContact = () => {
    if (onNavigateToContact) onNavigateToContact();
    else window.location.hash = '#contact-us';
  };

  const handlePrivacy = () => {
    if (onNavigateToPrivacy) onNavigateToPrivacy();
    else window.location.hash = '#privacy';
  };

  const handleTerms = () => {
    if (onNavigateToTerms) onNavigateToTerms();
    else window.location.hash = '#terms';
  };

  return (
    <footer className="relative bg-[#2D2D2D] text-white w-full mt-auto overflow-hidden">


      {/* Reusable SVG Gradient for Social Media Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <linearGradient id="footer-social-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5445A" />
            <stop offset="100%" stopColor="#3EA594" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 pt-16 sm:pt-20 pb-10 sm:pb-12">
        {/* ========================================================================= */}
        {/* 1. TOP CTA SECTION ("Ready to transform your Business?")                  */}
        {/* ========================================================================= */}
        {!hideCta && (
          <>
            <CinematicReveal direction="up" delay={0.1}>
              <div id="contact" className="pb-12 sm:pb-16">
                {/* Category Tag */}
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#C5445A]" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#A0A0A0] font-manrope">
                    CONTACT US
                  </span>
                </div>

                {/* Title & "Let's Talk" Button */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.16] font-parkinsans">
                    Ready to <span className="text-gradient-transform">transform</span> <br />
                    your Business?
                  </h2>

                  <MotionButton
                    type="button"
                    onClick={handleContact}
                    className="px-8 py-3.5 rounded-full font-semibold text-xs sm:text-[13px] tracking-wide text-[#202020] bg-talk-button hover:brightness-105 shadow-lg cursor-pointer shrink-0"
                  >
                    Let's Talk
                  </MotionButton>
                </div>
              </div>
            </CinematicReveal>

            {/* Upper Divider */}
            <div className="w-full border-t border-white/[0.12] mb-12 sm:mb-16" />
          </>
        )}

        {/* ========================================================================= */}
        {/* 2. MIDDLE BRAND & NAVIGATION SECTION                                      */}
        {/* ========================================================================= */}
        <CinematicReveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
            {/* Brand, Tagline, & Social Icons */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start">
              <button
                type="button"
                onClick={handleHome}
                className="focus:outline-none cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
                aria-label="ESPERIA QUANTUM Home"
              >
                <img
                  src="/assets/figma/esperia_footer_logo.svg"
                  alt="ESPERIA QUANTUM"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </button>
              <p className="text-[13px] text-[#A0A0A0] font-normal mt-4 leading-relaxed font-manrope max-w-[240px]">
                Digital experience &amp; technology consultancy.
              </p>

              {/* Social Media Icons: Instagram & LinkedIn */}
              <div className="flex items-center gap-5 mt-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/esperia.quantum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 opacity-85 hover:opacity-100 cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#footer-social-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/esperia-quantum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 opacity-85 hover:opacity-100 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#footer-social-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Columns: SERVICES and COMPANY */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-row justify-start md:justify-end gap-12 sm:gap-20">
              {/* Services Column */}
              <div className="text-left md:text-right">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-white mb-5 font-parkinsans">
                  SERVICES
                </h4>
                <ul className="space-y-3.5 text-[13px] sm:text-[14px] text-[#C4C4C4] font-manrope font-normal">
                  <li
                    onClick={handleWhatWeDo}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Human-Centered Design
                  </li>
                  <li
                    onClick={handleWhatWeDo}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    AI-Powered Development
                  </li>
                  <li
                    onClick={handleWhatWeDo}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Engineering &amp; Cloud
                  </li>
                  <li
                    onClick={handleWhatWeDo}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Data &amp; Digital Transformation
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="text-left md:text-right">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-white mb-5 font-parkinsans">
                  COMPANY
                </h4>
                <ul className="space-y-3.5 text-[13px] sm:text-[14px] text-[#C4C4C4] font-manrope font-normal">
                  <li>
                    <button
                      type="button"
                      onClick={handleWhatWeDo}
                      className={`hover:text-white transition-colors cursor-pointer ${
                        activePage === 'what-we-do' ? 'text-white font-medium' : ''
                      }`}
                    >
                      What We do
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleWhyEsperia}
                      className={`hover:text-white transition-colors cursor-pointer ${
                        activePage === 'why-esperia' ? 'text-white font-medium' : ''
                      }`}
                    >
                      Why Esperia
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleWorks}
                      className={`hover:text-white transition-colors cursor-pointer ${
                        activePage === 'works' || activePage === 'watermelon'
                          ? 'text-white font-medium'
                          : ''
                      }`}
                    >
                      Our Products
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleBlogs}
                      className={`hover:text-white transition-colors cursor-pointer ${
                        activePage === 'blogs' ? 'text-white font-medium' : ''
                      }`}
                    >
                      Blogs &amp; Newsletters
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleContact}
                      className={`hover:text-white transition-colors cursor-pointer ${
                        activePage === 'contact' ? 'text-white font-medium' : ''
                      }`}
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CinematicReveal>

        {/* ========================================================================= */}
        {/* 3. BOTTOM LEGAL BAR                                                       */}
        {/* ========================================================================= */}
        <CinematicReveal direction="up" delay={0.2}>
          <div className="w-full border-t border-white/[0.12] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#888888] font-manrope">
            <p>© 2025 Esperia. All rights reserved.</p>
            <div className="flex items-center gap-6 sm:gap-8">
              <button
                type="button"
                onClick={handlePrivacy}
                className={`hover:text-white transition-colors cursor-pointer ${
                  activePage === 'privacy' ? 'text-white font-medium' : ''
                }`}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={handleTerms}
                className={`hover:text-white transition-colors cursor-pointer ${
                  activePage === 'terms' ? 'text-white font-medium' : ''
                }`}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </CinematicReveal>
      </div>
    </footer>
  );
}
