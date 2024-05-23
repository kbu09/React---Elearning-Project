import React from 'react'
import A_Header from '../Component/A_Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';



function A_Contact() {

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
        const res = await axios.get(`http://localhost:3000/contact`);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/contact/${id}`);
        toast.success('Data Delete Successful');
        fetch();
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
                            <h1 className="display-3 text-white animated slideInDown"> CONTACT PAGE</h1>
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
                <h2>CONTACT ENQUIRY </h2>
                <table className="table mt-5" border={1}>
                    <thead className="table-dark">
                        <tr>
                            <th><input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /> </th>
                            <th>Name</th>
                            <th>Email </th>
                            <th>Subject </th>
                            <th>Message  </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            data && data.map((value, index, arr) => {
                                return (
                                    <tr style={{ backgroundColor: ("#2372da39"), color: 'black' }} key={index} >
                                        <td >{value.id}</td>
                                        <td>{value.YourName}</td>
                                        <td>{value.YourEmail}</td>
                                        <td>{value.Subject}</td>
                                        <td>{value.Message}</td>

                                        <td>

                                            <button type="button" class="btn btn-danger" onClick={() => deleteHandel(value.id)}>
                                             Delete
                                            </button>


                                        </td>
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

export default A_Contact