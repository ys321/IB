import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const InnerPageComponent = () => {
  useEffect(() => {

  }, []);

  return (
    <div>
      {/* ======= Header ======= */}
      <Header />
      <main id="main">
        {/* ======= Breadcrumbs Section ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Inner Page</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Inner Page</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="inner-page">
          <div className="container">
            <p>
              Example inner page template
            </p>
          </div>
        </section>
      </main>

      {/* ======= Footer ======= */}
      <Footer />

      {/* Back to Top Button */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default InnerPageComponent;