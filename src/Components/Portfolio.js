// import React from 'react';

// const Portfolio = () => {
//     return (
//         <section id="portfolio" className="portfolio">
//             <div className="container">
//                 <div className="section-title" data-aos="fade-in" data-aos-delay={100}>
//                     <h2>Portfolio</h2>
//                     <p>
//                         Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
//                         aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
//                         quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
//                         fugiat sit in iste officiis commodi quidem hic quas.
//                     </p>
//                 </div>
//                 <div className="row" data-aos="fade-in">
//                     <div className="col-lg-12 d-flex justify-content-center">
//                         <ul id="portfolio-flters">
//                             <li data-filter="*" className="filter-active">
//                                 All
//                             </li>
//                             <li data-filter=".filter-app">App</li>
//                             <li data-filter=".filter-card">Card</li>
//                             <li data-filter=".filter-web">Web</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="row portfolio-container" data-aos="fade-up">
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-1.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-1.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="App 1"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-2.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-2.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="Web 3"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-3.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-3.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="App 2"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-4.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-4.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="Card 2"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-5.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-5.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="Web 2"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-6.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-6.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="App 3"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-7.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-7.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="Card 1"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-8.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-8.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="Card 3"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//                         <div className="portfolio-wrap">
//                             <img
//                                 src="assets/img/portfolio/portfolio-9.jpg"
//                                 className="img-fluid"
//                                 alt=""
//                             />
//                             <div className="portfolio-links">
//                                 <a
//                                     href="assets/img/portfolio/portfolio-9.jpg"
//                                     data-gallery="portfolioGallery"
//                                     className="portfolio-lightbox"
//                                     title="Web 3"
//                                 >
//                                     <i className="bx bx-plus" />
//                                 </a>
//                                 <a href="portfolio-details.html" title="More Details">
//                                     <i className="bx bx-link" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Portfolio;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('*'); // Default filter is set to '*'

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  //   const portfolioItems = [
  //     // Your portfolio items here
  //   ];
  const portfolioItems = [
    {
      id: 1,
      image: "assets/img/portfolio/portfolio-9.jpg",
      category: "filter-app",

    },
    {
      id: 4,
      image: "assets/img/portfolio/portfolio-1.jpg",
      category: "filter-app",

    },
    {
      id: 6,
      image: "assets/img/portfolio/portfolio-2.jpg",
      category: "filter-card",

    },
    {
      id: 7,
      image: "assets/img/portfolio/portfolio-3.jpg",
      category: "filter-card",

    }
  ]

  const filteredItems =
    filter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(filter));

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-in" data-aos-delay={100}>
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        {/* ... your existing code ... */}
        <div className="row" data-aos="fade-in">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li
                onClick={() => handleFilterChange('*')}
                className={filter === '*' ? 'filter-active' : ''}
              >
                All
              </li>
              <li
                onClick={() => handleFilterChange('filter-app')}
                className={filter === 'filter-app' ? 'filter-active' : ''}
              >
                App
              </li>
              <li
                onClick={() => handleFilterChange('filter-card')}
                className={filter === 'filter-card' ? 'filter-active' : ''}
              >
                Card
              </li>
              <li
                onClick={() => handleFilterChange('filter-web')}
                className={filter === 'filter-web' ? 'filter-active' : ''}
              >
                Web
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up">
          {filteredItems.map((item) => (
            <div
              className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}
              key={item.id}
            >
              <div className="portfolio-wrap">
                <img src={item.image} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href={item.image}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <Link to="/PortfolioDetails"  title="More Details">
                    <i className="bx bx-link" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
