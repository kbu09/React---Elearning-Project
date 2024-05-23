import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react'
import { Link, useNavigate , useParams} from 'react-router-dom';
import Header from '../Component/Header';

function Edit_Profile() {
    const redirect =useNavigate();
    useEffect(() => {
        if (localStorage.getItem('uid')) {
            editdata();
        }
        else {
            redirect('/');
        }
    },[]);
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        mobile: "",
        email: ""
    });
    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }


    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status:"unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required');
            ans = false;
            return false;
        }
        if (formvalue.mobile == "") {
            toast.error('Mobile Field is required');
            ans = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('Email Field is required');
            ans = false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({ ...formvalue, id: "", name: "", mobile: "",email: "" });
                redirect('/profile');
                toast.success('Data Update Success');
            }
        }
    }




  return (
    <>
    <Header/>
    <div style={{ backgroundImage: "URL('https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }} className='p-5'>
                <div className="container p-5" style={{ backgroundColor: 'rgb(240, 241, 237)', opacity: '0.9', width: 600, marginTop: 120 }}>
                    <h2> EDIT PROFILE </h2>
                    <form action="/action_page.php" method="post" onSubmit={submitHandel}>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="name"> Name:</label>
                            <input type="text" onChange={onChangehandel} value={formvalue.name} name='name' class="form-control mt-2" placeholder="Enter Name"></input>
                        </div>
                        <div className="mb-3 mt-3 ">
                            <label htmlFor="mobile "> Mobile Numebr :</label>
                            <input type="text" onChange={onChangehandel} value={formvalue.mobile} name='mobile' class="form-control mt-2" placeholder="Enter Number"></input>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" onChange={onChangehandel} value={formvalue.email} name='email' className="form-control mt-2" id="email" placeholder="Enter email" />
                        </div>
                        <button type="submit" className="btn btn-secondary"> Update </button>
                    </form>
                </div>
            </div>
    </>
  )
}

export default Edit_Profile