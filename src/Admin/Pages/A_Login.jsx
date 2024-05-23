import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react'



function A_Login() {

    const redirect=useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('aid'))
        {
            redirect('/a_dashboard');
        }
    });

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    });

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;

        if (formvalue.email == "") {
            toast.error('email Field is required');
            ans = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error('password Field is required');
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
                if (res_arr.data[0].password == formvalue.password) {
                    if (res_arr.data[0].status == "unblock") {
                        localStorage.setItem('aid', res_arr.data[0].id);
                        localStorage.setItem('aname', res_arr.data[0].name);

                        toast.success('Login Success');
                        return redirect('/a_dashboard');
                    }
                    else {
                        toast.error('Account Blocked Contact SHOP');
                        setFormvalue({ ...formvalue, email: "", password: "" });
                        return false;
                    }
                }
                else {
                    toast.error('Password does not match');
                    setFormvalue({ ...formvalue, email: "", password: "" });
                    return false;
                }
            }
            else {
                toast.error('Email does not Exist');
                setFormvalue({ ...formvalue, email: "", password: "" });
                return false;
            }
        }
    }

    return (
        <>
            <div style={{ backgroundImage: "URL('https://elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }} className='p-5'>
                <div className="container p-5" style={{ backgroundColor: 'rgb(240, 241, 237)', opacity: '0.9', width: 600, marginTop: 250 }}>
                    <h2> Login form</h2>
                    <form action="/action_page.php" method="post" onSubmit={submitHandel}>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" onChange={onChangehandel} value={formvalue.email} className="form-control mt-3" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" onChange={onChangehandel} value={formvalue.password} className="form-control mt-3" id="pwd" placeholder="Enter password" name="password" />
                        </div>
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <p> Create New Account, <NavLink to="/a_signup"> Click Here </NavLink></p>

                        <button type="submit" className="btn btn-secondary">Submit</button>


                    </form>
                </div>

            </div>
        </>
    )
}

export default A_Login