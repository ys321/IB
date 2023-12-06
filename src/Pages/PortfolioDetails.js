import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function PortfolioDetails() {
    return (
        <div>
            {/* ======= Header ======= */}
            <Header />
            <main id="main">

                <section class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Portfolio Details</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li>Portfolio Details</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section id="portfolio-details" class="portfolio-details">
                    <div class="container">

                        <div class="row gy-4">

                            <div class="col-lg-8">
                                <div class="portfolio-details-slider swiper">
                                    <div class="swiper-wrapper align-items-center">

                                        <div class="swiper-slide">
                                            <img src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                                        </div>

                                        <div class="swiper-slide">
                                            <img src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                                        </div>

                                        <div class="swiper-slide">
                                            <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                                        </div>

                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Web design</li>
                                        <li><strong>Client</strong>: ASU Company</li>
                                        <li><strong>Project date</strong>: 01 March, 2020</li>
                                        <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                    </ul>
                                </div>
                                <div class="portfolio-description">
                                    <h2>This is an example of portfolio detail</h2>
                                    <p>
                                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                    </p>
                                </div>
                            </div>

                        </div>

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
}

export default PortfolioDetails