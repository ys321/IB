import React from 'react';

const Team = () => {
    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-title" data-aos="fade-in" data-aos-delay={100}>
                    <h2>Team</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                        fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="member" data-aos="fade-up">
                            <div className="pic">
                                <img
                                    src="assets/img/team/team-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="member" data-aos="fade-up" data-aos-delay={150}>
                            <div className="pic">
                                <img
                                    src="assets/img/team/team-2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="member" data-aos="fade-up" data-aos-delay={300}>
                            <div className="pic">
                                <img
                                    src="assets/img/team/team-3.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;