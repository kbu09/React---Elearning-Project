import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function A_Signup() {

    const redirect=useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('aid'))
        {
            redirect('/a_dashboard');
        }
    });

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        mobile: "",
        email: "",
        password: "",
        status: ""
    });

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
        if (formvalue.password == "") {
            toast.error('Password Field is required');
            ans = false;
            return false;
        }

        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res_arr = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
            console.log(res_arr);
            if (res_arr.data.length > 0) {
                toast.error('Email id already Exist !');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    name: "",
                    mobile: "",
                    email: "",
                    password: "",
                    status: ""
                });
            }

            else {
                const res = await axios.post(`http://localhost:3000/admin`, formvalue);
                console.log(res);
                if (res.status == 201) {
                    toast.success('Data Add Success');
                    setFormvalue({
                        ...formvalue,
                        id: "",
                        name: "",
                        mobile: "",
                        email: "",
                        password: "",
                        status: ""
                    });
                }
            }
        }
    }

    return (
        <>
            <div style={{ backgroundImage: "URL('https://elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }} className='p-5'>
                <div className="container p-5" style={{ backgroundColor: 'rgb(240, 241, 237)', opacity: '0.9', width: 600, marginTop: 120 }}>
                    <h2> Signup form</h2>
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
                        <div className="mb-3">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" onChange={onChangehandel} value={formvalue.password} name='password' className="form-control mt-2" id="pwd" placeholder="Enter password" />
                        </div>
                        {/* <div className="mb-3">
                            <label htmlFor="cpwd">Confrim Password:</label>
                            <input type="password" className="form-control mt-2" id="pwd" placeholder="Enter confirm password" name="pswd" />
                        </div> */}
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <p> Already Registered? <NavLink to="/a_login"> Click Here </NavLink></p>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                </div>

            </div>



        </>
    )
}

export default A_Signup