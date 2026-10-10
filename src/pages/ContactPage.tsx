import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EsperiaEmblem from '../components/EsperiaEmblem';
import {
  CinematicReveal,
  CinematicHeading,
  MotionButton,
  MotionCard,
} from '../components/MotionWrappers';
import QuantumCanvas from '../components/QuantumCanvas';

interface ContactPageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks?: () => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}



export default function ContactPage({
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToWhatWeDo,
  onNavigateToBlogs,
  onNavigateToWhyEsperia,
  onNavigateToPrivacy,
  onNavigateToTerms,
}: ContactPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const submissionTime = new Date().toLocaleString();
    const cleanName = formData.fullName.trim();
    const cleanEmail = formData.email.trim();
    const cleanSubject = formData.subject.trim() || 'General Inquiry';
    const cleanMessage = formData.message.trim();

    try {
      // 1. Create standard FormData so FormSubmit parses all fields in the email body table
      const formPayload = new FormData();
      formPayload.append('name', cleanName);
      formPayload.append('email', cleanEmail);
      formPayload.append('subject', cleanSubject);
      formPayload.append('message', cleanMessage);
      formPayload.append('Full Name', cleanName);
      formPayload.append('Email Address', cleanEmail);
      formPayload.append('Inquiry Subject', cleanSubject);
      formPayload.append('Message Content', cleanMessage);
      formPayload.append('Date & Time', submissionTime);
      formPayload.append('_replyto', cleanEmail);
      formPayload.append(
        '_subject',
        `New Inquiry: ${cleanName} - ${cleanSubject}`
      );
      formPayload.append('_captcha', 'false');
      formPayload.append('_template', 'table');

      // 2. Generate Excel-compatible CSV file and attach directly to the email
      const csvContent =
        `"FIELD","SUBMISSION DETAILS"\r\n` +
        `"Full Name","${cleanName.replace(/"/g, '""')}"\r\n` +
        `"Email Address","${cleanEmail.replace(/"/g, '""')}"\r\n` +
        `"Subject","${cleanSubject.replace(/"/g, '""')}"\r\n` +
        `"Message","${cleanMessage.replace(/"/g, '""')}"\r\n` +
        `"Submission Date","${submissionTime.replace(/"/g, '""')}"\r\n`;

      const csvBlob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
      const safeFileName = `Inquiry_${cleanName.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.csv`;
      formPayload.append('attachment', csvBlob, safeFileName);

      // Note: do not set Content-Type header so browser sets multipart/form-data boundary
      const response = await fetch('https://formsubmit.co/ajax/connect@esperiaquantum.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formPayload,
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === 'true' || data.success === true) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to submit form.');
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Unable to send automatically right now. You can email us directly at connect@esperiaquantum.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-manrope antialiased selection:bg-[#C5445A] selection:text-white flex flex-col justify-between">
      {/* ========================================================================= */}
      {/* 1. STICKY HEADER (outside overflow-hidden section)                        */}
      {/* ========================================================================= */}
      <Header
        activePage="contact"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToContact={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        scrolledBg="bg-[#0E241B]/95 shadow-xl backdrop-blur-md"
        mobileBg="bg-[#0E241B]"
        className="-mb-20 sm:-mb-24"
      />

      {/* ========================================================================= */}
      {/* 2. HERO & NAVIGATION BANNER (#3019:1169 - EXACT ATTACHED REFERENCE)      */}
      {/* ========================================================================= */}
      <div className="w-full bg-white">
        <section
          className="relative w-full text-white rounded-b-[36px] sm:rounded-b-[48px] overflow-hidden min-h-[560px] lg:h-[594px] flex flex-col justify-between"
          style={{
            background:
              'radial-gradient(circle at 75% 45%, rgb(23, 56, 43) 0%, rgb(14, 36, 27) 55%, rgb(8, 23, 17) 100%)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#1A382B]/30 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* Ambient Quantum Constellation */}
          <QuantumCanvas colorScheme="teal" opacity={0.5} particleCount={24} />

          <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 flex-1 flex flex-col justify-center">

            {/* Esperia Geometric Mark Watermark — locked to 1440px container */}
            <div className="absolute top-0 right-0 sm:right-4 lg:right-6 bottom-0 w-[55%] sm:w-[50%] lg:w-[48%] max-w-[620px] pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
              <EsperiaEmblem
                className="w-[360px] sm:w-[440px] lg:w-[520px] xl:w-[580px] h-auto"
                fill="#1E4035"
              />
            </div>

            <div className="relative z-10 max-w-[862px] flex flex-col items-start">
              {/* Home Button */}
              <div className="mb-6 sm:mb-7">
                <MotionButton
                  onClick={() => onNavigateToHome()}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-[#D8E6E3] hover:text-white text-[12px] font-manrope font-semibold transition-all duration-200 cursor-pointer border border-white/10 shadow-sm"
                >
                  <ChevronLeft size={14} className="text-white/80" />
                  <span>Home</span>
                </MotionButton>
              </div>

              {/* Headline: Connect with us */}
              <CinematicHeading className="text-4xl sm:text-6xl lg:text-[68px] font-semibold text-white font-parkinsans tracking-tight leading-[1.16] sm:leading-[1.14] mb-5 sm:mb-6">
                Connect with us
              </CinematicHeading>

              {/* Subtitle: Let's build something enduring. */}
              <CinematicReveal delay={0.2}>
                <p className="text-white/90 text-[16px] sm:text-[18px] lg:text-[19px] font-normal font-manrope leading-[1.78] sm:leading-[1.8]">
                  Let&rsquo;s build something enduring.
                </p>
              </CinematicReveal>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN SPLIT CONTENT AREA (#3019:1218)                                   */}
      {/* ========================================================================= */}
      <main className="relative overflow-hidden w-full flex-1 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-10 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 xl:gap-14">
            {/* ========================================================== */}
            {/* Left Column: Studio Locations & Heading (#3019:1219)       */}
            {/* ========================================================== */}
            <div className="w-full lg:w-[58%] xl:w-[778px] flex flex-col">
              {/* Heading Section (#3019:1221) */}
              <CinematicReveal direction="up" className="mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0D0D0D] font-parkinsans leading-[1.28] sm:leading-[1.25] tracking-tight mb-6 max-w-[575px]">
                  We are always ready to <span className="text-[#C5445A]">help you</span> and answer your questions
                </h2>

                <p className="text-[#6B7280] text-[16px] font-normal font-manrope leading-[1.75] max-w-[587px]">
                  Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
                </p>
              </CinematicReveal>

              {/* Studio Cards Grid (#3019:1227) */}
              <div className="flex flex-col gap-6 max-w-[738px]">
                {/* Row 1: US & Malaysia (#3019:1228) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* United States - Headquarters (#3019:1229) */}
                  <CinematicReveal delay={0.1} direction="up">
                    <MotionCard className="bg-[#FAFAFA] rounded-[30px] p-[32px] flex flex-col justify-between border border-transparent hover:border-[#C5445A]/20 transition-all duration-300 group shadow-sm hover:shadow-md">
                      <div>
                        <span className="text-[13px] font-semibold text-[#555555] font-manrope leading-[24px] block uppercase tracking-wider mb-2">
                          UNITED STATES - HEAD QUARTERS
                        </span>
                        <h3 className="text-[20px] font-bold text-[#111111] font-manrope leading-[1.38] group-hover:text-[#C5445A] transition-colors pb-5">
                          Esperia LLC<br />Wyoming, United States
                        </h3>
                      </div>

                      <div className="text-[14px] font-medium text-[#444444] font-manrope leading-[28px] pt-2 border-t border-gray-100/80">
                        <div>hello@esperia.me</div>
                        <div>+91-123 456 765</div>
                      </div>
                    </MotionCard>
                  </CinematicReveal>

                  {/* Malaysia (#3019:1234) */}
                  <CinematicReveal delay={0.15} direction="up">
                    <MotionCard className="bg-[#FAFAFA] rounded-[30px] p-[32px] flex flex-col justify-between border border-transparent hover:border-[#C5445A]/20 transition-all duration-300 group shadow-sm hover:shadow-md">
                      <div>
                        <span className="text-[13px] font-semibold text-[#555555] font-manrope leading-[24px] block uppercase tracking-wider mb-2">
                          MALAYSIA
                        </span>
                        <h3 className="text-[20px] font-bold text-[#111111] font-manrope leading-[1.38] group-hover:text-[#C5445A] transition-colors pb-5">
                          Esperia Quantum Sdn Bhd<br />Kuala Lumpur, Malaysia
                        </h3>
                      </div>

                      <div className="text-[14px] font-medium text-[#444444] font-manrope leading-[28px] pt-2 border-t border-gray-100/80">
                        <div>hello@esperia.me</div>
                        <div>+91-123 456 765</div>
                      </div>
                    </MotionCard>
                  </CinematicReveal>
                </div>

                {/* Row 2: India Hub (#3019:1239) */}
                <CinematicReveal delay={0.2} direction="up">
                  <MotionCard className="bg-[#FAFAFA] rounded-[30px] p-[32px] flex flex-col justify-between border border-transparent hover:border-[#C5445A]/20 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <div>
                      <span className="text-[13px] font-semibold text-[#555555] font-manrope leading-[24px] block uppercase tracking-wider mb-2">
                        INDIA
                      </span>
                      <h3 className="text-[20px] font-bold text-[#111111] font-manrope leading-[1.38] group-hover:text-[#C5445A] transition-colors pb-5">
                        Esperia Studio
                      </h3>
                    </div>

                    <div className="text-[14px] font-medium text-[#444444] font-manrope leading-[28px] pt-2 border-t border-gray-100/80">
                      <div>hello@esperia.me</div>
                      <div>+91-123 456 765</div>
                    </div>
                  </MotionCard>
                </CinematicReveal>
              </div>
            </div>

            {/* ========================================================== */}
            {/* Right Column: Dark Form Card with Scoop (#3019:1247)       */}
            {/* ========================================================== */}
            <div className="w-full lg:w-[42%] xl:w-[481px] flex flex-col items-center lg:items-end flex-shrink-0 relative">
              <div className="relative w-full max-w-[481px] min-h-[518px] select-none z-10">
                {/* Custom Scooped Radial Gradient Background Container */}
                <MotionCard
                  className="w-full min-h-[518px] rounded-[30px] p-[30px] sm:p-[36px] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between"
                  style={{
                    background:
                      'radial-gradient(circle at 27% 23%, rgba(86, 86, 86, 1) 0%, rgba(29, 31, 30, 1) 100%)',
                  }}
                >
                  <div>
                    <h3 className="text-[32px] font-bold text-white font-parkinsans tracking-tight mb-8 leading-tight">
                      Get in Touch
                    </h3>

                    {isSubmitted ? (
                      <div className="py-12 text-center flex flex-col items-center gap-4 relative z-10 animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shadow-lg shadow-emerald-900/30">
                          <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold font-parkinsans text-white tracking-tight">
                          Message Sent!
                        </h4>
                        <p className="text-sm text-slate-300 max-w-xs font-manrope leading-relaxed">
                          Thank you for reaching out. Your request has been dispatched to our team at{' '}
                          <span className="text-white font-medium">connect@esperiaquantum.com</span>. We will respond promptly.
                        </p>
                        <MotionButton
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ fullName: '', email: '', subject: '', message: '' });
                            setErrorMessage(null);
                          }}
                          className="mt-4 px-5 py-2 rounded-full border border-white/20 hover:border-white text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all cursor-pointer"
                        >
                          Send another message
                        </MotionButton>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        {errorMessage && (
                          <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/30 text-rose-200 text-xs font-manrope leading-relaxed flex flex-col gap-1.5 animate-in fade-in">
                            <span className="font-semibold">{errorMessage}</span>
                            <a
                              href={`mailto:connect@esperiaquantum.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from Esperia Website')}&body=${encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                              className="text-white underline hover:text-[#F56F6A] font-medium"
                            >
                              Click here to send email via your email app
                            </a>
                          </div>
                        )}

                        {/* Full name Field */}
                        <div className="flex flex-col group/input">
                          <input
                            type="text"
                            name="name"
                            required
                            disabled={isSubmitting}
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Full name"
                            className="w-full bg-transparent border-b border-[#ADADAD] pb-2.5 text-[14px] font-normal font-manrope text-white placeholder:text-[#898989] focus:outline-none focus:border-[#F56F6A] transition-colors disabled:opacity-50"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col group/input">
                          <input
                            type="email"
                            name="email"
                            required
                            disabled={isSubmitting}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email"
                            className="w-full bg-transparent border-b border-[#ADADAD] pb-2.5 text-[14px] font-normal font-manrope text-white placeholder:text-[#898989] focus:outline-none focus:border-[#F56F6A] transition-colors disabled:opacity-50"
                          />
                        </div>

                        {/* Subject Field */}
                        <div className="flex flex-col group/input">
                          <input
                            type="text"
                            name="subject"
                            disabled={isSubmitting}
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Subject"
                            className="w-full bg-transparent border-b border-[#ADADAD] pb-2.5 text-[14px] font-normal font-manrope text-white placeholder:text-[#898989] focus:outline-none focus:border-[#F56F6A] transition-colors disabled:opacity-50"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="flex flex-col group/input">
                          <textarea
                            rows={4}
                            name="message"
                            required
                            disabled={isSubmitting}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Message"
                            className="w-full bg-transparent border-b border-[#ADADAD] pb-2.5 text-[14px] font-normal font-manrope text-white placeholder:text-[#898989] focus:outline-none focus:border-[#F56F6A] transition-colors resize-none leading-relaxed disabled:opacity-50"
                          />
                        </div>

                        {/* Send Button (#3019:1284) */}
                        <div className="flex justify-end pt-4">
                          <MotionButton
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F56F6A] to-[#C5445A] text-white font-manrope font-semibold text-[14px] shadow-sm hover:shadow-md hover:brightness-105 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-1 h-4 w-4 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <span>Send</span>
                                <svg
                                  className="w-4 h-4 text-white"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="22" y1="2" x2="11" y2="13" />
                                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                              </>
                            )}
                          </MotionButton>
                        </div>
                      </form>
                    )}
                  </div>
                </MotionCard>
              </div>

              {/* Watermark Emblem positioned as per reference screenshot */}
              <div className="w-full flex justify-end pointer-events-none select-none z-0 -mt-24 sm:-mt-28">
                <img
                  src="/assets/figma/esperia_emblem_contact_watermark.png"
                  alt=""
                  aria-hidden="true"
                  className="w-[340px] sm:w-[380px] lg:w-[400px] xl:w-[420px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 3. FOOTER SECTION                                                         */}
      {/* ========================================================================= */}
      <Footer
        activePage="contact"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onNavigateToBlogs}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToTerms={onNavigateToTerms}
      />
    </div>
  );
}
