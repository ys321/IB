import React, { useEffect } from 'react';
import Isotope from 'isotope-layout';
import AOS from 'aos';
import { CountUp } from 'countup.js';
import Header from '../Components/Header';
import HeroCard from '../Components/HeroCard';
import AboutUs from '../Components/AboutUs';
import Services from '../Components/Services';
import Counts from '../Components/Counts';
import CTA from '../Components/CTA';
import Portfolio from '../Components/Portfolio';
import Testimonials from '../Components/Testimonials';
import Team from '../Components/Team';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import BackToTop from 'react-back-to-top-button';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Optional, smooth scrolling animation
  });
};

const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const IndexPage = () => {
  const countUp = new CountUp('your-target-element-id', 1000);
  countUp.start();

  useEffect(() => {
    // Initialize Isotope
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });
    }

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div>
      <Header />
      <HeroCard />
      {/* End Hero */}
      <main id="main">
        <AboutUs />
        {/* ======= Services Section ======= */}
        <Services />
        {/* End Services Section */}
        {/* ======= Counts Section ======= */}
        <Counts />
        {/* End Counts Section */}
        {/* ======= Cta Section ======= */}
        <CTA />
        {/* End Cta Section */}
        {/* ======= Portfolio Section ======= */}
        <Portfolio />
        {/* End Portfolio Section */}
        {/* ======= Testimonials Section ======= */}
        <Testimonials />
        {/* End Testimonials Section */}
        {/* ======= Team Section ======= */}
        <Team />
        {/* End Team Section */}
        {/* ======= Contact Section ======= */}
        <Contact />
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      <Footer />
        <Link onClick={scrollToTop}
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </Link>
      <BackToTop showAt={100} speed={1500} easing="easeInOutQuint">
      </BackToTop>

    </div>
  );
};

export default IndexPage;