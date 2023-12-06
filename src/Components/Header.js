import React from 'react';
import logoImg from '../assets/img/Logo.png';

const Header = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between position-relative">
                <div className="logo">
                    <a href="#">
                        <img src={logoImg} alt="" className="img-fluid" />
                    </a>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a className="nav-link scrollto active" href="#hero">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#about">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#team">
                                Team
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Drop Down</span> <i className="bi bi-chevron-down" />
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Drop Down 1</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        <span>Deep Drop Down</span>{" "}
                                        <i className="bi bi-chevron-right" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Deep Drop Down 1</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Drop Down 2</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown megamenu">
                            <a href="#">
                                <span>Mega Menu</span> <i className="bi bi-chevron-down" />
                            </a>
                            <ul>
                                <li>
                                    <strong>Column 1</strong>
                                    <a href="#">Column 1 link 1</a>
                                    <a href="#">Column 1 link 2</a>
                                    <a href="#">Column 1 link 3</a>
                                </li>
                                <li>
                                    <strong>Column 2</strong>
                                    <a href="#">Column 2 link 1</a>
                                    <a href="#">Column 2 link 2</a>
                                    <a href="#">Column 3 link 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
            </div>
        </header>
    );
};

export default Header;