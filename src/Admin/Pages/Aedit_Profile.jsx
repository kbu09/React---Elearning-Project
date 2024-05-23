import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react'
import { useNavigate , useParams} from 'react-router-dom';
import A_Header from '../Component/A_Header';
import { Helmet } from 'react-helmet';

function Aedit_Profile() {
    
    const redirect =useNavigate();
    useEffect(() => {
        if (localStorage.getItem('aid')) {
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
        email: "",
        ProfileImage: " "
    });
    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/admin/${id}`);
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
        if (formvalue.ProfileImage == "") {
            toast.error('Email Field is required');
            ans = false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/admin/${id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({ ...formvalue, id: "", name: "", mobile: "",email: "", ProfileImage:""});
                redirect('/a_profile');
                toast.success('Data Update Success');
            }
        }
    }

  return (
    <>
    <Helmet>
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"/> */}
    </Helmet>
    <A_Header/> 
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
                        <div className="mb-3 mt-3">
                            <label htmlFor="email">Profile Image:</label>
                            <input type="url" onChange={onChangehandel} value={formvalue.ProfileImage} name='ProfileImage' className="form-control mt-2" id="email" placeholder="Upload Profile" />
                        </div>
                        <button type="submit" className="btn btn-secondary"> Update </button>
                    </form>
                </div>
            </div>
    </>
  )
}

export default Aedit_Profile