import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EsperiaEmblem from '../components/EsperiaEmblem';
import { motion } from 'framer-motion';
import {
  CinematicReveal,
  CinematicHeading,
  TiltCard,
  cinematicEase
} from '../components/MotionWrappers';
import QuantumCanvas from '../components/QuantumCanvas';

interface WhatWeDoPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
}

export default function WhatWeDoPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToBlogs,
  onNavigateToWhyEsperia
}: WhatWeDoPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased flex flex-col selection:bg-[#C5445A] selection:text-white">
      {/* ============================================================ */}
      {/* 1. STICKY HEADER (outside overflow-hidden section)            */}
      {/* ============================================================ */}
      <Header
        activePage="what-we-do"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToContact={onNavigateToContact}
        scrolledBg="bg-[#0E241B]/95 shadow-xl backdrop-blur-md"
        className="-mb-20 sm:-mb-24"
      />

      {/* ============================================================ */}
      {/* 2. HERO SECTION                                               */}
      {/* ============================================================ */}
      <div className="w-full bg-white">
        <section
          className="relative w-full text-white rounded-b-[36px] sm:rounded-b-[48px] overflow-hidden min-h-[560px] lg:h-[594px] flex flex-col justify-between"
          style={{
            background:
              'radial-gradient(circle at 75% 45%, #17382B 0%, #0E241B 55%, #081711 100%)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#1A382B]/30 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* Ambient Quantum Constellation */}
          <QuantumCanvas colorScheme="teal" opacity={0.5} particleCount={26} />

          {/* Hero Content Area (Constrained 1440px Container) */}
          <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-14 sm:pb-20 flex-1 flex flex-col justify-center">

            {/* Esperia Geometric Mark Watermark — locked to 1440px container */}
            <div className="absolute top-0 right-0 sm:right-4 lg:right-6 bottom-0 w-[55%] sm:w-[50%] lg:w-[48%] max-w-[620px] pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
              <EsperiaEmblem
                className="w-[360px] sm:w-[440px] lg:w-[520px] xl:w-[580px] h-auto"
                fill="#1E4035"
              />
            </div>

            {/* 3D Visual Graphic — stable with cursor zoom */}
            <div className="hidden md:block absolute right-0 sm:right-2 lg:right-6 xl:right-10 top-1/2 -translate-y-1/2 w-[440px] lg:w-[540px] xl:w-[600px] h-auto z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto">
              <img
                src="/assets/figma/whatwedo_hero_exact.png"
                alt="Esperia Intelligent Systems Platform"
                className="w-full h-auto object-contain select-none cursor-pointer hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="relative z-10 max-w-[640px] lg:max-w-[720px] flex flex-col">
              {/* Home Button with Micro-Interaction */}
              <div className="mb-6 sm:mb-7">
                <motion.button
                  whileHover={{ scale: 1.05, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: cinematicEase }}
                  type="button"
                  onClick={() => onNavigateToHome()}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/20 hover:bg-black/30 text-[#E5E7EB] text-[12px] font-manrope font-semibold transition-all duration-200 cursor-pointer border border-white/10"
                >
                  <img
                    src="/assets/figma/icon_chevron_left.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  <span>Home</span>
                </motion.button>
              </div>

              {/* Main Headline */}
              <CinematicHeading className="mb-6 sm:mb-7">
                <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-white font-parkinsans leading-[1.18] sm:leading-[1.15] tracking-tight">
                  <span>Human Ingenuity.</span>
                  <span className="block mt-2.5 sm:mt-3">
                    <span className="font-playball text-[#91CBA6] font-normal italic tracking-normal mr-3.5 sm:mr-4">
                      Intelligent
                    </span>
                    <span className="font-parkinsans font-semibold text-white">Systems</span>
                  </span>
                </h1>
              </CinematicHeading>

              {/* Subtitle Description */}
              <CinematicReveal delay={0.2}>
                <p className="text-[16px] sm:text-[18px] text-[#FFFFFF]/85 font-manrope font-normal leading-[1.78] sm:leading-[1.8] max-w-[580px]">
                  We connect AI, data, cloud, and digital design to unlock business transformation — enabling organizations to innovate with purpose and scale with agility.
                </p>
              </CinematicReveal>
            </div>

            {/* Mobile-only 3D artwork display */}
            <div className="md:hidden mt-8 w-full max-w-[340px] mx-auto">
              <img
                src="/assets/figma/whatwedo_hero_exact.png"
                alt="Esperia Intelligent Systems Platform"
                className="w-full h-auto object-contain select-none cursor-pointer transform-gpu transition-transform duration-500 ease-out hover:scale-105 will-change-transform"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* 2. SERVICES LIST (4 DETAILED ALTERNATING CARDS)               */}
      {/* ============================================================ */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24 space-y-14 sm:space-y-20">

        {/* ------------------------------------------------------------ */}
        {/* SECTION 01: Engineering & Platforms (Card Left, Content Right)*/}
        {/* ------------------------------------------------------------ */}
        <CinematicReveal>
          <section className="bg-[#FAFAF8] border border-slate-200/70 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Feature Card - Exact Figma Card with 3D Tilt */}
              <div className="lg:col-span-5 flex justify-center">
                <TiltCard maxTilt={3.5} className="w-full max-w-[360px]">
                  <img
                    src="/assets/figma/whatwedo_card1_exact.png"
                    alt="01 Engineering & Platforms"
                    className="w-full h-auto object-contain rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-pointer hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </TiltCard>
              </div>

              {/* Right Sub-services List */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8 sm:space-y-10 pl-0 lg:pl-4">
                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2.5">
                    API
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems, Esperia combines deep engineering expertise with platform innovation to create technology foundations built for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2.5">
                    Cloud Solutions
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems, Esperia combines deep engineering expertise with platform innovation to create technology foundations built for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2.5">
                    Enterprise & Low-Code Platforms
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems, Esperia combines deep engineering expertise with platform innovation to create technology foundations built for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </CinematicReveal>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 02: AI & Data Automation (Content Left, Card Right) */}
        {/* ------------------------------------------------------------ */}
        <CinematicReveal>
          <section className="bg-[#FAFAF8] border border-slate-200/70 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Sub-services List */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8 sm:space-y-10 pr-0 lg:pr-4 order-2 lg:order-1">
                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2.5">
                    AI & Intelligent Automation
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2.5">
                    Data Analytics & Insights
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2.5">
                    Digital Transformation & Strategy
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>
              </div>

              {/* Right Feature Card - Exact Figma Card with 3D Tilt */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
                <TiltCard maxTilt={3.5} className="w-full max-w-[360px]">
                  <img
                    src="/assets/figma/whatwedo_card2_exact.png"
                    alt="02 AI & Data Automation"
                    className="w-full h-auto object-contain rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-pointer hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </TiltCard>
              </div>
            </div>
          </section>
        </CinematicReveal>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 03: Government Services (Card Left, Content Right)  */}
        {/* ------------------------------------------------------------ */}
        <CinematicReveal>
          <section className="bg-[#FAFAF8] border border-slate-200/70 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Feature Card - Exact Figma Card with 3D Tilt */}
              <div className="lg:col-span-5 flex justify-center">
                <TiltCard maxTilt={3.5} className="w-full max-w-[360px]">
                  <img
                    src="/assets/figma/whatwedo_card3_exact.png"
                    alt="03 Government Services"
                    className="w-full h-auto object-contain rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-pointer hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </TiltCard>
              </div>

              {/* Right Sub-services List */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8 sm:space-y-10 pl-0 lg:pl-4">
                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2.5">
                    Citizen Experience & Public Service Platforms
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2.5">
                    Federal & State Projects
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </CinematicReveal>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 04: Human & AI Experience Design (Content Left, Card Right) */}
        {/* ------------------------------------------------------------ */}
        <CinematicReveal>
          <section className="bg-[#FAFAF8] border border-slate-200/70 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Sub-services List (5 Sub-items) */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-7 sm:space-y-8 pr-0 lg:pr-4 order-2 lg:order-1">
                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2">
                    UI & UX Design
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2">
                    User & Market Research
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2">
                    Service Design
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2">
                    Design Systems
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#111111] font-parkinsans mb-2">
                    HAI Model
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.75] font-manrope">
                    Turning ambitious ideas into resilient digital ecosystems. Esperia combines deep engineering expertise with platform innovation to accelerate delivery, foundational build for growth. Every platform is crafted to perform, adapt, and evolve alongside the businesses that depend on them.
                  </p>
                </div>
              </div>

              {/* Right Feature Card - Exact Figma Card with 3D Tilt */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
                <TiltCard maxTilt={3.5} className="w-full max-w-[360px]">
                  <img
                    src="/assets/figma/whatwedo_card4_exact.png"
                    alt="04 Human & AI Experience Design"
                    className="w-full h-auto object-contain rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-pointer hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </TiltCard>
              </div>
            </div>
          </section>
        </CinematicReveal>

      </main>

      {/* ============================================================ */}
      {/* 3. LIGHT FOOTER (SHARED BRAND COMPONENT)                     */}
      {/* ============================================================ */}
      <Footer
        activePage="what-we-do"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
      />
    </div>
  );
}
