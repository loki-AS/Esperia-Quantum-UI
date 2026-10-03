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

              {/* Row of 6 Social Media Icons (with Coral-to-Teal Gradient) */}
              <div className="flex items-center gap-5 mt-6">
                {/* Facebook */}
                <a
                  href="https://facebook.com/esperia.quantum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 opacity-85 hover:opacity-100 cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="url(#footer-social-gradient)">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.71-.14-2.8 0-4.79 1.71-4.79 4.93v2.57H7v4h3.01v10h3.99v-10z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/esperia_quantum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 opacity-85 hover:opacity-100 cursor-pointer"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="url(#footer-social-gradient)">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

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

                {/* Dribbble */}
                <a
                  href="https://dribbble.com/esperia_quantum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 opacity-85 hover:opacity-100 cursor-pointer"
                  aria-label="Dribbble"
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                    <path d="M8.5 2.5c4.77 5.83 6.46 11.95 7.74 19.3" />
                  </svg>
                </a>

                {/* Behance */}
                <a
                  href="https://behance.net/esperia_quantum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 opacity-85 hover:opacity-100 cursor-pointer"
                  aria-label="Behance"
                >
                  <svg className="w-5 h-4" viewBox="0 0 24 24" fill="url(#footer-social-gradient)">
                    <path d="M7.8 12.3c.9-.4 1.5-1.2 1.5-2.3 0-1.8-1.4-2.8-3.4-2.8H1.5v10.5h4.6c2.2 0 3.8-1.2 3.8-3.1 0-1.1-.8-2-2.1-2.3zm-3.5-3.3h1.4c1 0 1.6.4 1.6 1.2 0 .9-.7 1.3-1.7 1.3H4.3V9zm1.6 6.9H4.3v-2.7h1.6c1.1 0 1.9.4 1.9 1.3 0 1-.8 1.4-1.9 1.4zm10.7-3.8c-1.9 0-3.3 1.4-3.3 3.5 0 2.2 1.4 3.6 3.5 3.6 1.5 0 2.7-.8 3.1-2h-1.6c-.3.5-.8.7-1.5.7-.9 0-1.7-.6-1.8-1.7h5.1c.1-2.4-1.5-4.1-3.5-4.1zm-1.6 2.8c.2-.9.8-1.4 1.6-1.4.8 0 1.4.5 1.5 1.4h-3.1zM14.4 7.6h4.5v1.2h-4.5V7.6z" />
                  </svg>
                </a>

                {/* Medium */}
                <a
                  href="https://medium.com/@esperia_quantum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 opacity-85 hover:opacity-100 cursor-pointer"
                  aria-label="Medium"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="4.5"
                      fill="none"
                      stroke="url(#footer-social-gradient)"
                      strokeWidth="2"
                    />
                    <path
                      d="M6.5 16.5V7.5L10.5 13.5L14.5 7.5V16.5"
                      fill="none"
                      stroke="url(#footer-social-gradient)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
