import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Order () {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:8000/order/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/order/')
    .then(response => setTotal(response.data))
    .catch(error => console.log(error));
  }, []);


  const totalm = total.length;
return (
    <>
    <Navbar />
    <Sidebar />
 <div>
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Inbox</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="row">
        <div className="col-md-3">
          <a href="compose.html" className="btn btn-primary btn-block mb-3">Compose</a>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Folders</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item active">
                  <a href="#" className="nav-link">
                    <i className="fas fa-inbox" /> Inbox
                    <span className="badge bg-primary float-right">{totalm}</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fas fa-filter" /> Worked
                    <span className="badge bg-warning float-right">65</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fas fa-filter" /> Waiting
                    <span className="badge bg-danger float-right">3</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-trash-alt" /> Trash
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h5 className="title">Inbox</h5>
              <div className="card-tools">
               
              </div>
            </div>
            <div className="card-body p-0">
              <div className="mailbox-controls">
                <div className="btn-group">
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </div>
              <div className="table-responsive mailbox-messages">
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                      <td>
                        <div className="icheck-primary">
                         <b> Check post</b>
                          <label htmlFor="check1" />
                        </div>
                      </td>
                      
                      <td className="text"><b>Sender</b></td>
                      <td className="mailbox-subject"><b>Address</b> </td>
                      <td className="mailbox-subject"><b>Date Posted</b> </td>
                      <td className="mailbox-attachment" ><b>Time</b></td>
                      <td className="mailbox-attachment" ><b>Status</b></td>
                      <td className="mailbox-attachment" ><b>Action</b></td>
                    </tr>
                    </thead>
                  <tbody>
                  {data.map(order => (
                    <>
                    <tr>
                    <td>
                        <div className="icheck-primary">
                          <input type="checkbox" defaultValue id="check1" />
                          <label htmlFor="check1" />
                        </div>
                      </td>
                      <td key={order.id} className="mailbox-name"><a href="read-mail.html">{order.sendername}</a></td>
                      <td key={order.id} className="mailbox-subject">{order.senderaddress}</td>
                      <td key={order.id} className="mailbox-attachment" > {order.dateposted}</td>
                      <td key={order.id} className="mailbox-date"> {order.timeposted}</td>
                      <td><span key={order.id} className="badge bg-warning ">{order.statusorder}</span></td>
                      <td>  <a class="btn btn-danger btn-sm" href="#">
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
    <strong>Copyright © 2023 <a href="https://adminlte.io"></a>.</strong> All rights reserved.
  </footer>
  <aside className="control-sidebar control-sidebar-dark">
  </aside>
</div>


    </>
    
  )
}

export default Order
