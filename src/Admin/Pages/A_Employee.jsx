import React from 'react'
import A_Header from '../Component/A_Header'
import { useState ,useEffect} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function A_Employee() {

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
            const res = await axios.post(`http://localhost:3000/Employee_form`, formvalue);
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
                    EmployeeEducation: "",
                    EmployeeWorkExperience: "",
                    LastJobRole: ""
                });
            }
        }
    }
    return (
        <>
            <A_Header />
            <div className="container-fluid bg-primary py-5 mb-5 mt-2 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> ADD EMPLOYEE DATA </h1>
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
                <h2 className=''> EMPLOYEE ENTRY FORM </h2>
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

                    <button type="submit" className="btn btn-secondary mt-5">Submit</button>
                </form>
            </div>


        </>
    )
}

export default A_Employee