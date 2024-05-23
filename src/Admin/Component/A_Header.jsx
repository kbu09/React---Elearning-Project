import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function A_Header() {

    const redirect = useNavigate();

    useEffect(() => {
      if (!(localStorage.getItem('aid'))) {
        redirect('/a_login');
      }
      // else 
      // {
      //   fetch();
      // }
    },[]);

    const userlogout = () => {
        localStorage.removeItem('aid');
        localStorage.removeItem('aname');
        toast.success('Logout Success');
        redirect('/a_login');
        return false;
    }


     
    return (
        <>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </Helmet>

            <nav className="navbar navbar-expand-sm bg-info navbar-dark p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i className="fa fa-book" style={{ fontSize: 26 }} /><b style={{ fontSize: 28 }}> e<span style={{ fontSize: 28, letterSpacing: 2, fontFamily: 'sans-serif' }}>Learning</span></b> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse mt-2" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" to="/a_dashboard"> <b> DASHBOARD</b></NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"><b> STUDENT</b></a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-dark" to="/a_student">ADD STUDENT</NavLink></li>
                                    <li><NavLink className="dropdown-item text-dark" to="/m_student"> MANAGE STUDENT </NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"><b>EMPLOYEE</b></a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-dark" to="/a_employee"> ADD EMPLOYEE</NavLink></li>
                                    <li><NavLink className="dropdown-item text-dark" to="/m_employee"> MANAGE EMPLOYEE </NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"><b>COURSE</b></a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-dark" to="/a_course">ADD COURSE</NavLink></li>
                                    <li><NavLink className="dropdown-item text-dark" to="/m_course"> MANAGE COURSE </NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"><b>BLOG</b></a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-dark" to="/a_blog">ADD BLOG</NavLink></li>
                                    <li><NavLink className="dropdown-item text-dark" to="/m_blog"> MANAGE BLOG  </NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"><b>MANAGE</b></a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-dark" to="/manage_user"> MANAGE USER  </NavLink></li>
                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" to="/a_contact" > <b> CONTACT</b> </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link text-dark" to="/manage_user" > <b> USER </b> </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark " to="/admin_f"> <b> FEED_BACK </b></NavLink>
                            </li>
                            &ensp;
                            <div className="user_option">
                                {(() => {
                                    if (localStorage.getItem('aid')) {
                                        return (
                                            <>
                                                <NavLink to="/a_profile" className="btn btn-dark mx-5">
                                                    <i className="fa fa-user" aria-hidden="true" />  &ensp;
                                                    <span >
                                                        {localStorage.getItem('aname')}
                                                    </span>
                                                </NavLink>

                                                <a className="btn btn-dark" href="javascript:void(0)" onClick={userlogout}>
                                                    LOG OUT
                                                </a>
                                            </>
                                        )
                                    }
                                    else {
                                        return (

                                            <NavLink to='/a_signup'> <button type="button" class="btn btn-dark mx-5"> <b> SIGN UP </b> </button>
                                            </NavLink>


                                        )
                                    }
                                })()}

                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default A_Header