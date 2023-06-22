import React, { useState, useEffect } from 'react';
import Navbar from './admin/Navbar'
import Sidebar from './admin/Sidebar'
import axios from 'axios';

const Admin = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/pham/')
    .then(response => setTotal(response.data))
    .catch(error => console.log(error));
  }, []);


  useEffect(() => {
    fetch('http://localhost:8000/pham')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const totalpham = total.length;
  
  return (
    <>
    
    <section className="content">
      <div className="container-fluid">
        <h1 className="mb-6 text-center"><b>PHARMACIES CONTROL MANAGEMENT SYSTEM</b></h1>
        <h1 className="mb-6 text-center"><b>(PCMS)</b></h1>
        <hr></hr>
        <Navbar />
        <hr></hr>
        <div className="row">
          <div className="col-md-6" >
          <div className="container-fluid">
            
  <div className="row">  
   
    <div className="col-lg-6 col-6">
      <div className="small-box bg-primary">
        <div className="inner">
          <h3>{totalpham}</h3>
          <p><h4>TOTAL PHARMACIES</h4></p>
        </div>
        <div className="icon">
          <i className="ion ion-person-add" />
        </div>
        
      </div>
    </div>
    <div className="col-lg-6 col-6">
      <div className="small-box bg-primary">
        <div className="inner">
          <h3>0</h3>
          <p><h4>ACTIVE PHARMACY</h4></p>
        </div>
        <div className="icon">
          <i className="ion ion-pie-graph " />
        </div>
       
      </div>
    </div>
    <div className="col-lg-6 col-6">
      <div className="small-box bg-primary">
        <div className="inner">
          <h3>0</h3>
          <p><h4>ACTIVE PHARMACY</h4></p>
        </div>
        <div className="icon">
          <i className="ion ion-pie-graph " />
        </div>
       
      </div>
    </div>
    <div className="col-lg-6 col-6">
      <div className="small-box bg-primary">
        <div className="inner">
          <h3>0</h3>
          <p><h4>ACTIVE PHARMACY</h4></p>
        </div>
        <div className="icon">
          <i className="ion ion-pie-graph " />
        </div>
       
      </div>
    </div>
  </div>

</div>
              
       
              
            
          </div>
          <div className="col-md-6">
            <div className="card"></div>
            <div className="card card-default">
              <div className="card-header d-flex p-9">
                <h3 className=" p-0">Tabs</h3>
                <ul className="nav nav-pills ml-auto p-2">
                  <li className="nav-item"><a className="nav-link active" href="#tab_1" data-toggle="tab">PHARMACIES RATE</a></li>
                  <li className="nav-item"><a className="nav-link" href="#tab_2" data-toggle="tab">CONDITIONS</a></li>
                  <li className="nav-item"><a className="nav-link" href="#tab_3" data-toggle="tab">INFORMATIONS</a></li>
                  
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane active" id="tab_1">
                  Graph rate of pharmacies demand
                  </div>
                  <div className="tab-pane" id="tab_2">
                    Conditions and regulationss to pharmacies
                  </div>
                  <div className="tab-pane" id="tab_3">
                    Importants info and notes to pharmacies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/* </div> */}
{/* </div> */}


</>
  )
}

export default Admin
