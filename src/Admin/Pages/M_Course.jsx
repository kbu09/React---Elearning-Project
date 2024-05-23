import React from 'react'
import A_Header from '../Component/A_Header'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function M_Course() {

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
        const res = await axios.get(`http://localhost:3000/Course_form`);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        toast.success('Data Delete Successful');
        const res = await axios.delete(`http://localhost:3000/Course_form/${id}`);
        fetch();
    }
    const [formvalue, setFormvalue] = useState({
        id: "",
        CourseName: "",
        CourseDescription: "",
        CoursePrice: ""
    });

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/Course_form/${id}`);
        console.log(res.data);
        setFormvalue(res.data);

    }
    const Viewdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/Course_form/${id}`);
        console.log(res.data);
        setFormvalue(res.data);

    }
    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function vali() {
        var ans = true;
        if (formvalue.CourseName == "") {
            toast.error('Course Name is Required');
            ans = false;
            return false;
        }

        if (formvalue.CourseDescription == "") {
            toast.error('Course Description is Required');
            ans = false;
            return false;
        }
        if (formvalue.CoursePrice == "") {
            toast.error('Course Price is Required');
            ans = false;
            return false;
        }
        return ans;
    }


    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.patch(`http://localhost:3000/Course_form/${formvalue.id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                // alert('Data Add Successful');
                toast.success('Data Updated Success');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    CourseName: "",
                    CourseDescription: "",
                    CoursePrice: ""
                });
                fetch();
            }
        }
    }

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </Helmet>
            <A_Header />
            <div className="container-fluid bg-primary py-5 mb-5 mt-2 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> MANAGE COURSE DATA </h1>
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
            <div class="container mt-5">
                <h2> List Of Courses </h2>
                <table class="table table-dark table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Course ID </th>
                            <th>Course Name </th>
                            <th> Course Description</th>
                            <th> Cours Price</th>
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
                                        <td>{value.id} </td>
                                        <td>{value.CourseName} </td>
                                        <td>{value.CourseDescription}</td>
                                        <td>{value.CoursePrice}</td>
                                        <td>
                                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editdata(value.id)}>
                                                <i className="fa fa-edit" style={{ fontSize: 18 }} />
                                            </button>

                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-info" data-bs-toggle="offcanvas" data-bs-target="#demo" onClick={() => Viewdata(value.id)}>
                                                <i className="fa fa-eye" style={{ fontSize: 18 }} />
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-info" onClick={() => deleteHandel(value.id)}>
                                                <i className="fa fa-trash-o" style={{ fontSize: 18 }} />
                                            </button>
                                        </td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>
            </div >
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title"> EDIT COURSE DATA </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <form action="" method='post'>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="Coursename"> Course Name:</label>
                                    <input type="text" onChange={onchangehandel} value={formvalue.CourseName} name='CourseName' className="form-control mt-2" placeholder="Course Name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="CourseDescription"> Course Description :</label>
                                    <input type="text" onChange={onchangehandel} value={formvalue.CourseDescription} name='CourseDescription' className="form-control mt-2" placeholder="Course Description" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="CoursePrice"> Course Price :</label>
                                    <input type="text" onChange={onchangehandel} value={formvalue.CoursePrice} name='CoursePrice' className="form-control mt-2" placeholder="Course Price" />
                                </div>
                                {/* <button type="submit" className="btn btn-danger mt-3">Submit</button> */}
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" onClick={submitHandel}>Submit </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-top" id="demo" style={{height:500}}>
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">COURSE DATA </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                </div>
                <div className="offcanvas-body">
                    <form action="" onSubmit={submitHandel} method='post'>
                        <div className="mb-3 mt-3">
                            <label htmlFor="Coursename"> Course Name:</label>
                            <input type="text" onChange={onchangehandel} value={formvalue.CourseName} name='CourseName' className="form-control mt-2" placeholder="Course Name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="CourseDescription"> Course Description :</label>
                            <input type="text" onChange={onchangehandel} value={formvalue.CourseDescription} name='CourseDescription' className="form-control mt-2" placeholder="Course Description" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="CoursePrice"> Course Price :</label>
                            <input type="text" onChange={onchangehandel} value={formvalue.CoursePrice} name='CoursePrice' className="form-control mt-2" placeholder="Course Price" />
                        </div>
                        {/* <button type="submit" className="btn btn-danger mt-3">Submit</button> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default M_Course