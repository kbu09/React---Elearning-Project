import React from 'react'
import A_Header from '../Component/A_Header'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'



function A_Dashboard() {


    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('aid'))) {
            redirect('/a_login');
        }
      
    });


    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>

            <A_Header />
            <div className="container-fluid bg-primary py-5 mb-5 mt-2 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> DASHBOARD  </h1>
                            <nav aria-label="breadcrumb">
                                {/* <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#"> Dashboard</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#"> Student </a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page"> Employee</li>
                                </ol> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <h1 style={{ color: 'red' }}> Admin Dashboard</h1>
                <h5> Welcome, Amit Patel </h5>
            </div>
            <div class="container mt-5" >
                <div class="row" style={{ gap: 20 }}>
                    <div class="col bg-info p-5" >
                        <i className="fas fa-users" style={{ fontSize: 36 }} />
                        <h1 className='mt-3'> 1000</h1>
                        <p className='mt-3' style={{ fontSize: 22 }}>Student Admission</p>
                        <div class="progress" style={{ height: '5px' }}>
                            <div className="progress-bar bg-success" style={{ width: '40%' }} />
                        </div>
                    </div>
                    <div class="col bg-warning p-5">
                        <i className="fa fa-eye" style={{ fontSize: 36 }} />
                        <h1 className='mt-3'> 3000</h1>
                        <p className='mt-3' style={{ fontSize: 22 }}> Page Views </p>
                        <div class="progress" style={{ height: '5px' }}>
                            <div className="progress-bar bg-secondary" style={{ width: '50%' }} />
                        </div>
                    </div>
                    <div class="col bg-secondary p-5">
                        <i className="fa fa-envelope" style={{ fontSize: 36 }} />
                        <h1 className='mt-3'> 50</h1>
                        <p className='mt-3' style={{ fontSize: 22 }}> Pending Mails </p>
                        <div class="progress" style={{ height: '5px' }}>
                            <div className="progress-bar bg-danger" style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5" >
                <div class="row" style={{ gap: 20 }}>
                    <div class="col bg-info p-5" >
                        <i className="fa fa-rupee" style={{ fontSize: 36 }} />

                        <h1 className='mt-3'> 30</h1>
                        <p className='mt-3' style={{ fontSize: 22 }}> Pending Fees </p>
                        <div class="progress" style={{ height: '5px' }}>
                            <div className="progress-bar bg-success" style={{ width: '50%' }} />
                        </div>
                    </div>
                    <div class="col bg-warning p-5">
                        <i className="fa fa-globe" style={{ fontSize: 36 }} />

                        <h1 className='mt-3'> 20 </h1>
                        <p className='mt-3' style={{ fontSize: 22 }}> Online Courses </p>
                        <div class="progress" style={{ height: '5px' }}>
                            <div className="progress-bar bg-secondary" style={{ width: '50%' }} />
                        </div>

                    </div>
                    <div class="col bg-secondary p-5">
                        <i className="fa fa-book" style={{ fontSize: 36 }} />
                        <h1 className='mt-3'> 50 </h1>
                        <p className='mt-3' style={{ fontSize: 22 }}> Offline Courses </p>
                        <div class="progress" style={{ height: '5px' }}>
                            <div className="progress-bar bg-danger" style={{ width: '50%' }} />
                        </div>

                    </div>
                </div>
            </div>
            <div class="container mt-3">
                <h2>Alerts</h2>
                <p>Alerts are created with the .alert class, followed by a contextual color classes:</p>
                <div class="alert alert-success">
                    <strong>Success!</strong> This alert box could indicate a successful or positive action.
                </div>
                <div class="alert alert-info">
                    <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                </div>
                <div class="alert alert-warning">
                    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                </div>
                <div class="alert alert-danger">
                    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                </div>
                <div class="alert alert-primary">
                    <strong>Primary!</strong> Indicates an important action.
                </div>
                <div class="alert alert-secondary">
                    <strong>Secondary!</strong> Indicates a slightly less important action.
                </div>
                <div class="alert alert-dark">
                    <strong>Dark!</strong> Dark grey alert.
                </div>
                <div class="alert alert-light">
                    <strong>Light!</strong> Light grey alert.
                </div>
            </div>





        </>
    )
}

export default A_Dashboard