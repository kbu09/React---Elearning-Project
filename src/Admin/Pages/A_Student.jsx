import React from 'react'
import A_Header from '../Component/A_Header'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function A_Student() {

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

    const [formvalue, setFormvalue] = useState({
        id: "",
        FirstName: "",
        LastName: "",
        email: "",
        mobile: "",   
        StudentImage: "",
        StudentEducation: "",
        Course_id: ""


    });


    // const [formvalue, setFormvalue] = useState({
    //     id: "",
    //     FirstName: "",
    //     LastName: "",
    //     email: "",
    //     mobile: "",
    //     StudentImage: "",
    //     StudentEducation: "",
    //     StudentCourse: " "
    // });
    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
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
            toast.error('Email is Required');
            ans = false;
            return false;
        }
        if (formvalue.mobile == "") {
            toast.error('Mobile Number is Required');
            ans = false;
            return false;
        }
        if (formvalue.StudentImage == "") {
            toast.error('Student Image is Required');
            ans = false;
            return false;
        }
        if (formvalue.StudentEducation == "") {
            toast.error('Student Education is Required');
            ans = false;
            return false;
        }
        // if (formvalue.Course_id == "") {
        //     toast.error('Courseis Required');
        //     ans = false;
        //     return false;
        // }
        if (formvalue.StudentCourse == "") {
            toast.error('Student Education is Required');
            ans = false;
            return false;
        }

        return ans;
    }



    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.post(`http://localhost:3000/student_form`, formvalue);
            console.log(res);
            if (res.status == 201) {
                // alert('Data Add Successful');
                toast.success('Data Add Successful');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    FirstName: "",
                    LastName: "",
                    email: "",
                    mobile: "",
                    StudentImage: "",
                    StudentEducation: "",
                    StudentCourse: ""
                });
            }
        }
    }
    return (
        <>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </Helmet>
            <A_Header />
            <div className="container-fluid bg-primary py-5 mb-5 mt-2 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> ADD STUDENT DATA  </h1>
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
            <div className="container mt-5 bg-info text-dark p-5">
                <h2 className=''>STUDENT ENTRY FORM </h2>
                <form action="" onSubmit={submitHandel} method='post'>
                    <div className="mb-3 mt-3 ">
                        <label htmlFor="Fname"> First Name:</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.FirstName} name='FirstName' class="form-control mt-2" placeholder="Enter Student Name"></input>
                    </div>
                    <div className="mb-3 mt-3 ">
                        <label htmlFor="Lname">Last Name:</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.LastName} name='LastName' class="form-control mt-2" placeholder="Enter Student Surname"></input>
                    </div>
                    <div className="mb-3 mt-3 ">
                        <label htmlFor="email">Email:</label>
                        <input type="email" onChange={onchangehandel} value={formvalue.email} name='email' className="form-control" id="email" placeholder="Enter Student email" />
                    </div>
                    <div className="mb-3 mt-3 ">
                        <label htmlFor="mobile "> Mobile Numebr :</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.mobile} name='mobile' class="form-control mt-2" placeholder="Enter Student Contact" ></input>
                    </div>
                    <div className="mb-3 mt-3 ">
                        <label htmlFor="Student Image "> Student Image :</label>
                        <input type="url" onChange={onchangehandel} value={formvalue.StudentImage} name='StudentImage' class="form-control mt-2" placeholder="Upload Student Image " ></input>
                    </div>
                    <div className="mb-3 mt-3 ">
                        <label for="sel1" class="form-label">Select Student Education:</label>
                        <select onChange={onchangehandel} value={formvalue.StudentEducation} name='StudentEducation' class="form-select mt-2" id="sel1">
                            <option value=""> Select Student Education </option>
                            <option>10th PASS </option>
                            <option>12th PASS </option>
                            <option> B.A </option>
                            <option>B.COM </option>
                            <option>B.C.A </option>
                            <option>DIPLOMA IN ANY FIELD </option>
                            <option>DEGREE IN ANY FIELD</option>
                        </select>
                    </div>
                    {/* <div className="mb-3 mt-3 ">
                        <label for="sel1" class="form-label">Select Student Course:</label>
                        <select onChange={onchangehandel} value={formvalue.StudentCourse} name='StudentCourse' class="form-select mt-2" id="sel1">
                            <option value=""> Select Student Course </option>
                            <option>GRAPHIC DESIGNING </option>
                            <option>FROND-END DEVELOPER </option>
                            <option> BACK-END DEVELOPER </option>
                            <option>MULTIMEDIA  </option>
                            <option>VIDEO EDITING  </option>
                            <option>FIGMA </option>
                            <option>SOFTWARE TESTING</option>
                        </select>
                    </div> */}
                    <div className="mb-3 mt-3 ">
                        <label for="sel1" class="form-label">Select Course:</label>
                        <select onChange={onchangehandel} value={formvalue.Course_id} name="Course_id" className="form-control"  >

                            <option value="">Select Course TYPE</option>
                            {
                                data && data.map((value) => {
                                    return (
                                       
                                        <option key={value.id} value={value.CourseName}>{value.CourseName}</option>
                                    )
                                })
                            }

                        </select>
                    </div>
                    <button type="submit" className="btn btn-secondary mt-5">Submit</button>
                </form>
            </div>


        </>
    )
}

export default A_Student