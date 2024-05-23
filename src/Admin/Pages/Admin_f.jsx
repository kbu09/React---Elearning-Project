import React, { useEffect } from 'react'
import A_Header from '../Component/A_Header'
import { useNavigate } from 'react-router-dom';

function Admin_f() {
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
    return (
        <>
            <A_Header />
            <div className="container-fluid bg-primary py-5 mb-5 mt-2 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"> FEEDBACK PAGE</h1>
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
                <h2> STUDENT FEEDBACK </h2>
                <table className="table mt-5" border={1}>
                    <thead className="table-dark">
                        <tr>
                            <th><input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /> </th>
                            <th>Student Name </th>
                            <th> Rating  </th>
                            <th>Comments </th>
                            <th>Comments Date </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>John</td>
                            <td><span class="fa fa-star   checked"  style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td> A very good teacher with a humorous approach.<br />
                                he was enthusiastic,energetic. </td>
                            <td> 12/03/2024 </td>
                            <td>  <a href='#'> Reply </a></td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>Mary</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td>Kept the class interesting and lively. <br />he was enthusiastic,energetic and had <br />a wonderful way of simplifying explanations<br /></td>
                            <td> 15/03/2024</td>
                            <td><a href='#'> Reply </a> </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /> </td>
                            <td>July</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td> A very good teacher with a humorous approach.<br />
                                he was enthusiastic,energetic. </td>
                            <td> 20/03/2024</td>
                            <td> <a href='#'> Reply </a></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>John</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td>Kept the class interesting and lively. <br />he was enthusiastic,energetic and had <br />a wonderful way of simplifying explanations<br /></td>
                            <td> 12/03/2024 </td>
                            <td>  <a href='#'> Reply </a></td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>Mary</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td> Subject matter was very interesting and it was taught very well.</td>
                            <td> 15/03/2024</td>
                            <td><a href='#'> Reply </a> </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>John</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td> A very good teacher with a humorous approach.<br />
                                he was enthusiastic,energetic.</td>
                            <td> 12/03/2024 </td>
                            <td>  <a href='#'> Reply </a></td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>Mary</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td>Kept the class interesting and lively. <br />he was enthusiastic,energetic and had <br />a wonderful way of simplifying explanations<br /></td>
                            <td> 15/03/2024</td>
                            <td><a href='#'> Reply </a> </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>John</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td>john@example.com</td>
                            <td> 12/03/2024 </td>
                            <td>  <a href='#'> Reply </a></td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>Mary</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td>mary@example.com</td>
                            <td> 15/03/2024</td>
                            <td><a href='#'> Reply </a> </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" /></td>
                            <td>John</td>
                            <td><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span><span class="fa fa-star   checked" style={{color: 'orange'}}></span></td>
                            <td>john@example.com</td>
                            <td> 12/03/2024 </td>
                            <td>  <a href='#'> Reply </a></td>
                        </tr>

                    </tbody>
                </table>

            </div>


        </>
    )
}

export default Admin_f