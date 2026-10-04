import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Mail, CheckCircle2, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BLOGS_DATA } from '../data/blogsData';
import EsperiaEmblem from '../components/EsperiaEmblem';
import {
  CinematicReveal,
  CinematicHeading,
  MotionButton,
  MotionCard,
} from '../components/MotionWrappers';
import QuantumCanvas from '../components/QuantumCanvas';

interface BlogsPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo: () => void;
  onNavigateToWhyEsperia?: () => void;
  onSelectBlog?: (blogId: string) => void;
}

export default function BlogsPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToWhyEsperia,
  onSelectBlog,
}: BlogsPageProps) {
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredBlog = BLOGS_DATA[0];

  const handleOpenBlog = (blogId: string) => {
    if (onSelectBlog) {
      onSelectBlog(blogId);
    } else {
      window.location.hash = `#blog/${blogId}`;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubscribed(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased flex flex-col selection:bg-[#C5445A] selection:text-white">
      {/* ============================================================ */}
      {/* 1. STICKY HEADER (outside overflow-hidden hero section)       */}
      {/* ============================================================ */}
      <Header
        activePage="blogs"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToBlogs={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToContact={onNavigateToContact}
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
          <QuantumCanvas colorScheme="teal" opacity={0.5} particleCount={24} />

          {/* Hero Content Area */}
          <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-14 sm:pb-20 flex-1 flex flex-col justify-center">

            {/* Esperia Geometric Mark Watermark — locked to 1440px container */}
            <div className="absolute top-0 right-0 sm:right-4 lg:right-6 bottom-0 w-[55%] sm:w-[50%] lg:w-[48%] max-w-[620px] pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
              <EsperiaEmblem
                className="w-[360px] sm:w-[440px] lg:w-[520px] xl:w-[580px] h-auto"
                fill="#1E4035"
              />
            </div>

            <div className="relative z-10 max-w-[1150px] flex flex-col">
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
              <CinematicHeading className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-semibold text-white font-parkinsans leading-[1.18] sm:leading-[1.14] tracking-tight mb-6 sm:mb-7">
                <span>AI Doesn't Replace</span>{' '}
                <span className="font-playball text-[#91CBA6] font-normal italic tracking-normal ml-1">
                  Creativity.
                </span>
                <br />
                <span className="block mt-2 sm:mt-2.5">It Removes Friction.</span>
              </CinematicHeading>

              {/* Subtitle Description */}
              <CinematicReveal delay={0.2}>
                <p className="text-[16px] sm:text-[18px] text-[#FFFFFF]/85 font-manrope font-normal leading-[1.78] sm:leading-[1.8] max-w-[580px]">
                  Explore our latest research, architectural blueprints, and engineering insights on AI resilience, multi-cloud microservices, and quantum readiness.
                </p>
              </CinematicReveal>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* 3. FEATURED LEAD ARTICLE                                     */}
      {/* ============================================================ */}
      <section className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-20 pt-10 sm:pt-14 pb-6 sm:pb-8">
        <CinematicReveal direction="up">
          <MotionCard
            onClick={() => handleOpenBlog(featuredBlog.id)}
            className="group relative rounded-3xl bg-gradient-to-br from-[#071F1A] via-[#0A2922] to-[#0E352C] text-white p-6 sm:p-10 lg:p-12 shadow-xl cursor-pointer overflow-hidden border border-emerald-900/30"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Featured Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[#91CBA6] text-xs font-bold uppercase tracking-wider">
                    <Sparkles size={12} />
                    <span>Featured Article</span>
                  </span>
                  <span className="text-xs text-gray-400">{featuredBlog.readTime}</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Parkinsans',sans-serif] text-white mb-5 group-hover:text-[#91CBA6] transition-colors leading-[1.35] tracking-normal">
                  {featuredBlog.title}
                </h2>

                {/* Subtitle / Excerpt */}
                <p className="text-gray-300 text-sm sm:text-[15px] font-normal leading-[1.8] mb-8 font-manrope">
                  {featuredBlog.excerpt}
                </p>

                {/* Author Info & CTA */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
                      <img
                        src={featuredBlog.author.avatar}
                        alt={featuredBlog.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{featuredBlog.author.name}</div>
                      <div className="text-xs text-gray-400">{featuredBlog.author.role} · {featuredBlog.date}</div>
                    </div>
                  </div>

                  {/* Read Brief Trigger */}
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F56F6A] to-[#C5445A] text-white font-manrope font-semibold text-sm shadow-md group-hover:brightness-110 group-hover:scale-105 transition-all">
                    <span>Read Brief</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Cover */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl bg-[#03110E] border border-white/10">
                  <img
                    src={featuredBlog.coverImage}
                    alt={featuredBlog.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 max-h-[300px]"
                  />
                </div>
              </div>
            </div>
          </MotionCard>
        </CinematicReveal>
      </section>

      {/* ============================================================ */}
      {/* 4. ALL BLOGS GRID                                             */}
      {/* ============================================================ */}
      <main className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-20 py-8 lg:py-12 flex-1">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A]">
              All Publications
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] font-manrope mt-1">
              Showing {BLOGS_DATA.length} articles
            </p>
          </div>
        </div>

        {/* Blog Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_DATA.map((blog, idx) => (
            <CinematicReveal key={blog.id} delay={(idx % 3) * 0.2} direction="up">
              <MotionCard
                onClick={() => handleOpenBlog(blog.id)}
                className="bg-white rounded-3xl border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden group cursor-pointer h-full"
              >
                <div>
                  {/* Top Illustration Container with Scoop & Button (Figma Style) */}
                  <div className="relative w-full h-[210px] rounded-t-3xl overflow-visible select-none">
                    <div className="w-full h-full rounded-t-3xl overflow-hidden bg-gradient-to-b from-[#E6EDE8] to-[#FAFAFA] relative flex items-center justify-center">
                      <img
                        src="/assets/figma/blog_subtract_1.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90"
                      />
                      <img
                        src={blog.thumbnailImage || blog.coverImage}
                        alt=""
                        className="relative z-10 max-h-[160px] w-auto max-w-[80%] object-contain group-hover:scale-[1.06] transition-transform duration-300"
                      />
                    </div>

                    {/* Floating "Read Brief" Button in scoop corner */}
                    <div className="absolute right-4 bottom-0 translate-y-1/2 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F56F6A] to-[#C5445A] text-white font-manrope font-semibold text-[12px] shadow-md group-hover:scale-105 transition-all">
                        <span>Read Brief</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 sm:p-7 pt-7 flex flex-col gap-3.5">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded-full border border-[#C2E3D1] text-[10px] font-bold uppercase tracking-wider text-[#111827] bg-[#E8F5EE]">
                        {blog.category}
                      </span>
                      <span className="text-gray-400 font-manrope flex items-center gap-1 text-[11px]">
                        <Clock size={12} />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-[18px] font-bold font-['Parkinsans',sans-serif] text-[#0D0D0D] leading-[1.35] group-hover:text-[#C5445A] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[13.5px] text-[#6B7280] font-manrope line-clamp-3 leading-[1.75]">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Author & Date */}
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
                      <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold font-['Parkinsans',sans-serif] text-[#111827]">
                        {blog.author.name}
                      </span>
                      <span className="text-[11px] text-[#6B7280] font-manrope">
                        {blog.date}
                      </span>
                    </div>
                  </div>

                  {/* View Details arrow indicator */}
                  <div className="text-[#C5445A] font-semibold text-xs inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Brief</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </MotionCard>
            </CinematicReveal>
          ))}
        </div>
      </main>

      {/* ============================================================ */}
      {/* 5. NEWSLETTER SUBSCRIPTION SECTION                            */}
      {/* ============================================================ */}
      <section className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-20 py-12 lg:py-16">
        <CinematicReveal direction="up">
          <div className="relative rounded-3xl bg-[#F7F8F7] border border-gray-200 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5445A]/10 text-[#C5445A] text-xs font-bold uppercase tracking-wider mb-3">
                <Mail size={13} />
                <span>Esperia Dispatch</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] tracking-tight">
                Stay Ahead of Emerging Paradigms.
              </h3>
              <p className="text-sm sm:text-base text-[#666666] font-manrope mt-2">
                Join 15,000+ engineers, architects, and CTOs receiving our bi-weekly deep dives into artificial intelligence, cloud resilience, and quantum readiness.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 min-w-[320px] sm:min-w-[420px]">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 bg-white border border-gray-300 rounded-full px-5 py-3 text-sm font-manrope text-black placeholder:text-gray-400 focus:outline-none focus:border-[#C5445A] transition-colors shadow-sm"
              />
              <MotionButton
                type="submit"
                className="px-6 py-3 rounded-full bg-[#0A0A0A] hover:bg-[#C5445A] text-white font-manrope font-semibold text-sm shadow-md cursor-pointer whitespace-nowrap"
              >
                {newsletterSubscribed ? 'Subscribed!' : 'Subscribe'}
              </MotionButton>
            </form>

            {newsletterSubscribed && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-100 px-4 py-1.5 rounded-full">
                <CheckCircle2 size={14} />
                <span>Thank you for subscribing to Esperia Dispatch!</span>
              </div>
            )}
          </div>
        </CinematicReveal>
      </section>

      {/* ============================================================ */}
      {/* 6. FOOTER SECTION                                             */}
      {/* ============================================================ */}
      <Footer
        activePage="blogs"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
      />
    </div>
  );
}
