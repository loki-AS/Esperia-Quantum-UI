import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EsperiaEmblem from '../components/EsperiaEmblem';
import {
  CinematicReveal,
  CinematicHeading,
  MotionButton,
  MotionCard,
  TiltCard,
} from '../components/MotionWrappers';
import QuantumCanvas from '../components/QuantumCanvas';

interface WhyEsperiaPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo: () => void;
  onNavigateToBlogs: () => void;
}

export default function WhyEsperiaPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
}: WhyEsperiaPageProps) {

  const reasons = [
    {
      number: '01',
      title: 'Technology Built Around Human Experience',
      description:
        "We don't start with technology. We start with understanding your business, your goals, and what success looks like for you. That clarity helps us make better decisions, build the right solutions, and stay focused on outcomes that matter.",
    },
    {
      number: '02',
      title: 'Agile Delivery',
      description:
        "Great products don't emerge from a single plan. Through continuous collaboration, feedback, and iteration, we help teams adapt quickly, make informed decisions, and keep delivery aligned with business priorities.",
    },
    {
      number: '03',
      title: 'Cross-Functional Teams',
      description:
        "The best products aren't built in isolation. By bringing together the right mix of design, engineering, product, and business thinking, we create a shared understanding that helps teams move faster and build with confidence.",
    },
    {
      number: '04',
      title: 'Scalable Engineering',
      description:
        "Growth brings new challenges, but your technology shouldn't be one of them. We build systems that evolve alongside your business, making it easier to support new users, new services, and new opportunities without losing momentum.",
    },
    {
      number: '05',
      title: 'Continuous Optimization',
      description:
        "Launch is just the beginning. By listening to users, monitoring performance, and continuously refining the experience, we help products stay relevant, effective, and aligned with how people use them.",
    },
    {
      number: '06',
      title: 'Enterprise-Grade Engineering',
      description:
        "Technology shouldn't become a bottleneck as your business grows. We build systems that can take on increasing demands, adapt to changing needs, and keep moving with your business every step of the way.",
    },
    {
      number: '07',
      title: 'Human-Centred Development',
      description:
        "Assumptions are expensive! That's why we bring user research, accessibility, and behavioural insights into the conversation early, helping teams make informed decisions before they become costly corrections.",
    },
    {
      number: '08',
      title: 'Long-Term Partnerships',
      description:
        "The best partnerships don't end at launch. We stay involved beyond delivery, helping teams refine systems, respond to new priorities, and adapt to changing business needs over time.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased flex flex-col selection:bg-[#C5445A] selection:text-white">
      {/* ============================================================ */}
      {/* 1. STICKY HEADER (outside overflow-hidden section)            */}
      {/* ============================================================ */}
      <Header
        activePage="why-esperia"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToContact={onNavigateToContact}
        className="-mb-20 sm:-mb-24"
      />

      {/* ============================================================ */}
      {/* 2. HERO SECTION (EXACT FIGMA 2990:3929)                      */}
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

          {/* Hero Content Area */}
          <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-14 sm:pb-20 flex-1 flex flex-col justify-center">

            {/* Esperia Geometric Mark Watermark — locked to 1440px container */}
            <div className="absolute top-0 right-0 sm:right-4 lg:right-6 bottom-0 w-[55%] sm:w-[50%] lg:w-[48%] max-w-[620px] pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
              <EsperiaEmblem
                className="w-[360px] sm:w-[440px] lg:w-[520px] xl:w-[580px] h-auto"
                fill="#1E4035"
              />
            </div>

            {/* 3D Saturn / Orbital Planetary Graphic — stable with cursor zoom */}
            <div className="hidden md:block absolute right-0 sm:right-2 lg:right-6 xl:right-10 top-1/2 -translate-y-1/2 w-[440px] lg:w-[550px] xl:w-[613px] h-auto z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto">
              <img
                src="/assets/figma/whyesperia_hero_3d.png"
                alt="Esperia Enterprise Delivery Model 3D Graphic"
                className="w-full h-auto object-contain select-none cursor-pointer transform-gpu transition-transform duration-700 ease-out hover:scale-105 active:scale-100 will-change-transform"
              />
            </div>

            <div className="relative z-10 max-w-[640px] lg:max-w-[720px] flex flex-col">
              {/* Home Button */}
              <div className="mb-6 sm:mb-7">
                <MotionButton
                  onClick={() => onNavigateToHome()}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/20 hover:bg-black/30 text-[#E5E7EB] text-[12px] font-manrope font-semibold transition-all duration-200 cursor-pointer border border-white/5"
                >
                  <img
                    src="/assets/figma/icon_chevron_left.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  <span>Home</span>
                </MotionButton>
              </div>

              {/* Main Headline */}
              <CinematicHeading className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-white font-parkinsans leading-[1.18] sm:leading-[1.15] tracking-tight mb-6 sm:mb-7">
                <span>Enterprise</span>
                <span className="block mt-2.5 sm:mt-3">
                  <span className="font-playball text-[#91CBA6] font-normal mr-3 sm:mr-3.5">Delivery</span>
                  <span className="font-parkinsans font-semibold text-white">Model</span>
                </span>
              </CinematicHeading>

              {/* Subtitle Description */}
              <CinematicReveal delay={0.2}>
                <p className="text-[16px] sm:text-[18px] text-[#FFFFFF] font-manrope font-normal leading-[1.78] sm:leading-[1.8] max-w-[580px]">
                  It's how we do it. Many agencies check the same capability boxes. What separates Esperia is the discipline we bring to execution — and the ambition we bring to outcomes.
                </p>
              </CinematicReveal>
            </div>

            {/* Mobile-only 3D artwork display */}
            <div className="md:hidden mt-8 w-full max-w-[340px] mx-auto">
              <img
                src="/assets/figma/whyesperia_hero_3d.png"
                alt="Esperia Enterprise Delivery Model 3D Graphic"
                className="w-full h-auto object-contain select-none cursor-pointer transform-gpu transition-transform duration-700 ease-out hover:scale-105 will-change-transform"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN SECTION: 8 REASONS & PARTNERSHIP CTA (FIGMA 2990:3975) */}
      {/* ============================================================ */}
      <main className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* -------------------------------------------------------- */}
            {/* LEFT COLUMN: 8 NUMBERED REASONS (FIGMA 2990:3976)         */}
            {/* -------------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col">
              {reasons.map((item, index) => {
                const isLast = index === reasons.length - 1;
                return (
                  <CinematicReveal
                    key={item.number}
                    delay={(index % 4) * 0.2}
                    direction="up"
                    className={`group flex items-start gap-5 sm:gap-6 ${
                      index === 0 ? 'pt-0 pb-8 sm:pb-9' : isLast ? 'pt-8 sm:pt-9 pb-0' : 'py-8 sm:py-9'
                    } ${!isLast ? 'border-b border-[#E5E7EB]' : ''}`}
                  >
                    {/* Number Badge Box (80x80px with subtle gradient & minimal hover scale) */}
                    <div
                      className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] min-w-[72px] sm:min-w-[80px] rounded-[12px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                      style={{
                        background:
                          'linear-gradient(220deg, #FFEEEE 0%, #F3F6F4 100%)',
                      }}
                    >
                      <span className="font-parkinsans font-semibold text-[26px] sm:text-[28px] text-[#0F0D1A] leading-none">
                        {item.number}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 flex flex-col gap-2.5 pt-0.5">
                      {/* Title row with red square dot and subtle hover color */}
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 min-w-2 min-h-2 rounded-[2px] bg-[#C5445A] shrink-0" />
                        <h3 className="font-parkinsans font-medium text-[16px] sm:text-[17px] text-[#000000] tracking-tight leading-snug transition-colors duration-200 group-hover:text-[#C5445A]">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-manrope font-normal text-[13.5px] sm:text-[14.5px] text-[#6B7280] leading-[1.75]">
                        {item.description}
                      </p>
                    </div>
                  </CinematicReveal>
                );
              })}
            </div>

            {/* -------------------------------------------------------- */}
            {/* RIGHT COLUMN: PARTNERSHIP & CONTACT CTAS (FIGMA 2990:4041)*/}
            {/* -------------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              {/* Card 1: Partnership & Stats (Figma 2990:4043) with 3D Tilt */}
              <TiltCard
                maxTilt={3}
                className="w-full rounded-[30px] p-6 sm:p-[32px] text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex flex-col justify-between"
                style={{
                  background:
                    'radial-gradient(circle at 26% 15%, #565656 0%, #1D1F1E 100%)',
                }}
              >
                {/* Headline */}
                <h3 className="text-[24px] sm:text-[30px] lg:text-[32px] font-bold font-parkinsans text-white leading-[1.26] tracking-tight mb-8">
                  We don't just <span className="text-[#C2E3D1]">deliver </span>projects<br className="hidden sm:inline" />
                  {' '}we build partnerships that <span className="text-[#C2E3D1]">grow.</span>
                </h3>

                {/* 3 Stats Badges in a Row */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                  {/* Stat 1 */}
                  <div className="bg-[#F3F6F4] rounded-[22px] sm:rounded-[30px] py-[24px] sm:py-[30px] px-2 sm:px-4 flex flex-col items-center justify-center text-center shadow-sm transition-transform duration-200 hover:scale-[1.03]">
                    <span className="font-funnel-display sm:font-parkinsans font-medium text-[26px] sm:text-[32px] text-[#000000] leading-none mb-2">
                      12+
                    </span>
                    <span className="font-manrope font-semibold text-[8.5px] sm:text-[10px] text-[#000000] uppercase tracking-wider leading-[1.25]">
                      YEARS COLLECTIVE<br />EXPERIENCE
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="bg-[#F3F6F4] rounded-[22px] sm:rounded-[30px] py-[24px] sm:py-[30px] px-2 sm:px-4 flex flex-col items-center justify-center text-center shadow-sm transition-transform duration-200 hover:scale-[1.03]">
                    <span className="font-funnel-display sm:font-parkinsans font-medium text-[26px] sm:text-[32px] text-[#000000] leading-none mb-2">
                      200+
                    </span>
                    <span className="font-manrope font-semibold text-[8.5px] sm:text-[10px] text-[#000000] uppercase tracking-wider leading-[1.25]">
                      PROJECTS<br />DELIVERED
                    </span>
                  </div>

                  {/* Stat 3 */}
                  <div className="bg-[#F3F6F4] rounded-[22px] sm:rounded-[30px] py-[24px] sm:py-[30px] px-2 sm:px-4 flex flex-col items-center justify-center text-center shadow-sm transition-transform duration-200 hover:scale-[1.03]">
                    <span className="font-funnel-display sm:font-parkinsans font-medium text-[26px] sm:text-[32px] text-[#000000] leading-none mb-2">
                      40+
                    </span>
                    <span className="font-manrope font-semibold text-[8.5px] sm:text-[10px] text-[#000000] uppercase tracking-wider leading-[1.25]">
                      SUCCESS<br />RATE
                    </span>
                  </div>
                </div>
              </TiltCard>

              {/* Card 2: Ready to Transform CTA (Figma 2990:4058 - 4071) with 3D Tilt */}
              <TiltCard
                maxTilt={3}
                className="w-full max-w-[481px] mx-auto lg:mx-0 rounded-[30px] relative overflow-hidden p-7 sm:p-[42px_32px_32px_32px] text-white shadow-[0_20px_50px_rgba(195,87,68,0.22)] min-h-[440px] sm:min-h-[481px] flex flex-col justify-between"
                style={{
                  background:
                    'radial-gradient(circle at 100% 15%, #C35744 0%, #870A21 100%)',
                }}
              >
                {/* Wave Texture Overlay (b39e95a77eb26884c9d041d8589fa21e78323b6b.png) */}
                <img
                  src="/assets/figma/b39e95a77eb26884c9d041d8589fa21e78323b6b.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none mix-blend-screen select-none"
                />

                {/* Text Content */}
                <div className="relative z-10">
                  <span className="inline-block text-[12px] font-manrope font-normal text-[#D9D9D9] mb-3">
                    Contact us
                  </span>
                  <h3 className="text-3xl sm:text-[44px] lg:text-[48px] font-bold font-parkinsans text-white leading-[1.18] tracking-tight mb-5">
                    Ready to <span className="text-[#FF928E]">transform</span> your Business?
                  </h3>
                  <p className="text-[14px] sm:text-[16px] text-[#D9D9D9] font-manrope font-medium leading-[1.75] max-w-[420px]">
                    Whether you need a product designed, an app developed, or an AI solution engineered - let's make it happen.
                  </p>
                </div>

                {/* Floating "Let’s Talk" Pill Button (Figma 2990:4064) */}
                <div className="relative z-10 flex justify-end mt-8">
                  <MotionButton
                    onClick={() => onNavigateToContact()}
                    className="group inline-flex items-center gap-3.5 py-2 px-4 rounded-full text-white font-manrope font-semibold text-[15px] sm:text-[16px] shadow-lg hover:brightness-110 cursor-pointer"
                    style={{
                      background:
                        'linear-gradient(90deg, #F56F6A 0%, #C5445A 100%)',
                    }}
                  >
                    <span>Let’s Talk</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <path
                        d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                        stroke="white"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </MotionButton>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </main>

      {/* ============================================================ */}
      {/* 3. LIGHT FOOTER (SHARED BRAND COMPONENT)                     */}
      {/* ============================================================ */}
      <Footer
        activePage="why-esperia"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
}
