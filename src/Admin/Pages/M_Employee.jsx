import React from 'react'
import A_Header from '../Component/A_Header'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function M_Employee() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('aid'))) {
            redirect('/a_login');
        }
        // else 
        // {
        //   fetch();
        // }
    });

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Employee_form`);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Employee_form/${id}`);
        toast.success('Data Delete Successful');
        fetch();
    }
    const [formvalue, setFormvalue] = useState({
        id: "",
        FirstName: "",
        LastName: "",
        email: "",
        mobile: "",
        EmployeeEducation: "",
        EmployeeWorkExperience: "",
        LastJobRole: ""
    });
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/Employee_form/${id}`);
        console.log(res.data);
        setFormvalue(res.data);

    }
    const Viewdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/Employee_form/${id}`);
        console.log(res.data);
        setFormvalue(res.data);

    }
    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    function vali() {
        var ans = true;
        if (formvalue.FirstName == "") {
            toast.error('First Name is Required');
            ans = false;
            return false;
        }

        if (formvalue.LastName == "") {
            toast.error('Last Name is Required');
            ans = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('email is Required');
            ans = false;
            return false;
        }
        if (formvalue.mobile == "") {
            toast.error('mobile is Required');
            ans = false;
            return false;
        }
        if (formvalue.EmployeeEducation == "") {
            toast.error('Employee Education is Required');
            ans = false;
            return false;
        }
        if (formvalue.EmployeeWorkExperience == "") {
            toast.error('Employee Work Experience is Required');
            ans = false;
            return false;
        }
        if (formvalue.LastJobRole == "") {
            toast.error('Last Job Role is Required');
            ans = false;
            return false;
        }

        return ans;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.patch(`http://localhost:3000/Employee_form/${formvalue.id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                // alert('Data Add Successful');
                toast.success('Data Updated Successful');

                setFormvalue({
                    ...formvalue,
                    id: "",
                    FirstName: "",
                    LastName: "",
                    email: "",
                    mobile: "",
                    EmployeeEducation: "",
                    EmployeeWorkExperience: "",
                    LastJobRole: ""
                });
                fetch();
            }
        }
    }

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
                            <h1 className="display-3 text-white animated slideInDown"> MANAGE EMPLOYEE DATA </h1>
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
            <div className="container mt-5 bg-info p-5">
                <h2> MANAGE EMPLOYEE DATA </h2>
                <input type='text' className='btn btn-light btn-outline-secondary mt-3 mx-2 float-sm-end mb-5' />
                <button type="button" className="btn btn-light btn-outline-secondary mt-3 float-sm-end">
                    <span className="glyphicon glyphicon-search " />
                    Search
                </button>

                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th> N0.</th>
                            <th> FIRST NAME </th>
                            <th> LAST NAME </th>
                            <th> EMAIL </th>
                            <th> MOBILE NUMBER  </th>
                            <th> EMPLOYEE EDUCATION</th>
                            <th> EMPLOYEE WORK EXPERIENCE </th>
                            <th> LAST JOB ROLE</th>
                            <th> EDIT </th>
                            <th> VIEW</th>
                            <th> DELETE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((value, index, arr) => {
                                return (
                                    <tr key={index}>
                                        <td> {value.id} </td>
                                        <td>{value.FirstName} </td>
                                        <td>{value.LastName}</td>
                                        <td>{value.email}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.EmployeeEducation}</td>
                                        <td>{value.EmployeeWorkExperience}</td>
                                        <td> {value.LastJobRole}</td>
                                        <td>
                                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editdata(value.id)}>
                                                <i className="fa fa-edit" style={{ fontSize: 18 }} />
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#demo" onClick={() => Viewdata(value.id)}>
                                                <i className="fa fa-eye" style={{ fontSize: 18 }} />
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-success" onClick={() => deleteHandel(value.id)}>
                                                <i className="fa fa-trash-o" style={{ fontSize: 18 }} />
                                            </button>
                                        </td>

                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title"> MANAGE EMPLOYEE DATA</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">

                            <form action="" method='post'>
                                <div className="mb-3 mt-3 ">
                                    <label htmlFor="Fname"> First Name:</label>
                                    <input type="text" onChange={onchangehandel} value={formvalue.FirstName} name='FirstName' class="form-control" placeholder="Enter Employee Name"></input>
                                </div>
                                <div className="mb-3 mt-3 ">
                                    <label htmlFor="Lname">Last Name:</label>
                                    <input type="text" onChange={onchangehandel} value={formvalue.LastName} name='LastName' class="form-control" placeholder="Enter Employee Surname"></input>
                                </div>
                                <div className="mb-3 mt-3 ">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={onchangehandel} value={formvalue.email} name='email' className="form-control" id="email" placeholder="Enter Employee email" />
                                </div>
                                <div className="mb-3 mt-3 ">
                                    <label htmlFor="mobile "> Mobile Numebr :</label>
                                    <input type="text" onChange={onchangehandel} value={formvalue.mobile} name='mobile' class="form-control" placeholder="Enter Employee Number"></input>
                                </div>
                                <div className="mb-3 mt-3 ">
                                    <label for="sel1" class="form-label">Select Employee Education:</label>
                                    <select onChange={onchangehandel} value={formvalue.EmployeeEducation} name='EmployeeEducation' class="form-select" id="sel1" >
                                        <option> Select Employee Education </option>
                                        <option> B.C.A </option>
                                        <option> COMPUTER ENGINEERING  </option>
                                        <option> DIPLOMA IN COMPUTER ENGINEERING  </option>
                                        <option> MASTERS IN COMPUTER ENGENEERING  </option>
                                        <option> B.E  </option>
                                    </select>
                                </div>
                                <div className="mb-3 mt-3 ">
                                    <label for="sel1" class="form-label">Select Experience :</label>
                                    <select onChange={onchangehandel} value={formvalue.EmployeeWorkExperience} name='EmployeeWorkExperience' class="form-select" id="sel1">
                                        <option> Select Employee Work Experience  </option>
                                        <option> 2 years & More  </option>
                                        <option> 5 years & More  </option>
                                        <option> 10 years & More  </option>
                                        <option> 15 years & More </option>
                                        <option> 25 years & More </option>
                                    </select>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="Last Job role"> Last Job role:</label>
                                    <input type="text" onChange={onchangehandel} value={formvalue.LastJobRole} name='LastJobRole' className="form-control" id="pwd" placeholder="Enter Last job role" />
                                </div>

                                {/* <button type="submit" className="btn btn-secondary mt-5">Submit</button> */}
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={submitHandel}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-top" id="demo" style={{height:750}}>
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">MANAGE EMPLOYEE DATA</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                </div>
                <div className="offcanvas-body">
                    <form action="" onSubmit={submitHandel} method='post'>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="Fname"> First Name:</label>
                            <input type="text" onChange={onchangehandel} value={formvalue.FirstName} name='FirstName' class="form-control" placeholder="Enter Employee Name"></input>
                        </div>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="Lname">Last Name:</label>
                            <input type="text" onChange={onchangehandel} value={formvalue.LastName} name='LastName' class="form-control" placeholder="Enter Employee Surname"></input>
                        </div>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="email">Email:</label>
                            <input type="email" onChange={onchangehandel} value={formvalue.email} name='email' className="form-control" id="email" placeholder="Enter Employee email" />
                        </div>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="mobile "> Mobile Numebr :</label>
                            <input type="text" onChange={onchangehandel} value={formvalue.mobile} name='mobile' class="form-control" placeholder="Enter Employee Number"></input>
                        </div>
                        <div className="mb-3 mt-3 ">
                            <label for="sel1" class="form-label">Select Employee Education:</label>
                            <select onChange={onchangehandel} value={formvalue.EmployeeEducation} name='EmployeeEducation' class="form-select" id="sel1" >
                                <option> Select Employee Education </option>
                                <option> B.C.A </option>
                                <option> COMPUTER ENGINEERING  </option>
                                <option> DIPLOMA IN COMPUTER ENGINEERING  </option>
                                <option> MASTERS IN COMPUTER ENGENEERING  </option>
                                <option> B.E  </option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3 ">
                            <label for="sel1" class="form-label">Select Experience :</label>
                            <select onChange={onchangehandel} value={formvalue.EmployeeWorkExperience} name='EmployeeWorkExperience' class="form-select" id="sel1">
                                <option> Select Employee Work Experience  </option>
                                <option> 2 years & More  </option>
                                <option> 5 years & More  </option>
                                <option> 10 years & More  </option>
                                <option> 15 years & More </option>
                                <option> 25 years & More </option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="Last Job role"> Last Job role:</label>
                            <input type="text" onChange={onchangehandel} value={formvalue.LastJobRole} name='LastJobRole' className="form-control" id="pwd" placeholder="Enter Last job role" />
                        </div>
                    </form>
                </div>
            </div>



        </>
    )
}

export default M_Employee