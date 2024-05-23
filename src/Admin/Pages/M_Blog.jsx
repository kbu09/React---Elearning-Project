import React from 'react'
import A_Header from '../Component/A_Header'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { Value } from 'sass';

function M_Blog() {

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
    const res = await axios.get(`http://localhost:3000/Blog`);
    setData(res.data);
  }
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Blog/${id}`);
    toast.success('Data Delete Successful');
    fetch();
  }

  const [formvalue, setFormvalue] = useState({
    id: "",
    BlogName: "",
    BlogOffer: "",
    Blogdetails: "",
    BlogImg: ""

  });
  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Blog/${id}`);
    console.log(res.data);
    setFormvalue(res.data);

  }
  const Viewdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Blog/${id}`);
    console.log(res.data);
    setFormvalue(res.data);

  }
  const onchangehandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
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
      const res = await axios.patch(`http://localhost:3000/Blog/${formvalue.id}`, formvalue);
      console.log(res);
      if (res.status == 200) {
        // alert('Data Add Successful');
        toast.success('Blog Updated Successful');

        setFormvalue({
          ...formvalue,
          id: "",
          BlogName: "",
          BlogOffer: "",
          Blogdetails: "",
          BlogImg: ""

        });
        fetch();
      }
    }
  }

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </Helmet>
      <A_Header />
      <div className="container-fluid bg-primary py-5 mb-5 mt-2 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown"> MANAGE BLOG DATA </h1>
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
      <div className="container mt-5 bg-info p-5 mw-100" style={{ width: 1200 }}>
        <button type="button" class="btn btn-success">Manage Post</button>
        <table class="table mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Blog Name</th>
              <th>Blog Offer</th>
              <th>Blog Details</th>
              <th>Blog Img</th>
              <th> EDIT </th>
              <th> VIEW</th>
              <th> DELETE</th>

            </tr>
          </thead>
          <tbody>
            {
              data && data.map((value, index, arr) => {
                return (
                  <tr key={index}>
                    <td> {value.id} </td>
                    <td>{value.BlogName} </td>
                    <td>{value.BlogOffer}</td>
                    <td>{value.Blogdetails}</td>
                    <td><img src={value.BlogImg} alt="" width={50} /></td>
                    <td>
                      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editdata(value.id)}>
                        <i className="fa fa-edit" style={{ fontSize: 18 }} />
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-info" data-bs-toggle="offcanvas" data-bs-target="#demo" onClick={() => Viewdata(value.id)}>
                        <i className="fa fa-eye" style={{ fontSize: 18 }} />
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-info mb-1" onClick={() => deleteHandel(value.id)}>
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
              <h4 className="modal-title"> MANAGE BLOG DATA</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <form action="/action_page.php" method='post'>
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
                {/* <button type="submit" className="btn btn-success mt-3 ">ADD </button> */}
              </form>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={submitHandel}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div>

        <div className="offcanvas offcanvas-start " id="demo" style={{ width: 500 }}>
          <div className="offcanvas-header mx-5 mt-5">
            <h1 className="offcanvas-title ">{formvalue.BlogName} </h1>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
          </div>
          <div className="offcanvas-body mx-5">
            <div className="card" style={{ width: 400 , height: 400}}>
              <img className="card-img-top" src={formvalue.BlogImg} alt="Card image" style={{ width: '100%' }} />
              <div className="card-body">
                <h4 className="card-title">{formvalue.BlogOffer}</h4>
                <p className="card-text">{formvalue.Blogdetails}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default M_Blog