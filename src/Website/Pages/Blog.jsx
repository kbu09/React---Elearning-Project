import React from 'react'
import Header from '../Component/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import Footer from '../Component/Footer';

function Blog() {
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Blog`);
        setData(res.data);
    }

    return (
        <>
            <Header />
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> BLOG PAGE</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">BLOG</h6>

                    </div>

                    <div className="row g-4 justify-content-center mt-5">
                        {
                            data && data.map((value, index, arr) => {
                                return (
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="course-item bg-light">
                                            <div className="position-relative overflow-hidden">
                                                <img className="img-fluid" src={value.BlogImg} alt />
                                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                                </div>
                                            </div>
                                            <div className="text-center p-2 pb-0">
                                                <h3 className="mb-0 mt-3">{value.BlogName}</h3>
                                                <h3 className="mb-0 mt-3">{value.BlogOffer}</h3>
                                                <div className="mb-3 mt-3">
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small>(123)</small>
                                                </div>
                                                <h5 className="p-5"> {value.Blogdetails} <br/> <br/>
                                                     Those who are only starting to learn about this modern type of learning will find articles discussing the basics of elearning and ways to design online learning content.
                                                </h5>
                                            </div>
                                            {/* <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        <Footer/> 
        </>
    )
}

export default Blog