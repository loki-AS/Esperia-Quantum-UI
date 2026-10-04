import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  Share2,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  BookOpen
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BLOGS_DATA, BlogItem } from '../data/blogsData';
import {
  CinematicReveal,
  CinematicHeading,
  MotionButton,
  MotionCard,
} from '../components/MotionWrappers';

interface BlogDetailPageProps {
  blogId?: string;
  onBack: () => void;
  onSelectBlog?: (id: string) => void;
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo: () => void;
  onNavigateToWhyEsperia?: () => void;
}

interface CommentItem {
  id: string;
  name: string;
  avatar: string;
  date: string;
  text: string;
  expanded?: boolean;
}

export default function BlogDetailPage({
  blogId = 'ai-creativity',
  onBack,
  onSelectBlog,
  onNavigateToHome,
  onNavigateToWorks,
  onNavigateToContact,
  onNavigateToWhatWeDo,
  onNavigateToWhyEsperia,
}: BlogDetailPageProps) {
  const [activeBlogId, setActiveBlogId] = useState(blogId);

  // Sync if prop changes
  useEffect(() => {
    setActiveBlogId(blogId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blogId]);

  // Find the current blog item
  const currentBlog: BlogItem =
    BLOGS_DATA.find((b) => b.id === activeBlogId) || BLOGS_DATA[0];

  // Likes and interactions state
  const [likesCount, setLikesCount] = useState(68);
  const [hasLiked, setHasLiked] = useState(false);
  const [dislikesCount, setDislikesCount] = useState(2);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [isFollowingAuthor, setIsFollowingAuthor] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Comments state
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: '1',
      name: 'Samir Patel',
      avatar: '/assets/figma/blog_comment_sam1.png',
      date: 'Jun 6, 2026',
      text: 'This aligns exactly with what our engineering squads experienced when rolling out AI copilots. The real bottleneck was never typing speed—it was architectural decision latency. Great write-up!',
      expanded: false,
    },
    {
      id: '2',
      name: 'Samantha Wu',
      avatar: '/assets/figma/blog_comment_sam2.png',
      date: 'Jun 7, 2026',
      text: 'The point on human judgment as the ultimate moat is crucial. Too many enterprise teams worry about syntax obsolescence when they should be investing heavily in domain taxonomy and system thinking.',
      expanded: false,
    },
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleToggleLike = () => {
    if (hasLiked) {
      setLikesCount((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setHasLiked(true);
      if (hasDisliked) {
        setDislikesCount((prev) => prev - 1);
        setHasDisliked(false);
      }
    }
  };

  const handleToggleDislike = () => {
    if (hasDisliked) {
      setDislikesCount((prev) => prev - 1);
      setHasDisliked(false);
    } else {
      setDislikesCount((prev) => prev + 1);
      setHasDisliked(true);
      if (hasLiked) {
        setLikesCount((prev) => prev - 1);
        setHasLiked(false);
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentBlog.title,
        text: currentBlog.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name: 'You',
      avatar: '/assets/figma/blog_comment_user.png',
      date: 'Just now',
      text: newCommentText.trim(),
      expanded: false,
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const toggleCommentExpand = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, expanded: !c.expanded } : c))
    );
  };

  const handleSelectOtherBlog = (otherId: string) => {
    if (onSelectBlog) {
      onSelectBlog(otherId);
    } else {
      setActiveBlogId(otherId);
      window.location.hash = `#blog/${otherId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Other blogs for related section (exclude current blog)
  const otherBlogs = BLOGS_DATA.filter((b) => b.id !== currentBlog.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-['Manrope',sans-serif] antialiased selection:bg-[#C5445A] selection:text-white flex flex-col justify-between">
      {/* ========================================================================= */}
      {/* 1. HEADER NAVIGATION                                                      */}
      {/* ========================================================================= */}
      <Header
        activePage="blogs"
        solidBg
        onNavigateToHome={onNavigateToHome}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToBlogs={onBack}
        onNavigateToContact={onNavigateToContact}
      />

      {/* ========================================================================= */}
      {/* 2. MAIN DETAIL / BRIEF CONTENT                                            */}
      {/* ========================================================================= */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-8 pb-20">

        {/* Back Link Button to Blogs Grid */}
        <div className="mb-8 sm:mb-12">
          <MotionButton
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#111111] hover:text-[#C5445A] transition-colors cursor-pointer group px-3.5 py-2 rounded-full bg-gray-100/70 hover:bg-gray-100"
          >
            <ChevronLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            <span>BACK TO BLOGS &amp; NEWSLETTERS</span>
          </MotionButton>
        </div>

        {/* Hero Section: Title, Category & Featured Media */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column: Heading, Category & Subtitle */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker tag with dash */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-3 h-0.5 bg-[#C5445A] rounded-full inline-block" />
              <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C5445A]">
                {currentBlog.category}
              </span>
            </div>

            {/* Main Headline */}
            <CinematicHeading className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-bold font-['Parkinsans',sans-serif] tracking-normal text-[#0A0A0A] leading-[1.35] sm:leading-[1.32] lg:leading-[1.35] mb-7 sm:mb-8">
              {currentBlog.title}
            </CinematicHeading>

            {/* Subtitle */}
            <CinematicReveal delay={0.15}>
              <p className="text-[#555555] text-base sm:text-lg font-normal leading-[1.8] max-w-2xl font-['Manrope',sans-serif] mb-7">
                {currentBlog.subtitle}
              </p>
            </CinematicReveal>

            {/* Author Meta Strip */}
            <div className="flex items-center flex-wrap gap-4 text-xs sm:text-sm text-[#666666] pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
                  <img
                    src={currentBlog.author.avatar}
                    alt={currentBlog.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-bold text-[#111111]">{currentBlog.author.name}</span>
                  <span className="text-gray-400 mx-1.5">·</span>
                  <span className="text-[#666666]">{currentBlog.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-500 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-gray-400" />
                  {currentBlog.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-gray-400" />
                  {currentBlog.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Cover Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="w-full rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-gray-100 bg-[#071F1A]">
                <img
                  src={currentBlog.coverImage}
                  alt={currentBlog.title}
                  className="w-full h-auto object-cover max-h-[380px] cursor-pointer hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Callout Bar (if stats available) */}
        {currentBlog.stats && currentBlog.stats.length > 0 && (
          <section className="mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-[#FAFAF8] border border-gray-200/80 rounded-2xl p-6 sm:p-8">
              {currentBlog.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span className="text-3xl sm:text-4xl font-extrabold font-['Parkinsans',sans-serif] text-[#C5445A] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6B7280] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Structured Executive Brief Sections (Similar to Watermelon Detail Page) */}
        <section className="max-w-4xl mb-16 space-y-12 sm:space-y-14">
          {/* Executive Overview Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold">
            <Sparkles size={14} className="text-emerald-600" />
            <span>Executive Brief &amp; Analysis</span>
          </div>

          {currentBlog.sections.map((section, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-10 last:border-b-0">
              <h2 className="text-xl sm:text-2xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C5445A]/10 text-[#C5445A] text-xs font-bold inline-flex items-center justify-center">
                  0{idx + 1}
                </span>
                <span>{section.title}</span>
              </h2>
              <div className="space-y-4 text-[#555555] text-[15px] sm:text-[16px] font-normal font-['Manrope',sans-serif] leading-[1.85]">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Author Bio, Like/Dislike, and Share Bar */}
        <section className="max-w-4xl pt-6 pb-8 border-t border-b border-gray-200 mb-16 flex flex-wrap items-center justify-between gap-6">
          {/* Author Box */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
              <img
                src={currentBlog.author.avatar}
                alt={currentBlog.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[15px] text-[#0A0A0A]">
                  {currentBlog.author.name}
                </span>
                <span className="text-gray-300">·</span>
                <button
                  type="button"
                  onClick={() => setIsFollowingAuthor(!isFollowingAuthor)}
                  className="text-xs font-semibold text-[#C5445A] hover:underline cursor-pointer"
                >
                  {isFollowingAuthor ? 'Following' : '+ Follow'}
                </button>
              </div>
              <p className="text-xs text-[#6B7280]">{currentBlog.author.role}</p>
            </div>
          </div>

          {/* Reactions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Likes / Dislikes Pill */}
            <div className="flex items-center gap-2.5 bg-gray-50 px-3.5 py-2 rounded-full border border-gray-200">
              <button
                type="button"
                onClick={handleToggleLike}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer text-xs sm:text-sm font-semibold ${
                  hasLiked ? 'text-emerald-700' : 'text-[#6B6B6B] hover:text-black'
                }`}
                title="Like article"
              >
                <ThumbsUp size={15} className={hasLiked ? 'scale-110 text-emerald-600' : ''} />
                <span>{likesCount}</span>
              </button>

              <div className="w-[1px] h-4 bg-gray-300" />

              <button
                type="button"
                onClick={handleToggleDislike}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer text-xs sm:text-sm font-semibold ${
                  hasDisliked ? 'text-red-700' : 'text-[#6B6B6B] hover:text-black'
                }`}
                title="Dislike article"
              >
                <ThumbsDown size={15} className={hasDisliked ? 'scale-110 text-red-600' : ''} />
                <span>{dislikesCount < 10 ? `0${dislikesCount}` : dislikesCount}</span>
              </button>
            </div>

            {/* Share Button */}
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-100 text-xs sm:text-sm font-medium text-[#4A4A4A] transition-colors cursor-pointer"
              title="Share article"
            >
              <Share2 size={15} />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </section>

        {/* Comments Section */}
        <section className="max-w-4xl mb-24">
          <h3 className="text-xl sm:text-2xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A] mb-6">
            Discussion &amp; Perspectives ({comments.length})
          </h3>

          {/* Add Comment Input Bar */}
          <form onSubmit={handleAddComment} className="flex items-center gap-3 sm:gap-4 mb-8">
            <div className="w-10 h-10 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
              <img
                src="/assets/figma/blog_comment_user.png"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 relative">
              <input
                type="text"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Share your perspective or ask a question..."
                className="w-full bg-[#F6F6F6] border border-[#D9D9D9] rounded-xl px-4 py-2.5 text-[14px] sm:text-[15px] font-manrope text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:border-[#C5445A] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#0A0A0A] text-white text-[14px] font-semibold font-manrope hover:bg-[#C5445A] active:scale-[0.98] transition-all cursor-pointer flex-shrink-0"
            >
              Post
            </button>
          </form>

          {/* Comment Cards List */}
          <div className="flex flex-col gap-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white flex flex-col gap-2.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-[#DE5E60] overflow-hidden flex-shrink-0">
                      <img
                        src={comment.avatar}
                        alt={comment.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-bold font-['Parkinsans',sans-serif] text-black">
                        {comment.name}
                      </span>
                      <span className="text-[11px] font-normal text-[#6B6B6B]">
                        {comment.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[14px] font-normal font-manrope text-[#555555] leading-relaxed">
                  {comment.text}
                </p>

                {comment.expanded && (
                  <p className="text-[13px] text-gray-500 italic mt-1">
                    Thank you for joining the discussion. Our editorial team reviews enterprise comments regularly.
                  </p>
                )}

                <div>
                  <button
                    type="button"
                    onClick={() => toggleCommentExpand(comment.id)}
                    className="text-[12px] font-medium text-[#C5445A] hover:underline cursor-pointer"
                  >
                    {comment.expanded ? 'View Less' : 'View More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 3. RELATED BLOGS SECTION (Modeled after Other Works 4-card grid)        */}
        {/* ======================================================================= */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-['Parkinsans',sans-serif] text-[#0A0A0A]">
              More Blogs &amp; Insights
            </h2>
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#C5445A] hover:text-[#9e2e41] transition-colors cursor-pointer"
            >
              <span>View All Blogs</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherBlogs.map((b, idx) => (
              <CinematicReveal key={b.id} delay={idx * 0.05} direction="up">
                <MotionCard
                  onClick={() => handleSelectOtherBlog(b.id)}
                  className="bg-[#F4F4F1] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-slate-100 shadow-sm group cursor-pointer h-full"
                >
                  <div>
                    {/* Thumbnail Container */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-[16/10] flex items-center justify-center mb-4 border border-slate-100/80">
                      <img
                        src={b.thumbnailImage || b.coverImage}
                        alt={b.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Category Pill */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5445A] block mb-1">
                      {b.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-bold text-[14px] sm:text-[15px] text-[#0A0A0A] font-['Parkinsans',sans-serif] line-clamp-2 leading-snug group-hover:text-[#C5445A] transition-colors mb-2">
                      {b.title}
                    </h3>

                    {/* Author / Date snippet */}
                    <p className="text-[11px] text-[#6B7280] font-manrope">
                      {b.author.name} · {b.readTime}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 mt-4">
                    <span className="text-[11px] text-[#888888] font-medium">Read Brief</span>
                    <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#C5445A] group-hover:translate-x-1 transition-transform">
                      <span>&gt;</span>
                    </span>
                  </div>
                </MotionCard>
              </CinematicReveal>
            ))}
          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* 4. FOOTER (Shared Brand Component)                                        */}
      {/* ========================================================================= */}
      <Footer
        activePage="blogs"
        onNavigateToHome={onNavigateToHome}
        onNavigateToWorks={onNavigateToWorks}
        onNavigateToContact={onNavigateToContact}
        onNavigateToWhatWeDo={onNavigateToWhatWeDo}
        onNavigateToBlogs={onBack}
        onNavigateToWhyEsperia={onNavigateToWhyEsperia}
      />
    </div>
  );
}
