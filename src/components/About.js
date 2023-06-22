import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar'

import { Link } from 'react-router-dom'
function About () {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [pharmacymission, setPharmacymission] = useState('');
  const [pharmacyvission, setPharmacyvission] = useState('');
  const [pharmacybackground, setPharmacybackground] = useState('');

  const handleAdd=(e)=>{
    e.preventDefault()
      const about={pharmacymission,pharmacyvission,pharmacybackground}
      console.log(about)
      fetch("http://localhost:8000/about/",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(about)
  
      }).then(()=>{
        console.log("New Info added")
      })
    }

  

  useEffect(() => {
    fetch('http://localhost:8000/about/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <Sidebar/>
    <Navbar/>

    <div>
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>information about pharmacy </h1>
          </div>
          <div className="col-sm-6">
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="card card-default">
          <div className="card-header">
            <h1 className="card-title"><strong></strong></h1>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Pharmacy vision</label>
                  <textarea type="text" class="form-control float-right" id="reservation" value={pharmacyvission} onChange={(e)=>setPharmacyvission(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label>pharmacy background</label>
                  <textarea type="text" class="form-control float-right" id="reservation" value={pharmacymission} onChange={(e)=>setPharmacymission(e.target.value)}></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>pharmacy mission</label>
                  <textarea type="text" class="form-control float-right" id="reservation" value={pharmacybackground} onChange={(e)=>setPharmacybackground(e.target.value)}></textarea>
                </div>
               </div>
            </div>
        </div>
          <div className="card-footer">
           More  info about pharmacy
          </div>
        </div>
       
      </div>
    </section>
          <div className="col-sm-12">
          <ol className="breadcrumb float-sm-left">
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default">
              Reset
                </button>
              </li>
              </Link>
              
            </ol>
            <ol className="breadcrumb float-sm-right">
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default">
              Cancel
                </button>
              </li>
              </Link>
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button onClick={handleAdd} type="button" class="btn btn-default">
              Save
                </button>
              </li>
              </Link>
            </ol>
          </div>


         <div className="col-md-12">
  <div className="card card-primary card-outline">
  {data.map(about => (
    <>
    <div className="card-header">
      <h5 className="mailbox-read-info">Read Contact
      <span className="mailbox-read-time float-right">{currentDate.toString()}</span></h5>
      <div className="card-tools">
      </div>
    </div>
    <div className="card-body p-0">
      <div className="mailbox-read-info">
      <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Pharmacy vision:</label>
                  <p>{about.pharmacyvission}</p> 
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                  <label>Pharmacy vision:</label>
                  <p>{about.pharmacymission}</p>
                </div>
            </div>
        </div>
      </div>
      <div className="mailbox-read-message">
      <div className="col-md-12">
                <div className="form-group">
                  <label>Pharmacy background:</label>
                  <p> {about.pharmacybackground}</p>
                </div>
            </div>
      </div>
    </div>
    </>
    ))}
    <div className="card-footer bg-white">
    </div>
    <div className="card-footer">
      <div className="float-right">
        <button type="button" className="btn btn-default"><i className="fas " /> update</button>
      </div>
    </div>
  </div>
</div>

  </div>
  <footer className="main-footer">
    <div className="float-right d-none d-sm-block">
      <b>Version</b> 3.2.0
    </div>
    Copyright © 
  </footer>
  <aside className="control-sidebar control-sidebar-dark">
  </aside>
</div>


    
    </>
  )
}

export default About
