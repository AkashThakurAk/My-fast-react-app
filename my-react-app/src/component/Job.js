import React from "react";
import google from '../Asset/images/logos/google.png';
import apple from '../Asset/images/logos/apple.png';
import meta from '../Asset/images/logos/meta.png';
import slack from '../Asset/images/logos/slack.png';
import market from '../Asset/images/logos/creative-market.png';

const Job = () => {
    return (
        <section className="job-section job-featured-section section-padding" id="job-section">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 text-center mx-auto mb-4">
                        <h2>Featured Jobs</h2>

                        <p><strong>Over 10k opening jobs</strong> Feel free to download and use our free HTML templates from Tooplate website.</p>
                    </div>

                    <div className="col-lg-12 col-12">
                        <div className="job-thumb d-flex">
                            <div className="job-image-wrap bg-white shadow-lg">
                                <img src={google} className="job-image img-fluid" alt="" />
                            </div>

                            <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                                <div className="mb-3">
                                    <h4 className="job-title mb-lg-0">
                                        <a href="job-details.html" className="job-title-link">Technical Lead</a>
                                    </h4>

                                    <div className="d-flex flex-wrap align-items-center">
                                        <p className="job-location mb-0">
                                            <i className="custom-icon bi-geo-alt me-1"></i>
                                            Kuala, Malaysia
                                        </p>

                                        <p className="job-date mb-0">
                                            <i className="custom-icon bi-clock me-1"></i>
                                            10 hours ago
                                        </p>

                                        <p className="job-price mb-0">
                                            <i className="custom-icon bi-cash me-1"></i>
                                            $20k
                                        </p>

                                        <div className="d-flex">
                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge badge-level">Internship</a>
                                            </p>

                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge">Freelance</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-section-btn-wrap">
                                    <a href="job-details.html" className="custom-btn btn">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="job-thumb d-flex">
                            <div className="job-image-wrap bg-white shadow-lg">
                                <img src={apple} className="job-image img-fluid" alt="" />
                            </div>

                            <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                                <div className="mb-3">
                                    <h4 className="job-title mb-lg-0">
                                        <a href="job-details.html" className="job-title-link">Business Director</a>
                                    </h4>

                                    <div className="d-flex flex-wrap align-items-center">
                                        <p className="job-location mb-0">
                                            <i className="custom-icon bi-geo-alt me-1"></i>
                                            California, USA
                                        </p>

                                        <p className="job-date mb-0">
                                            <i className="custom-icon bi-clock me-1"></i>
                                            1 day ago
                                        </p>

                                        <p className="job-price mb-0">
                                            <i className="custom-icon bi-cash me-1"></i>
                                            $90k
                                        </p>

                                        <div className="d-flex">
                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge badge-level">Senior</a>
                                            </p>

                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge">Full Time</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-section-btn-wrap">
                                    <a href="job-details.html" className="custom-btn btn">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="job-thumb d-flex">
                            <div className="job-image-wrap bg-white shadow-lg">
                                <img src={meta} className="job-image img-fluid" alt="" />
                            </div>

                            <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                                <div className="mb-3">
                                    <h4 className="job-title mb-lg-0">
                                        <a href="job-details.html" className="job-title-link">HR Manager</a>
                                    </h4>

                                    <div className="d-flex flex-wrap align-items-center">
                                        <p className="job-location mb-0">
                                            <i className="custom-icon bi-geo-alt me-1"></i>
                                            Tower, Paris
                                        </p>

                                        <p className="job-date mb-0">
                                            <i className="custom-icon bi-clock me-1"></i>
                                            22 hours ago
                                        </p>

                                        <p className="job-price mb-0">
                                            <i className="custom-icon bi-cash me-1"></i>
                                            $50k
                                        </p>

                                        <div className="d-flex">
                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge badge-level">Junior</a>
                                            </p>

                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge">Contract</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-section-btn-wrap">
                                    <a href="job-details.html" className="custom-btn btn">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="job-thumb d-flex">
                            <div className="job-image-wrap bg-white shadow-lg">
                                <img src={slack} className="job-image img-fluid" alt="" />
                            </div>

                            <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                                <div className="mb-3">
                                    <h4 className="job-title mb-lg-0">
                                        <a href="job-details.html" className="job-title-link">Dev Ops</a>
                                    </h4>

                                    <div className="d-flex flex-wrap align-items-center">
                                        <p className="job-location mb-0">
                                            <i className="custom-icon bi-geo-alt me-1"></i>
                                            Bangkok, Thailand
                                        </p>

                                        <p className="job-date mb-0">
                                            <i className="custom-icon bi-clock me-1"></i>
                                            40 minutes ago
                                        </p>

                                        <p className="job-price mb-0">
                                            <i className="custom-icon bi-cash me-1"></i>
                                            $75k - 80k
                                        </p>

                                        <div className="d-flex">
                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge badge-level">Senior</a>
                                            </p>

                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge">Part Time</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-section-btn-wrap">
                                    <a href="job-details.html" className="custom-btn btn">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <div className="job-thumb d-flex">
                            <div className="job-image-wrap bg-white shadow-lg">
                                <img src={market} className="job-image img-fluid" alt="" />
                            </div>

                            <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                                <div className="mb-3">
                                    <h4 className="job-title mb-lg-0">
                                        <a href="job-details.html" className="job-title-link">UX Designer</a>
                                    </h4>

                                    <div className="d-flex flex-wrap align-items-center">
                                        <p className="job-location mb-0">
                                            <i className="custom-icon bi-geo-alt me-1"></i>
                                            Bangkok, Thailand
                                        </p>

                                        <p className="job-date mb-0">
                                            <i className="custom-icon bi-clock me-1"></i>
                                            2 hours ago
                                        </p>

                                        <p className="job-price mb-0">
                                            <i className="custom-icon bi-cash me-1"></i>
                                            $100k
                                        </p>

                                        <div className="d-flex">
                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge badge-level">Entry</a>
                                            </p>

                                            <p className="mb-0">
                                                <a href="job-listings.html" className="badge">Remote</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-section-btn-wrap">
                                    <a href="job-details.html" className="custom-btn btn">Apply now</a>
                                </div>
                            </div>
                        </div>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center mt-5">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">Prev</span>
                                    </a>
                                </li>

                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">1</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#">4</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#">5</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Job;