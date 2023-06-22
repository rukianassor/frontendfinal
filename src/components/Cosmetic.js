// import React from 'react'
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'


function Cosmetic () {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:8000/cos/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="wrapper">
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Cosmetics List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <Link to="/addcosmetic" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Add New cosmetic
                </button>
              </li></Link>
            </ol>
          </div>
        </div>
      </div>
    </section>
    
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
           
            <div className="card">
              <div className="card-header">
                
                <h3 className="card-title">DataTable with cosmetic features</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                  <tr>
                      <td>Sn</td>
                      <td>cosmetic Name</td>
                      <td>cosmetic Price</td>
                      <td>Category</td>
                      <td>Configuration Date</td>
                      <td>Expire Date</td>
                      <td>Made From Date</td>
                      <td>Amount</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map(cosmetic => (
                    <>
                    <tr>
                        <td key={cosmetic.id}>{cosmetic.id}</td>
                        <td key={cosmetic.id}>{cosmetic.cosmeticname}</td>
                        <td key={cosmetic.id}>{cosmetic.cosmeticprice}.00/=</td>
                        <td key={cosmetic.id}>{cosmetic.cosmeticcategory}</td>
                        <td key={cosmetic.id}>{cosmetic.cosmeticamount}</td>
                        <td key={cosmetic.id}>{cosmetic.cosmeticinputdate}</td>
                        <td key={cosmetic.id}>{cosmetic.cosmeticconfigurationdate}</td>
                        <td key={cosmetic.id}>{cosmetic.cosmeticexpiredate}</td>
                        <td class="project-actions text-right">
                        <a class= "btn btn-info btn-sm " href="#">
                                <i class="fa fa-eye" aria-hidden="true">
                                </i>
                                View
                            </a>
                            &nbsp;&nbsp;
                            <a class="btn btn-info btn-sm " href="#">
                                <i class="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            &nbsp;&nbsp;
                            <a class="btn btn-danger btn-sm " href="#">
                                <i class="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    </>
                    ))}
                  </tbody>
                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer className="main-footer">
    <div className="float-right d-none d-sm-block">
      <b>Version</b> 3.2.0
    </div>
    
  </footer>
  <aside className="control-sidebar control-sidebar-dark">
  </aside>
</div>

    </>
  )
}

export default Cosmetic
