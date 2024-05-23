import React from 'react'
import A_Header from '../Component/A_Header'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function M_Student() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('aid'))) {
            redirect('/a_login');
        }
    }, []);

    useEffect(() => {
        fetch();
        cfetch();
   
    }, []);

 

    const [cdata, setcData] = useState([]);
    const cfetch = async () => {
        const res = await axios.get(`http://localhost:3000/Course_form`);
        setcData(res.data);
    }
 
    const [cformvalue, setcFormvalue] = useState({
        id: "",
        CourseName: "",
        CourseDescription: "",
        CoursePrice: ""
    });
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/student_form`);
        setData(res.data);

    }


    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/student_form/${id}`);
        toast.success('Data Delete Successful');
        fetch();
    }
    const [formvalue, setFormvalue] = useState({
        id: "",
        FirstName: "",
        LastName: "",
        email: "",
        mobile: "",
        StudentImage: "",
        StudentEducation: "",
        StudentCourse: " "

    });
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/student_form/${id}`);
        console.log(res.data);
        setFormvalue(res.data);

    }
    const Viewdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/student_form/${id}`);
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
        if (formvalue.StudentCourse == "") {
            toast.error('Student Education is Required');
            ans = false;
            return false;
        }
        // if (formvalue.Course_id == "") {
        //     toast.error('Courseis Required');
        //     ans = false;
        //     return false;
        // }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.patch(`http://localhost:3000/student_form/${formvalue.id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                toast.success('Data Update Successful');
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
                            <h1 className="display-3 text-white animated slideInDown"> MANAGE STUDENT DATA </h1>
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
                <h2> STUDENT DATA </h2>
                <input type='text' className='btn btn-light btn-outline-secondary mt-3 mx-2 float-sm-end mb-5' />
                <button type="button" className="btn btn-light btn-outline-secondary mt-3 float-sm-end">
                    <span className="glyphicon glyphicon-search " />
                    Search
                </button>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th> ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME </th>
                            <th>EMAIL </th>
                            <th>MOBILE NUMBER </th>
                            <th>STUDENT IMAGE </th>
                            <th> STUDENT EDUCATION</th>
                            <th>COURSE</th>
                            <th>  EDIT </th>
                            <th> VIEW </th>
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
                                        <td><img src={value.StudentImage} alt="" width={50} /></td>
                                        <td>{value.StudentEducation}</td>
                                        <td> {value.StudentCourse}</td>
                                        <td>
                                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editdata(value.id)}>
                                                <i className="fa fa-edit" style={{ fontSize: 18 }} />
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-success " data-bs-toggle="offcanvas" data-bs-target="#demo" onClick={() => Viewdata(value.id)}>
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
                            <h4 className="modal-title"> MANAGE STUDENT DATA</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        {/* Edit */}
                        <div className="modal-body">
                            <form action="" method='post'>
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
                                {/* <div className="mb-3 mt-3 ">
                                    <label for="sel1" class="form-label">Select Student Education:</label>
                                    <select onChange={onchangehandel} value={formvalue.StudentEducation} name='StudentEducation' class="form-select mt-2" id="sel1">
                                        <option value=""> Select Student Education </option>
                                        <option>10th PASS </option>
                                        <option>12th PASS </option>
                                    </select>
                                </div> */}
                                <div className="mb-3 mt-3 ">
                                    <label for="sel1" class="form-label">Select Course:</label>
                                    <select onChange={onchangehandel} value={formvalue.Course_id} name="Course_id" className="form-control"  >

                                        <option value="">Select Course TYPE</option>
                                        {

                                            cdata && cdata.map((value) => {
                                                return (
                                                    // <option value={value.id}>{value.CourseName}</option>
                                                    <option key={value.id} value={value.CourseName}>{value.CourseName} </option>
                                                )
                                            }
                                            )

                                        }

                                    </select>
                                </div>


                                <div className="mb-3 mt-3 ">
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
                                </div>
                                {/* <button type="submit" className="btn btn-secondary mt-5" >Submit</button> */}
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={submitHandel}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* View  */}
            <div className="offcanvas offcanvas-top" id="demo" style={{ height: 700 }}>
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">STUDENT DATA </h1>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" />
                </div>
                <div className="offcanvas-body">

                    <form action="" onSubmit={submitHandel} method='post'>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="Fname"> First Name:  <span> {formvalue.FirstName} </span> </label>

                            {/* <input type="text" onChange={onchangehandel} value={formvalue.FirstName} name='FirstName' class="form-control mt-2" placeholder="Enter Student Name"></input> */}
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
                            <label for="sel1" class="form-label">Select Course:</label>
                            <select onChange={onchangehandel} value={formvalue.Course_id} name="Course_id" className="form-control"  >

                                <option value="">Select Course TYPE</option>
                                {
                                    data && data.map((value) => {
                                        return (
                                            // <option value= {value.id}> {value.CourseName}</option>
                                            <option>{value.CourseName}</option>
                                        )
                                    })
                                }

                            </select>
                        </div> */}
                        <div className="mb-3 mt-3 ">
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
                        </div>
                        {/* <button type="submit" className="btn btn-secondary mt-5">Submit</button> */}
                    </form>


                </div>
            </div>


        </>
    )
}

export default M_Student