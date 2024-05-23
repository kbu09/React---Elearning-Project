import React from 'react'
import A_Header from '../Component/A_Header'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Manage_Employee() {

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
    const StatusHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/Employee_form/${id}`);
        if (res.data.status == "Block") {
            const res1 = await axios.patch(`http://localhost:3000/Employee_form/${id}`, { status: "unblock" });
            if (res1.status == 200) {
                console.log(res.data);
                toast.success('User Unblock ');
                fetch();
            }
        }
        else {
            const res1 = await axios.patch(`http://localhost:3000/Employee_form/${id}`, { status: "Block" });
            if (res1.status == 200) {
                localStorage.removeItem('eid');
                localStorage.removeItem('ename');
                console.log(res.data);
                toast.success('User block');
                fetch();
            }
        }
    }

  return (
    <>
      <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>

    <A_Header/> 
    <div className="container-fluid bg-primary py-5 mb-5 mt-2 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> MANAGE EMPLOYEE  </h1>
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
                <h2> EMPLOYEE DATA </h2>
                <input type='text' className='btn btn-light btn-outline-secondary mt-3 mx-2 float-sm-end mb-5' />
                <button type="button" className="btn btn-light btn-outline-secondary mt-3 float-sm-end">
                    <span className="glyphicon glyphicon-search " />
                    Search
                </button>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th> ID</th>
                            <th> FIRST NAME</th>
                            <th> LAST NAME</th>
                            <th>EMAIL </th>
                            <th>MOBILE NUMBER </th>
                            <th> EMPLOYEE EDUCATION</th>
                            <th> EMPLOYEE WORK EXPERIENCE</th>
                            <th> LAST JOB ROLE</th>
                            <th> ACTION </th>

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
                                            <button type="button" class="btn btn-danger" onClick={() => deleteHandel(value.id)}>
                                                DELETE
                                            </button>
                                        </td>
                                        {/* <td>
                                            <button type="button" class="btn btn-danger" onClick={() => StatusHandel(value.id)}>
                                                {value.status} UNBOLCK
                                            </button>

                                        </td> */}

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
    </>
  )
}

export default Manage_Employee