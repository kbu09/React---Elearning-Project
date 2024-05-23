import React, { useState, useEffect } from 'react'
import A_Header from '../Component/A_Header';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function A_Profile() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('aid'))) {
            redirect('/');
        }
        else {
            fetch();
        }
    }, []);

    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/admin/${localStorage.getItem('aid')}`);
        console.log(res.data);
        setData(res.data);
    }
    const [sdata, setsData] = useState({});
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/admin/${id}`);
        console.log(res.data);
        setsData(res.data);
    }


    return (
        <>
            <A_Header />
            <div className="container-fluid bg-primary py-5 mb-5 mt-2 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> MY PROFILE </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#"> Dashboard</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#"> Student </a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page"> Employee</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center p-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                           <p className="mb-4"> <img src={data.ProfileImage} alt="" width={500}/></p>
                            <h1 className="display-3 mt-5"> Name : {data.name}</h1>
                            <h1 className="mb-4">ID : {data.id} </h1>
                            <p className="mb-4"> Contact : {data.mobile}</p>
                            <button className='btn btn-primary' onClick={() => redirect('/aedit_profile/' + data.id)}> Edit Profile </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default A_Profile