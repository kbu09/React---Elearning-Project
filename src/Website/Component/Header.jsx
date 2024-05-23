import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header() {

    const redirect = useNavigate();

    const userlogout = () => {
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/');
        return false;
    }

    return (
        <>
          

            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-book me-3" />eLEARNING</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/course" className="nav-item nav-link">Courses</NavLink>
                        <div className="nav-item dropdown">
                            <NavLink href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                            <div className="dropdown-menu fade-down m-0">
                                <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                <NavLink to="/pnf" className="dropdown-item">404 Page</NavLink>
                            </div>
                        </div>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink>
                    </div>
                    <div className="user_option">
                        {(() => {
                            if (localStorage.getItem('uid')) {
                                return (
                                    <>
                                        <NavLink to="/profile" className="btn btn-primary py-4">
                                            <i className="fa fa-user" aria-hidden="true" /> &ensp;
                                            <span>
                                                {localStorage.getItem('uname')}
                                            </span>&ensp;
                                        </NavLink>&ensp;
                                        <a className="btn btn-primary py-4" href="javascript:void(0)" onClick={userlogout}>
                                            <span>
                                                &ensp;  Log Out
                                            </span> &ensp;
                                        </a>
                                    </>
                                )
                            }
                            else {
                                return (
                                    <NavLink to="/signup">
                                        <NavLink to="/signup" className="btn btn-primary py-4 mx-1 px-lg-5 d-none d-lg-block">SIGN UP
                                        </NavLink>
                                    </NavLink>
                                )
                            }
                        })()}
                        {/* <a href>
                                    <i className="fa fa-shopping-bag" aria-hidden="true" />
                                </a>
                                <form className="form-inline ">
                                    <button className="btn nav_search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true" />
                                    </button>
                                </form> */}
                    </div>
                    {/* <NavLink to="/signup" className="btn btn-primary py-4 mx-1 px-lg-5 d-none d-lg-block">Join Now
                    <i className="fa fa-arrow-right ms-3" /> 
                    </NavLink>
                    <NavLink to="/login" className="btn btn-primary py-4  px-lg-5 d-none d-lg-block"> Login
                     <i className="fa fa-arrow-right ms-3" /> 
                    </NavLink> */}
                </div>
            </nav>



        </>
    )
}

export default Header