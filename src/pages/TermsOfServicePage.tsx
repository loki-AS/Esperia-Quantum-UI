import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CinematicReveal, CinematicHeading, MotionCard, MotionButton, MotionLink } from '../components/MotionWrappers';

interface TermsOfServicePageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

export default function TermsOfServicePage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia,
  onNavigateToPrivacy,
  onNavigateToTerms,
}: TermsOfServicePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const terms = [
    {
      num: '01',
      title: 'Acceptance of Terms',
      content:
        'By accessing or using the Esperia Quantum website, platforms, software solutions, or technical advisory services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must discontinue use of our site and services immediately.',
    },
    {
      num: '02',
      title: 'Consulting & Engineering Scope',
      content:
        'Esperia provides digital experience engineering, cloud-native architecture, and enterprise AI transformation consulting. All formal engineering engagements, deliverables, milestones, and service level agreements (SLAs) are governed by mutually executed Master Services Agreements (MSAs) or Statements of Work (SOWs) which supersede general website terms where explicitly stated.',
    },
    {
      num: '03',
      title: 'Intellectual Property & Ownership',
      content:
        'Unless otherwise agreed in a customized client contract: (a) All website content, trademarks, logos, visual designs, algorithms, and proprietary methodologies are the sole property of Esperia Quantum; (b) Client-commissioned custom deliverables and source code become the exclusive property of the paying client upon full settlement of contract fees, subject to standard open-source library conditions.',
    },
    {
      num: '04',
      title: 'Client Confidentiality & NDA',
      content:
        'We adhere to rigorous corporate confidentiality standards. All proprietary trade secrets, architectural blueprints, source code repositories, and business plans shared with Esperia during pre-sales or active delivery are protected by mutual non-disclosure covenants and stored in encrypted enterprise environments.',
    },
    {
      num: '05',
      title: 'Acceptable Use Policy',
      content:
        'Users agree not to misuse Esperia’s infrastructure, reverse engineer proprietary code, transmit malicious scripts or denial-of-service traffic, or infringe upon the intellectual property rights of Esperia or third parties. We reserve the right to restrict access to any entity violating these security terms.',
    },
    {
      num: '06',
      title: 'Limitation of Liability & Warranties',
      content:
        'Our public web services are provided on an "as is" and "as available" basis without express or implied warranties. To the maximum extent permitted by applicable law, Esperia Quantum shall not be liable for any indirect, incidental, punitive, or consequential damages arising from the use of our informational website.',
    },
    {
      num: '07',
      title: 'Modifications to Terms',
      content:
        'Esperia reserves the right to amend or update these Terms of Service at any time. Changes become effective upon posting to this website. Continued use of our platforms constitutes acceptance of any revised terms.',
    },
    {
      num: '08',
      title: 'Governing Law & Legal Contact',
      content:
        'These terms shall be interpreted in accordance with applicable corporate laws. For inquiries regarding licensing agreements, contract terms, or legal notices, please write to nammatradeofficial@gmail.com.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-manrope antialiased flex flex-col justify-between selection:bg-[#E63956] selection:text-white">
      {/* 1. Sticky Header */}
      <Header
        activePage="contact"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        scrolledBg="bg-[#051413]/95 shadow-xl backdrop-blur-md"
        mobileBg="bg-[#051413]"
        className="-mb-20 sm:-mb-24"
      />

      {/* 2. Hero Section */}
      <div className="w-full bg-white">
        <section
          className="relative w-full text-white rounded-b-[36px] sm:rounded-b-[48px] overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col"
          style={{
            background:
              'radial-gradient(circle at 75% 45%, #17382B 0%, #0E241B 55%, #081711 100%)',
          }}
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#1A382B]/30 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 pb-14 sm:pb-20 flex-1 flex flex-col justify-center">
            <div className="max-w-[760px] flex flex-col">
              {/* Home Pill Button */}
              <div className="mb-6 sm:mb-7">
                <MotionButton
                  type="button"
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

              {/* Title */}
              <CinematicHeading
                as="h1"
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white font-parkinsans leading-[1.16] sm:leading-[1.14] tracking-tight mb-5 sm:mb-6"
              >
                Terms of <br />
                <span className="font-playball text-[#91CBA6] font-normal mr-2">Service</span>
                <span className="font-parkinsans font-semibold text-white">&amp; Conditions</span>
              </CinematicHeading>

              <CinematicReveal direction="up" delay={0.15}>
                <p className="text-[#91CBA6]/90 text-[15px] sm:text-[17px] font-normal max-w-xl font-manrope leading-[1.78] sm:leading-[1.8]">
                  Review the terms governing corporate engagements, intellectual property ownership, and digital delivery with Esperia Quantum.
                </p>
              </CinematicReveal>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Main Terms Content - Grid View */}
      <main className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {terms.map((item, idx) => (
              <CinematicReveal key={item.num} direction="up" delay={0.08 * (idx % 4)}>
                <MotionCard className="h-full bg-[#FAFAFA] border border-slate-200/80 rounded-[28px] p-7 sm:p-9 shadow-xs hover:border-[#17382B]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full bg-[#17382B]/10 text-[#17382B] text-xs font-mono font-bold tracking-wider">
                        ARTICLE {item.num}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#C5445A]" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold font-parkinsans text-[#111111] group-hover:text-[#17382B] transition-colors mb-3.5 leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-[14px] text-[#555555] font-manrope leading-[1.8]">
                      {item.content}
                    </p>
                  </div>
                </MotionCard>
              </CinematicReveal>
            ))}

            {/* Legal Advisory Contact - spans both columns */}
            <div className="md:col-span-2">
              <CinematicReveal direction="up" delay={0.2}>
                <div className="bg-[#051413] text-white rounded-[28px] p-8 sm:p-10 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
                  <div>
                    <h3 className="text-xl font-bold font-parkinsans mb-2">Need a custom enterprise MSA or NDA?</h3>
                    <p className="text-sm text-slate-300 font-manrope max-w-xl leading-relaxed">
                      Our legal and enterprise solutions team can provide tailored corporate terms for your digital transformation initiative.
                    </p>
                  </div>
                  <MotionLink
                    href="mailto:nammatradeofficial@gmail.com?subject=Enterprise%20Legal%20Inquiry%20-%20Esperia"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F56F6A] to-[#C5445A] text-white font-semibold text-sm hover:brightness-110 transition-all whitespace-nowrap cursor-pointer shrink-0 inline-block text-center"
                  >
                    Contact Legal Desk
                  </MotionLink>
                </div>
              </CinematicReveal>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <Footer
        activePage="terms"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToTerms={onNavigateToTerms}
      />
    </div>
  );
}
