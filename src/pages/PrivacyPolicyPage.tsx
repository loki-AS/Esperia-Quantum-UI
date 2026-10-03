import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CinematicReveal, CinematicHeading, MotionCard, MotionButton, MotionLink } from '../components/MotionWrappers';

interface PrivacyPolicyPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

export default function PrivacyPolicyPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia,
  onNavigateToPrivacy,
  onNavigateToTerms,
}: PrivacyPolicyPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      num: '01',
      title: 'Introduction & Scope',
      content:
        'Esperia Quantum ("Esperia", "we", "our", or "us") is dedicated to safeguarding the privacy and integrity of your corporate and personal information. This Privacy Policy details how we collect, process, store, and protect information when you visit our website, utilize our consulting services, or interact with our digital engineering platforms.',
    },
    {
      num: '02',
      title: 'Information We Collect',
      content:
        'We collect information necessary to provide state-of-the-art technological advisory and engineering solutions. This includes: (a) Contact details submitted through inquiries (name, corporate email, subject, message); (b) Client project telemetry and technical specifications provided under non-disclosure agreements; (c) Standard device telemetry, browser type, IP addresses, and anonymized analytics gathered to ensure platform performance and security.',
    },
    {
      num: '03',
      title: 'How We Use Your Information',
      content:
        'Information gathered is utilized exclusively to: deliver tailored AI, cloud, and product engineering services; respond to direct inquiries sent via our contact channels; maintain platform security and prevent malicious traffic; and satisfy legal, accounting, and compliance obligations. We strictly enforce that proprietary client data is never utilized for public AI model training without explicit written consent.',
    },
    {
      num: '04',
      title: 'Data Sharing & Zero-Resale Pledge',
      content:
        'We do not sell, rent, monetize, or trade your personal or corporate data with any third parties. Data is only accessible to authorized Esperia personnel and certified infrastructure partners bound by strict confidentiality and security protocols necessary to operate our digital infrastructure.',
    },
    {
      num: '05',
      title: 'Enterprise Security & Encryption',
      content:
        'We implement defense-in-depth security architectures including end-to-end encryption in transit (TLS 1.3) and at rest (AES-256). Our systems adhere to modern cloud-native best practices with continuous vulnerability assessments, least-privilege role-based access controls, and strict compliance monitoring.',
    },
    {
      num: '06',
      title: 'Data Retention & Your Legal Rights',
      content:
        'You maintain full sovereignty over your data. Depending on your jurisdiction (such as GDPR, CCPA, or Malaysian PDPA), you have the right to request access to, correction of, or permanent deletion of your stored information. Inquiries regarding data retention or deletion are fulfilled in accordance with applicable statutory timeframes.',
    },
    {
      num: '07',
      title: 'Contact Information & Inquiries',
      content:
        'For any questions, requests regarding your data, or compliance inquiries, please contact our privacy and data governance desk directly at nammatradeofficial@gmail.com.',
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
          {/* Subtle Ambient Radial Glow */}
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
                Privacy <br />
                <span className="font-playball text-[#91CBA6] font-normal mr-2">Policy</span>
                <span className="font-parkinsans font-semibold text-white">&amp; Data Protection</span>
              </CinematicHeading>

              <CinematicReveal direction="up" delay={0.15}>
                <p className="text-[#91CBA6]/90 text-[15px] sm:text-[17px] font-normal max-w-xl font-manrope leading-[1.78] sm:leading-[1.8]">
                  Learn how Esperia Quantum secures your enterprise data, proprietary assets, and personal information across all digital touchpoints.
                </p>
              </CinematicReveal>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Main Policy Content - Grid View */}
      <main className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {sections.map((section, idx) => (
              <CinematicReveal key={section.num} direction="up" delay={0.08 * (idx % 4)}>
                <MotionCard className="h-full bg-[#FAFAFA] border border-slate-200/80 rounded-[28px] p-7 sm:p-9 shadow-xs hover:border-[#17382B]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full bg-[#17382B]/10 text-[#17382B] text-xs font-mono font-bold tracking-wider">
                        SECTION {section.num}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#C5445A]" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold font-parkinsans text-[#111111] group-hover:text-[#17382B] transition-colors mb-3.5 leading-snug">
                      {section.title}
                    </h2>
                    <p className="text-[14px] text-[#555555] font-manrope leading-[1.8]">
                      {section.content}
                    </p>
                  </div>
                </MotionCard>
              </CinematicReveal>
            ))}

            {/* Direct Support Card - spans both columns */}
            <div className="md:col-span-2">
              <CinematicReveal direction="up" delay={0.2}>
                <div className="bg-[#051413] text-white rounded-[28px] p-8 sm:p-10 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
                  <div>
                    <h3 className="text-xl font-bold font-parkinsans mb-2">Have questions about your data?</h3>
                    <p className="text-sm text-slate-300 font-manrope max-w-xl leading-relaxed">
                      Our security and data governance officers are available to assist with any privacy inquiries, compliance questionnaires, or audit requests.
                    </p>
                  </div>
                  <MotionLink
                    href="mailto:nammatradeofficial@gmail.com?subject=Privacy%20Inquiry%20-%20Esperia"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F56F6A] to-[#C5445A] text-white font-semibold text-sm hover:brightness-110 transition-all whitespace-nowrap cursor-pointer shrink-0 inline-block text-center"
                  >
                    Contact Data Desk
                  </MotionLink>
                </div>
              </CinematicReveal>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <Footer
        activePage="privacy"
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
