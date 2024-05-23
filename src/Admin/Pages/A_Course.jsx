import React from 'react'
import A_Header from '../Component/A_Header'
import { useState ,useEffect} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function A_Course() {
 
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
        CourseName: "",
        CourseDescription: "",
        CoursePrice: ""
    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
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
            const res = await axios.post(`http://localhost:3000/Course_form`, formvalue);
            console.log(res);
            if (res.status == 201) {
                // alert('Data Add Successful');
                toast.success('Data Add Successful');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    CourseName: "",
                    CourseDescription: "",
                    CoursePrice: ""
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
                            <h1 className="display-3 text-white animated slideInDown"> ADD COURSE DATA </h1>
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
                <h2>ADD COURSE </h2>
                <form action="" onSubmit={submitHandel} method='post'>
                    <div className="mb-3 mt-3">
                        <label htmlFor="Coursename"> Course Name:</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.CourseName} name='CourseName' className="form-control mt-2" placeholder="Course Name"  />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="CourseDescription"> Course Description :</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.CourseDescription} name='CourseDescription' className="form-control mt-2" placeholder="Course Description"  />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="CoursePrice"> Course Price :</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.CoursePrice} name='CoursePrice' className="form-control mt-2" placeholder="Course Price"  />
                    </div>
                    <button type="submit" className="btn btn-danger mt-3">Submit</button>
                </form>
            </div>
        </>
    )
}

export default A_Course