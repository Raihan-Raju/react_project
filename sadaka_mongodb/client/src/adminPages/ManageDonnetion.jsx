import React, { useEffect, useState } from 'react';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminFooter from '../adminComponents/AdminFooter';
import AdminSlider from '../adminComponents/AdminSlider';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ManageDonnetion = () => {
  const [volunteers, setvolunteers] = useState([]);
  const handleDelete=(postid)=>{
    axios.delete(`http://localhost:5000/donate/${postid}`).then((res)=>alert("delete sucess"))
    }
  useEffect(() => {
    axios.get("http://localhost:5000/donate")
        .then((res) => setvolunteers(res.data))
}, [handleDelete])

    return (
        <>
          <AdminNavbar />
          <AdminSidebar />

          <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">DONNETION:</h1>
                            <AdminSlider />
                        </div>
           
                        <>
  {/* Hello world */}
  <div className="row">
    <div className="col-md-12">
      {/*   Kitchen Sink */}
      <div className="panel panel-default">
        <div className="panel-heading">Manage_Donnetion</div>
        <div className="panel-body">
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>#No</th>
                  <th>Amount</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Note</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {volunteers.map((data, i) => {
                    return (
                  
                    <tr key={i}>
                        <th scope="row">{++i}</th>
                        <td>{data.amount}</td>
                        <td>{data.fname}</td>
                        <td>{data.lname}</td>
                        <td>{data.email}</td>
                        <td>{data.number}</td>
                        <td>{data.adress}</td>
                        <td>{data.note}</td>
                        
                        <td>
                            <NavLink >
                                <button className='btn btn-info mb-2 mt-2'>Update</button>
                            </NavLink>
                            <button onClick={()=>handleDelete(data._id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    
                    )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End  Kitchen Sink */}
    </div>
   
  </div>
</>

                    </div>
                 </div>
                 <AdminFooter/>
             </div>
            
          
        </>
    );
};

export default ManageDonnetion;