import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Header from '../Component/Header';
import Footer from '../Component/Footer';

function Profile() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/');
        }
        else {
            fetch();
        }
    }, []);
    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
        console.log(res.data);
        setData(res.data);
    }

    const [sdata, setsData] = useState({});
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        setsData(res.data);
    }
    return (
        <>
            <Header />
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> MY PROFILE </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5 wow fadeInUp bg-info" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                          
                            <h1 className="display-1"> Name : {data.name}</h1>
                            <h1 className="mb-4">ID : {data.id} </h1>
                            <p className="mb-4"> Contact : {data.mobile}</p>
                            {/* <NavLink className="btn btn-primary rounded-pill py-3 px-5" onClick={() => redirect('/edit_profile/'+ data.id)}>Edit Profile</NavLink> */}
                            <button className='btn btn-dark' onClick={() => redirect('/edit_profile/' + data.id)}> Edit Profile </button>
                        </div>
                    </div>
                </div>
            </div>

          <Footer/>
        </>
    )
}

export default Profile