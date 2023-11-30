import React from "react";
import joba from '../Asset/images/jobs/it-professional-works-startup-project.jpg';
import jobb from '../Asset/images/jobs/marketing-assistant.jpg';
import jobe from '../Asset/images/jobs/coding-man.jpg';
import jobf from '../Asset/images/jobs/pretty-blogger-posing-cozy-apartment.jpg';
import jobh from '../Asset/images/jobs/paper-analysis.jpg';
import jobi from '../Asset/images/jobs/logo-designer-working-computer-desktop.jpg';
import salesforce from '../Asset/images/logos/salesforce.png';
import spotify from '../Asset/images/logos/spotify.png';
import twitter from '../Asset/images/logos/twitter.png';
import yelp from '../Asset/images/logos/yelp.png';
import paypal from '../Asset/images/logos/paypal.png';
import envato from '../Asset/images/logos/envato.png';

const jobs = [
    {
        id: 1,
        title: 'Technical Lead',
        company: 'Salesforce',
        location: 'Kuala, Malaysia',
        date: '10 hours ago',
        price: '$50k',
        icon: salesforce,
        image: joba,
        badges: ['Internship', 'Freelance'],
    },
    {
        id: 2,
        title: 'Technical Lead',
        company: 'spotify',
        location: 'Kuala, Malaysia',
        date: '10 hours ago',
        price: '$50k',
        icon: spotify,
        image: jobe,
        badges: ['Internship', 'Freelance'],
    },
    {
        id: 3,
        title: 'Technical Lead',
        company: 'twitter',
        location: 'Kuala, Malaysia',
        date: '10 hours ago',
        price: '$50k',
        icon: twitter,
        image: jobb,
        badges: ['Internship', 'Freelance'],
    },
    {
        id: 4,
        title: 'Technical Lead',
        company: 'yelp',
        location: 'Kuala, Malaysia',
        date: '10 hours ago',
        price: '$50k',
        icon: yelp,
        image: jobf,
        badges: ['Internship', 'Freelance'],
    },
    {
        id: 5,
        title: 'Technical Lead',
        company: 'paypal',
        location: 'Kuala, Malaysia',
        date: '10 hours ago',
        price: '$50k',
        icon: paypal,
        image: jobh,
        badges: ['Internship', 'Freelance'],
    },
    {
        id: 6,
        title: 'Technical Lead',
        company: 'envato',
        location: 'Kuala, Malaysia',
        date: '10 hours ago',
        price: '$50k',
        icon: envato,
        image: jobi,
        badges: ['Internship', 'Freelance'],
    },
    // Add more job objects as needed
];

const Recent = () => {
    return (
        <section className="job-section recent-jobs-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mb-4">
                        <h2>Recent Jobs</h2>
                        <p>
                            <strong>Over 10k opening jobs</strong> Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                            kohm tokito adipcingi elit eismuod larehai
                        </p>
                    </div>
                    <div className="clearfix"></div>
                    {jobs.map((job) => (
                        <div key={job.id} className="col-lg-4 col-md-6 col-12">
                            <div className="job-thumb job-thumb-box">
                                <div className="job-image-box-wrap">
                                    <a href="job-details.html">
                                        <img src={job.image} className="job-image img-fluid" alt="" />
                                    </a>
                                    <div className="job-image-box-wrap-info d-flex align-items-center">
                                        {job.badges.map((badge, index) => (
                                            <p key={index} className="mb-0">
                                                <a href="job-listings.html" className="badge badge-level">
                                                    {badge}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="job-body">
                                    <h4 className="job-title">
                                        <a href="job-details.html" className="job-title-link">
                                            {job.title}
                                        </a>
                                    </h4>
                                    <div className="d-flex align-items-center">
                                        <div className="job-image-wrap d-flex align-items-center bg-white shadow-lg mt-2 mb-4">
                                            <img src={job.icon} className="job-image me-3 img-fluid" alt="" />
                                            <p className="mb-0">{job.company}</p>
                                        </div>
                                        <a href="#" className="bi-bookmark ms-auto me-2"></a>
                                        <a href="#" className="bi-heart"></a>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="job-location">
                                            <i className="custom-icon bi-geo-alt me-1"></i>
                                            {job.location}
                                        </p>
                                        <p className="job-date">
                                            <i className="custom-icon bi-clock me-1"></i>
                                            {job.date}
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center border-top pt-3">
                                        <p className="job-price mb-0">
                                            <i className="custom-icon bi-cash me-1"></i>
                                            {job.price}
                                        </p>
                                        <a href="job-details.html" className="custom-btn btn ms-auto">
                                            Apply now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-4 col-12 recent-jobs-bottom d-flex ms-auto my-4">
                        <a href="job-listings.html" className="custom-btn btn ms-lg-auto">
                            Browse Job Listings
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recent;