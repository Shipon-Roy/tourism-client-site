import React from 'react';
import banner from '../../images/banner.jpg'
import Services from '../Services/Services';
import img1 from '../../images/place-1.png';
import img2 from '../../images/place-2.png';
import img3 from '../../images/place-3.png';
import img4 from '../../images/place-4.png';
import img5 from '../../images/place-5.png';
import chooseimg from '../../images/why-choose.jpg';
import news1 from '../../images/news-1.jpg';
import news2 from '../../images/news-2.jpg';
import news3 from '../../images/news-3.jpg';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div className="card bg-dark text-white">
                <img src={banner} className="img-fluid card-img" alt="" />
                <div className="card-img-overlay text-center my-5">
                    <h1 className="card-title text-info mt-5">Travel & <span className="text-warning">Aduentures</span></h1>
                    <h3 className="card-title text-dark">Where Would You Like To Go</h3>
                    <p className="card-text">Tevily is a World Leading Online Tour Booking Platform</p>
                </div>
            </div>
            {/* services section */}
            <div className="my-5">
                <div className="text-center">
                <h5 className="text-danger">Featured tours</h5>
                <h1>Most Popular Tours</h1>
                </div>
                <Services></Services>
            </div>
            {/* place section  */}
            <div className="container my-5">
                <div className="text-center my-5">
                    <p className="text-danger">Destination lists</p>
                    <h1>Go Exotic Places</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="bg-info rounded">
                        <img className="w-100" src={img1} alt="" />
                        <h3 className="p-3 text-white">Spain</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-info rounded">
                        <img className="w-100" src={img2} alt="" />
                        <h3 className="p-3 text-white"> Thailand</h3>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info rounded">
                        <img className="w-100" src={img3} alt="" />
                        <h3 className="p-3 text-white">Africa</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bg-info rounded">
                        <img className="w-100" src={img4} alt="" />
                        <h3 className="p-3 text-white">Australia</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-info rounded">
                        <img className="w-100" src={img5} alt="" />
                        <h3 className="p-3 text-white">Switzerland</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* choose section  */}
            <div className="c ontainer my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="w-100" src={chooseimg} alt="" />
                    </div>
                    <div className="col-lg-6 p-5 bg-dark">
                        <p className="text-danger">Our benefit lists</p>
                        <h1 className="text-white"> Why Choose Tevily</h1>
                        <p className="text-secondary">There are many variations of passages of  simply free text available in the market for you, but the majority have suffered alteration in some form.</p>
                        <div className="p-5">
                            <div>
                                <h3 className="text-white">Professional and Certified</h3>
                                <p className="text-secondary">Change your Place to get Fresh AirThere are many variations of passages  have suffered alteration in some form, </p>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-white">Get Instant Tour Bookings</h3>
                                <p className="text-secondary">Best Price Guarantee There are many variations of but the majority have simply free text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* News & Articles */}
            <div className="container my-5">
                <div className="text-center">
                    <p className="text-danger">From the blog post</p>
                    <h1>News & Articles</h1>
                </div>
                <div className="row my-5">
                    <div className="col-lg-4">
                        <img src={news1} alt="" />
                        <h4 className="p-3">Things to See and Do When Visiting Japan</h4>
                    </div>
                    <div className="col-lg-4">
                        <img src={news2} alt="" />
                        <h4 className="p-3">Journeys are Best Measured in New Friends</h4>
                    </div>
                    <div className="col-lg-4">
                        <img src={news3} alt="" />
                        <h4 className="p-3">Travel the Most Beautiful Places in the World</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;