import React from 'react'
import A_Header from '../Component/A_Header'
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function A_Blog() {
    const redirect=useNavigate();
    
    useEffect(()=>{
        if(!(localStorage.getItem('aid')))
        {
            redirect('/a_login');
        }
        // else 
        // {
        //   fetch();
        // }
    },[]);

    const [formvalue, setFormvalue] = useState({
        id: "",
        BlogName: "",
        BlogOffer: "",
        Blogdetails: "",
        BlogImg: ""

    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function vali() {
        var ans = true;
        if (formvalue.BlogName == "") {
            toast.error('Blog Name is Required');
            ans = false;
            return false;
        }

        if (formvalue.BlogOffer == "") {
            toast.error('Blog Name is Required');
            ans = false;
            return false;
        }
        if (formvalue.Blogdetails == "") {
            toast.error('Blog Details is Required');
            ans = false;
            return false;
        }
        if (formvalue.BlogImg == "") {
            toast.error('Blog Images is Required');
            ans = false;
            return false;
        }
        return ans;
    }



    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.post(`http://localhost:3000/Blog`, formvalue);
            console.log(res);
            if (res.status == 201) {
                // alert('Data Add Successful');
                toast.success('Data Add Successful');

                setFormvalue({
                    ...formvalue,
                    id: "",
                    BlogName: "",
                    BlogOffer: "",
                    Blogdetails: "",
                    BlogImg: ""

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
                            <h1 className="display-3 text-white animated slideInDown"> ADD BLOG DATA </h1>
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
                <h2>Blog Page</h2>
                <form action="/action_page.php" onSubmit={submitHandel} method='post'>
                    <div className="mb-3 mt-5">
                        <label htmlFor="BName"> Blog Title  :</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.BlogName} name='BlogName' className="form-control mt-3" id="blog" placeholder="Enter your Blog Title " />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Boffer"> Blog Offer :</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.BlogOffer} name='BlogOffer' className="form-control mt-3" id="blog" placeholder="Enter your Blog Offer" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Boffer"> Blog Details :</label>
                        <textarea onChange={onchangehandel} value={formvalue.Blogdetails} name='Blogdetails' class="form-control mt-3" rows="5" id="comment" ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Bimage"> Blog Image :</label>
                        <input type="text" onChange={onchangehandel} value={formvalue.BlogImg} name='BlogImg' className="form-control mt-3" id="blog" placeholder="Add Image" />
                    </div>
                    <button type="submit" className="btn btn-success mt-3 ">ADD </button>
                </form>
            </div>


        </>
    )
}

export default A_Blog