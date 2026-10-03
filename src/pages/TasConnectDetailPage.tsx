import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  CinematicReveal,
  CinematicHeading,
  MotionButton,
  MotionCard,
} from '../components/MotionWrappers';

interface TasConnectDetailPageProps {
  onBack: () => void;
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onViewWatermelon?: () => void;
  onViewYoungGenius?: () => void;
  onViewIrisHr?: () => void;
}

export default function TasConnectDetailPage({
  onBack,
  onNavigateToHome,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia,
  onViewWatermelon,
  onViewYoungGenius,
  onViewIrisHr,
}: TasConnectDetailPageProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white flex flex-col justify-between">

      {/* HEADER */}
      <Header
        activePage="works"
        solidBg
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToWorks={onBack}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToContact={onNavigateToContact}
      />

      {/* MAIN */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-6 pb-20">

        <div className="mb-8 sm:mb-12">
          <MotionButton onClick={onBack} className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#111111] hover:text-[#C5445A] transition-colors cursor-pointer group">
            <ChevronLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            <span>BACK</span>
          </MotionButton>
        </div>

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <CinematicHeading className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold font-['Parkinsans',sans-serif] tracking-tight text-[#0A0A0A] uppercase leading-[1.16] sm:leading-[1.14] mb-5 sm:mb-6">
              TASCONNECT
            </CinematicHeading>
            <CinematicReveal delay={0.15}>
              <p className="text-[#555555] text-sm sm:text-base lg:text-[17px] font-normal leading-[1.8] max-w-lg font-['Manrope',sans-serif]">
                Intelligent logistics management platform combining real-time sentiment analysis, AI-driven monitoring, and intuitive dashboards for greater operational visibility.
              </p>
            </CinematicReveal>
          </div>
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px]">
              <img
                src="/assets/figma/exact_tasconnect_hq.png"
                alt="TASConnect Logistics Intelligence Platform"
                className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>
        </section>

        {/* Video placeholder */}
        <section className="mb-16 sm:mb-20">
          <div className="relative w-full aspect-[16/9] sm:aspect-[2.15/1] bg-[#1E252B] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer border border-neutral-800">
            <img src="/assets/figma/exact_tasconnect_hq.png" alt="TASConnect presentation" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <button type="button" aria-label="Play video demonstration" className="relative z-10 w-16 h-12 sm:w-20 sm:h-14 rounded-xl sm:rounded-2xl bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:scale-110 cursor-pointer">
              <div className="w-0 h-0 border-t-[8px] sm:border-t-[10px] border-t-transparent border-l-[14px] sm:border-l-[18px] border-l-white border-b-[8px] sm:border-b-[10px] border-b-transparent ml-1" />
            </button>
          </div>
        </section>

        {/* Case Study */}
        <section className="space-y-12 sm:space-y-16 max-w-5xl mb-24">
          <CinematicReveal direction="up">
            <h2 className="text-xl sm:text-2xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-4">Business Challenges &amp; Opportunities</h2>
            <div className="space-y-4 text-[#555555] text-[14px] sm:text-[15px] font-normal font-['Manrope',sans-serif] leading-[1.8]">
              <p>Lorem ipsum dolor sit amet consectetur. Pellentesque sem elementum id dui condimentum adipiscing dui arcu tristique. Odio diam ornare mi amet ut scelerisque. Tristique velit tempus sit aenean mi egestas viverra eleifend. A interdum eget pellentesque aenean et hendrerit sapien pellentesque. Faucibus risus feugiat auctor aliquam lacus. Quam cras vel sed eget erat cum. Nascetur mi lacinia posuere vitae egestas quisque scelerisque. Non quam fermentum dolor sagittis gravida cursus amet rhoncus sem.</p>
              <p>Etiam morbi eleifend rhoncus felis vivamus amet mi convallis. Nibh habitant dignissim elementum purus a. Sit libero parturient dis quam. Dictum tortor posuere dolor in sed semper turpis. A quem erat eros felis risus eget tempor interdum nam vestibulum. Sodales tempor velit metus ac commodo fusce. Consequat non odio a feugiat mi tristique magna libero sollicitudin.</p>
              <p>Tortor egestas praesent est ut. Pulvinar pretium dui amet nullam commodo integer velit. Non cursus volutpat pellentesque magna mauris aliquam ut odio. Nullam at viverra velit sagittis ut enim quam consectetur. Eu nullam massa condimentum scelerisque ut molestie rutrum. Turpis vulputate massa ornare id elit mattis nisl.</p>
            </div>
          </CinematicReveal>
          <CinematicReveal direction="up">
            <h2 className="text-xl sm:text-2xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-4">Product Vision &amp; Goals</h2>
            <div className="space-y-4 text-[#555555] text-[14px] sm:text-[15px] font-normal font-['Manrope',sans-serif] leading-[1.8]">
              <p>Lorem ipsum dolor sit amet consectetur. Pellentesque sem elementum id dui condimentum adipiscing dui arcu tristique. Odio diam ornare mi amet ut scelerisque. Tristique velit tempus sit aenean mi egestas viverra eleifend. A interdum eget pellentesque aenean et hendrerit sapien pellentesque. Faucibus risus feugiat auctor aliquam lacus. Quam cras vel sed eget erat cum. Nascetur mi lacinia posuere vitae egestas quisque scelerisque. Non quam fermentum dolor sagittis gravida cursus amet rhoncus sem.</p>
              <p>Etiam morbi eleifend rhoncus felis vivamus amet mi convallis. Nibh habitant dignissim elementum purus a. Sit libero parturient dis quam. Dictum tortor posuere dolor in sed semper turpis. A quem erat eros felis risus eget tempor interdum nam vestibulum. Sodales tempor velit metus ac commodo fusce. Consequat non odio a feugiat mi tristique magna libero sollicitudin.</p>
            </div>
          </CinematicReveal>
          <CinematicReveal direction="up">
            <h2 className="text-xl sm:text-2xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-4">Our Approach</h2>
            <div className="text-[#555555] text-[14px] sm:text-[15px] font-normal font-['Manrope',sans-serif] leading-[1.8]">
              <p>Lorem ipsum dolor sit amet consectetur. Pellentesque sem elementum id dui condimentum adipiscing dui arcu tristique. Odio diam ornare mi amet ut scelerisque. Tristique velit tempus sit aenean mi egestas viverra eleifend. A interdum eget pellentesque aenean et hendrerit sapien pellentesque. Faucibus risus feugiat auctor aliquam lacus. Quam cras vel sed eget erat cum. Nascetur mi lacinia posuere vitae egestas quisque scelerisque. Non quam fermentum dolor sagittis gravida cursus amet rhoncus sem.</p>
            </div>
          </CinematicReveal>
        </section>

        {/* Other Works */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-8">Other Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <CinematicReveal delay={0.05} direction="up">
              <MotionCard className="bg-[#F4F4F1] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-slate-100 shadow-sm group h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-[16/10] flex items-center justify-center mb-4 border border-slate-100/80">
                  <img src="/assets/figma/other_works_watermelon_hq.png" alt="Watermelon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-bold text-[15px] text-[#0A0A0A] font-['Parkinsans',sans-serif]">Watermelon</span>
                  <button type="button" onClick={() => onViewWatermelon ? onViewWatermelon() : onBack()} className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#C5445A] hover:text-[#9e2e41] transition-colors cursor-pointer">
                    <span>View Details</span><span className="text-xs">&gt;</span>
                  </button>
                </div>
              </MotionCard>
            </CinematicReveal>

            <CinematicReveal delay={0.1} direction="up">
              <MotionCard className="bg-[#F4F4F1] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-slate-100 shadow-sm group h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-[16/10] flex items-center justify-center mb-4 border border-slate-100/80">
                  <img src="/assets/figma/other_works_young_genius_hq.png" alt="Young Genius Program" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-bold text-[15px] text-[#0A0A0A] font-['Parkinsans',sans-serif] truncate pr-2">Young Genius Program</span>
                  <button type="button" onClick={() => onViewYoungGenius ? onViewYoungGenius() : onBack()} className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#C5445A] hover:text-[#9e2e41] transition-colors cursor-pointer shrink-0">
                    <span>View Details</span><span className="text-xs">&gt;</span>
                  </button>
                </div>
              </MotionCard>
            </CinematicReveal>

            <CinematicReveal delay={0.15} direction="up">
              <MotionCard className="bg-[#F4F4F1] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-slate-100 shadow-sm group h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-[16/10] flex items-center justify-center mb-4 border border-slate-100/80">
                  <img src="/assets/figma/exact_iris_hr_hq.png" alt="IRIS HR System" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-bold text-[15px] text-[#0A0A0A] font-['Parkinsans',sans-serif]">IRIS HR System</span>
                  <button type="button" onClick={() => onViewIrisHr ? onViewIrisHr() : onBack()} className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#C5445A] hover:text-[#9e2e41] transition-colors cursor-pointer">
                    <span>View Details</span><span className="text-xs">&gt;</span>
                  </button>
                </div>
              </MotionCard>
            </CinematicReveal>

          </div>
        </section>
      </main>

      <Footer
        activePage="works"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onBack}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
      />
    </div>
  );
}
