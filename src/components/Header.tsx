import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cinematicEase } from './MotionWrappers';

interface HeaderProps {
  activePage?: 'what-we-do' | 'why-esperia' | 'works' | 'blogs' | 'contact' | 'home';
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWhatWeDo?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToWorks?: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToContact?: () => void;
  /** Override the scrolled-state background. Defaults to dark teal glass. */
  scrolledBg?: string;
  /** Override the mobile menu background. Defaults to dark teal. */
  mobileBg?: string;
  /** Extra classes applied to the outer <header> element (e.g. negative margin for overlay). */
  className?: string;
  /** Force solid dark teal background even when not scrolled */
  solidBg?: boolean;
}

export default function Header({
  activePage,
  onNavigateToHome,
  onNavigateToWhatWeDo,
  onNavigateToWhyEsperia,
  onNavigateToWorks,
  onNavigateToBlogs,
  onNavigateToContact,
  scrolledBg = 'bg-[#051413]/95 shadow-xl backdrop-blur-md',
  mobileBg = 'bg-[#071D1B]',
  className = '',
  solidBg = false,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // Hide only when scrolled past 200px and scrolling downwards
      if (currentScrollY > 200 && currentScrollY > lastScrollY.current + 10) {
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY.current - 6 || currentScrollY <= 140) {
        setNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHome = () => {
    if (onNavigateToHome) onNavigateToHome();
    else window.location.hash = '';
  };

  const handleWhatWeDo = () => {
    if (onNavigateToWhatWeDo) onNavigateToWhatWeDo();
    else if (onNavigateToHome) onNavigateToHome('what-we-do');
    else window.location.hash = '#what-we-do';
  };

  const handleWhyEsperia = () => {
    if (onNavigateToWhyEsperia) onNavigateToWhyEsperia();
    else if (onNavigateToHome) onNavigateToHome('why-esperia');
    else window.location.hash = '#why-esperia';
  };

  const handleWorks = () => {
    if (onNavigateToWorks) onNavigateToWorks();
    else if (onNavigateToHome) onNavigateToHome('our-works');
    else window.location.hash = '#our-works';
  };

  const handleBlogs = () => {
    if (onNavigateToBlogs) onNavigateToBlogs();
    else if (onNavigateToHome) onNavigateToHome('blogs');
    else window.location.hash = '#blogs';
  };

  const handleContact = () => {
    if (onNavigateToContact) onNavigateToContact();
    else if (onNavigateToHome) onNavigateToHome('contact-us');
    else window.location.hash = '#contact-us';
  };

  const navItems = [
    { label: 'What We Do', id: 'what-we-do', onClick: handleWhatWeDo },
    { label: 'Why Esperia', id: 'why-esperia', onClick: handleWhyEsperia },
    { label: 'Our Works', id: 'works', onClick: handleWorks },
    { label: 'Blogs & Newsletters', id: 'blogs', onClick: handleBlogs },
    { label: 'Contact Us', id: 'contact', onClick: handleContact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out transform ${
        navVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      } ${
        solidBg || isScrolled ? scrolledBg : 'bg-transparent'
      } ${className}`}
    >
      <div
        className={`max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24'
        }`}
      >
        {/* Logo with micro-interaction */}
        <button
          type="button"
          onClick={handleHome}
          className="focus:outline-none flex items-center group cursor-pointer"
          aria-label="Go to home"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: cinematicEase }}
            src="/assets/figma/esperia_logo_white.svg"
            alt="ESPERIA QUANTUM"
            className="h-9 sm:h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-95"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-[13px] font-manrope">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={item.onClick}
                className={`py-1.5 px-3 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#F56F6A] font-semibold bg-white/[0.08] shadow-inner'
                    : 'text-white/85 hover:text-white hover:bg-white/[0.04] font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

          {/* Mobile Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: cinematicEase }}
              className={`md:hidden ${mobileBg} backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm font-manrope shadow-2xl overflow-hidden`}
            >
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.25 }}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    item.onClick();
                  }}
                  className={`text-left py-2 transition-colors ${
                    activePage === item.id
                      ? 'text-[#F56F6A] font-semibold'
                      : 'text-white/90 hover:text-white'
                  } ${item.id === 'contact' ? 'pt-3 border-t border-white/20' : ''}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
}
