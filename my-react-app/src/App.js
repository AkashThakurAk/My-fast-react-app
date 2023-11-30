import './App.css';

import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Job from './component/Job.js';
import Recent from './component/Recent.js'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import '@fortawesome/fontawesome-free/css/all.css';
import { MdOutlineDesignServices, MdFacebook, MdLinkedIn, MdInstagram, MdYouTube } from 'react-icons/md';
import { FaPlay } from "react-icons/fa";
import video from './Asset/images/people-working-as-team-company.jpg';
import leftside from './Asset/images/professional-asian-businesswoman-gray-blazer.jpg';
import rightside from './Asset/images/horizontal-shot-happy-mixed-race-females.jpg';
import React from 'react';
function App() {
    return (
        <div>
            <Header />
            <main>

                <section className="hero-section d-flex justify-content-center align-items-center">
                    <div className="section-overlay"></div>

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                                <div className="hero-section-text mt-5">
                                    <h6 className="text-white">Are you looking for your dream job?</h6>

                                    <h1 className="hero-title text-white mt-4 mb-4">Online Platform. <br /> Best Job portal</h1>

                                    <a href="#categories-section" className="custom-btn custom-border-btn btn">Browse Categories</a>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <form className="custom-form hero-form" action="#" method="get" role="form">
                                    <h3 className="text-white mb-3">Search your dream job</h3>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1"><i className="bi-person custom-icon"></i></span>

                                                <input type="text" name="job-title" id="job-title" className="form-control" placeholder="Job Title" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon2"><i className="bi-geo-alt custom-icon"></i></span>

                                                <input type="text" name="job-location" id="job-location" className="form-control" placeholder="Location" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <button type="submit" className="form-control">
                                                Find a job
                                            </button>
                                        </div>

                                        <div className="col-12">
                                            <div className="d-flex flex-wrap align-items-center mt-4 mt-lg-0">
                                                <span className="text-white mb-lg-0 mb-md-0 me-2">Popular keywords:</span>

                                                <div>
                                                    <a href="job-listings.html" className="badge">Web design</a>

                                                    <a href="job-listings.html" className="badge">Marketing</a>

                                                    <a href="job-listings.html" className="badge">Customer support</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="categories-section section-padding" id="categories-section">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">

                            <div className="col-lg-12 col-12 text-center">
                                <h2 className="mb-5">Browse by <span>Categories</span></h2>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="categories-block">
                                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <MdOutlineDesignServices />

                                        <small className="categories-block-title">Web design</small>

                                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                                            <span className="categories-block-number-text">320</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="categories-block">
                                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <MdFacebook />

                                        <small className="categories-block-title">Marketing</small>

                                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                                            <span className="categories-block-number-text">180</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="categories-block">
                                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <MdFacebook />

                                        <small className="categories-block-title">Video</small>

                                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                                            <span className="categories-block-number-text">340</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="categories-block">
                                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <MdFacebook />

                                        <small className="categories-block-title">Websites</small>

                                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                                            <span className="categories-block-number-text">140</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="categories-block">
                                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <MdFacebook />

                                        <small className="categories-block-title">Customer Support</small>

                                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                                            <span className="categories-block-number-text">84</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="about-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-12">
                                <div className="about-image-wrap custom-border-radius-start">
                                    <img src={leftside} className="about-image custom-border-radius-start w-100" alt="" />

                                    <div className="about-info">
                                        <h4 className="text-white mb-0 me-2">Julia Ward</h4>

                                        <p className="text-white mb-0">Investor</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="custom-text-block">
                                    <h2 className="text-white mb-2">Introduction Gotto</h2>

                                    <p className="text-white">Gotto Job is a free website template for job portals. This layout is based on Bootstrap 5 CSS framework. Thank you for visiting <a href="https://www.tooplate.com" target="_parent">Tooplate website</a>. Images are from <a href="https://www.freepik.com/" target="_blank">FreePik</a> website.</p>

                                    <div className="custom-border-btn-wrap d-flex align-items-center mt-5">
                                        <a href="about.html" className="custom-btn custom-border-btn btn me-4">Get to know us</a>

                                        <a href="#job-section" className="custom-link smoothscroll">Explore Jobs</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-12">
                                <div className="instagram-block">
                                    <img src={rightside} className="about-image custom-border-radius-end w-100" alt="" />

                                    <div className="instagram-block-text">
                                        <a href="https://instagram.com/" className="custom-btn btn">
                                            <i className="bi-instagram"></i>
                                            @Gotto
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            {/* /////////////////////////job///////// */}
                
            <Job />

                <section>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-12 p-0">
                                <div className="custom-text-block custom-border-radius-start">
                                    <h2 className="text-white mb-3">Gotto helps you an easier way to get new job</h2>

                                    <p className="text-white">You are not allowed to redistribute the template ZIP file on any other template collection website. Please contact us for more info. Thank you.</p>

                                    <div className="d-flex mt-4">
                                        <div className="counter-thumb">
                                            <div className="d-flex">
                                                <span className="counter-number" data-from="1" data-to="12" data-speed="1000"></span>
                                                <span className="counter-number-text">M</span>
                                            </div>

                                            <span className="counter-text">Daily active users</span>
                                        </div>

                                        <div className="counter-thumb">
                                            <div className="d-flex">
                                                <span className="counter-number" data-from="1" data-to="450" data-speed="1000"></span>
                                                <span className="counter-number-text">k</span>
                                            </div>

                                            <span className="counter-text">Opening jobs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12 p-0">
                                <div className="video-thumb">
                                    <img src={video} className="about-image custom-border-radius-end" alt="" />

                                    <div className="video-info">
                                        <a href="https://www.youtube.com/tooplate" className="youtube-icon bi-youtube"><FaPlay /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            {/* ///////////////////////////////////Recent///////// */}
                <Recent />


                <Customers />


                <section className="cta-section">
                    <div className="section-overlay"></div>

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-10">
                                <h2 className="text-white mb-2">Over 10k opening jobs</h2>

                                <p className="text-white">If you are looking for free HTML templates, you may visit Tooplate website. If you need a collection of free templates, you can visit Too CSS website.</p>
                            </div>

                            <div className="col-lg-4 col-12 ms-auto">
                                <div className="custom-border-btn-wrap d-flex align-items-center mt-lg-4 mt-2">
                                    <a href="#" className="custom-btn custom-border-btn btn me-4">Create an account</a>

                                    <a href="#" className="custom-link">Post a job</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
