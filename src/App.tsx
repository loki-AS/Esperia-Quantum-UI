import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/MotionWrappers';
import {
  LandingPage,
  ContactPage,
  OurWorksPage,
  WatermelonDetailPage,
  YoungGeniusDetailPage,
  IrisHrDetailPage,
  TasConnectDetailPage,
  WhatWeDoPage,
  BlogsPage,
  BlogDetailPage,
  WhyEsperiaPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
} from './pages';
import type { PageType } from './types';

export default function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#blog/')) {
      return hash.replace('#blog/', '') || 'ai-creativity';
    }
    return 'ai-creativity';
  });

  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    const hash = window.location.hash;
    if (hash === '#why-esperia') return 'why-esperia';
    if (hash === '#what-we-do' || hash === '#services') return 'what-we-do';
    if (hash === '#contact-us' || hash === '#contact') return 'contact';
    if (hash === '#watermelon' || hash === '#our-works/watermelon') return 'watermelon';
    if (hash === '#young-genius') return 'young-genius';
    if (hash === '#iris-hr') return 'iris-hr';
    if (hash === '#tas-connect') return 'tas-connect';
    if (hash === '#our-works' || hash === '#works') return 'works';
    if (hash.startsWith('#blog/')) return 'blog-detail';
    if (hash === '#blogs' || hash === '#blogs-and-newsletters' || hash === '#newsletters') return 'blogs';
    if (hash === '#privacy' || hash === '#privacy-policy') return 'privacy';
    if (hash === '#terms' || hash === '#terms-of-service' || hash === '#terms-and-conditions') return 'terms';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#why-esperia') {
        setCurrentPage('why-esperia');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#what-we-do' || hash === '#services') {
        setCurrentPage('what-we-do');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact-us' || hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#watermelon' || hash === '#our-works/watermelon') {
        setCurrentPage('watermelon');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#young-genius') {
        setCurrentPage('young-genius');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#iris-hr') {
        setCurrentPage('iris-hr');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#tas-connect') {
        setCurrentPage('tas-connect');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#our-works' || hash === '#works') {
        setCurrentPage('works');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#blog/')) {
        const bId = hash.replace('#blog/', '');
        setSelectedBlogId(bId || 'ai-creativity');
        setCurrentPage('blog-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#blogs' || hash === '#blogs-and-newsletters' || hash === '#newsletters') {
        setCurrentPage('blogs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#privacy' || hash === '#privacy-policy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms' || hash === '#terms-of-service' || hash === '#terms-and-conditions') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToWhyEsperia = () => {
    window.location.hash = '#why-esperia';
    setCurrentPage('why-esperia');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWhatWeDo = () => {
    window.location.hash = '#what-we-do';
    setCurrentPage('what-we-do');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    window.location.hash = '#contact-us';
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWorks = () => {
    window.location.hash = '#our-works';
    setCurrentPage('works');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWatermelon = () => {
    window.location.hash = '#watermelon';
    setCurrentPage('watermelon');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToYoungGenius = () => {
    window.location.hash = '#young-genius';
    setCurrentPage('young-genius');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToIrisHr = () => {
    window.location.hash = '#iris-hr';
    setCurrentPage('iris-hr');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTasConnect = () => {
    window.location.hash = '#tas-connect';
    setCurrentPage('tas-connect');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBlogs = () => {
    window.location.hash = '#blogs';
    setCurrentPage('blogs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBlog = (blogId: string) => {
    window.location.hash = `#blog/${blogId}`;
    setSelectedBlogId(blogId);
    setCurrentPage('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPrivacy = () => {
    window.location.hash = '#privacy';
    setCurrentPage('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTerms = () => {
    window.location.hash = '#terms';
    setCurrentPage('terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (sectionId?: string) => {
    if (sectionId === 'why-esperia') {
      navigateToWhyEsperia();
      return;
    }
    if (sectionId === 'blogs' || sectionId === 'newsletters') {
      navigateToBlogs();
      return;
    }
    setCurrentPage('home');
    if (sectionId) {
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={currentPage}>
        {currentPage === 'why-esperia' ? (
          <WhyEsperiaPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
        />
      ) : currentPage === 'blogs' ? (
        <BlogsPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onSelectBlog={navigateToBlog}
        />
      ) : currentPage === 'blog-detail' ? (
        <BlogDetailPage
          blogId={selectedBlogId}
          onBack={navigateToBlogs}
          onSelectBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
        />
      ) : currentPage === 'what-we-do' ? (
        <WhatWeDoPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
        />
      ) : currentPage === 'contact' ? (
        <ContactPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onNavigateToPrivacy={navigateToPrivacy}
          onNavigateToTerms={navigateToTerms}
        />
      ) : currentPage === 'works' ? (
        <OurWorksPage
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onViewWatermelon={navigateToWatermelon}
          onViewYoungGenius={navigateToYoungGenius}
          onViewIrisHr={navigateToIrisHr}
          onViewTasConnect={navigateToTasConnect}
        />
      ) : currentPage === 'watermelon' ? (
        <WatermelonDetailPage
          onBack={navigateToWorks}
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onViewYoungGenius={navigateToYoungGenius}
          onViewIrisHr={navigateToIrisHr}
          onViewTasConnect={navigateToTasConnect}
        />
      ) : currentPage === 'young-genius' ? (
        <YoungGeniusDetailPage
          onBack={navigateToWorks}
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onViewWatermelon={navigateToWatermelon}
          onViewIrisHr={navigateToIrisHr}
          onViewTasConnect={navigateToTasConnect}
        />
      ) : currentPage === 'iris-hr' ? (
        <IrisHrDetailPage
          onBack={navigateToWorks}
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onViewWatermelon={navigateToWatermelon}
          onViewYoungGenius={navigateToYoungGenius}
          onViewTasConnect={navigateToTasConnect}
        />
      ) : currentPage === 'tas-connect' ? (
        <TasConnectDetailPage
          onBack={navigateToWorks}
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onViewWatermelon={navigateToWatermelon}
          onViewYoungGenius={navigateToYoungGenius}
          onViewIrisHr={navigateToIrisHr}
        />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicyPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onNavigateToPrivacy={navigateToPrivacy}
          onNavigateToTerms={navigateToTerms}
        />
      ) : currentPage === 'terms' ? (
        <TermsOfServicePage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onNavigateToPrivacy={navigateToPrivacy}
          onNavigateToTerms={navigateToTerms}
        />
      ) : (
        <LandingPage
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWorks={navigateToWorks}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onViewWatermelon={navigateToWatermelon}
          onViewYoungGenius={navigateToYoungGenius}
          onViewIrisHr={navigateToIrisHr}
          onViewTasConnect={navigateToTasConnect}
        />
      )}
      </PageTransition>
    </AnimatePresence>
  );
}
