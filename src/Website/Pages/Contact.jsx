import React from 'react'

import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react'


function Contact() {
    const [formvalue, setFormvalue] = useState({
        id: "",
        YourName: "",
        YourEmail: "",
        Subject: "",
        Message: ""

    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function vali() {
        var ans = true;
        if (formvalue.YourName == "") {
            toast.error('Your Name is Required');
            // ans = false;
            return false;
        }

        if (formvalue.YourEmail == "") {
            toast.error('Your Email is Required');
            // ans = false;
            return false;
        }
        if (formvalue.Subject == "") {
            toast.error('Subject is Required');
            // ans = false;
            return false;
        }
        if (formvalue.Message == "") {
            toast.error('Message is Required');
            // ans = false;
            return false;
        }

        return ans;
    }



    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.post(`http://localhost:3000/contact`, formvalue);
            console.log(res);
            if (res.status == 201) {
                // alert('Data Add Successful');
                toast.success("DATA added sucees");
                setFormvalue({
                    ...formvalue,
                    id: "",
                    YourName: "",
                    YourEmail: "",
                    Subject: "",
                    Message: ""

                });
            }
        }
    }
    return (
        <>
      
            <Header />

            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Contact</h1>
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
                        <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h5>Get In Touch</h5>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-map-marker-alt text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Office</h5>
                                    <p className="mb-0">123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-phone-alt text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Mobile</h5>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-envelope-open text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Email</h5>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 300, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={submitHandel} method='post'>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" onChange={onchangehandel} value={formvalue.YourName} name='YourName' className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" onChange={onchangehandel} value={formvalue.YourEmail} name='YourEmail' className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" onChange={onchangehandel} value={formvalue.Subject} name='Subject' className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea onChange={onchangehandel} value={formvalue.Message} name='Message' className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />



        </>
    )
}

export default Contact