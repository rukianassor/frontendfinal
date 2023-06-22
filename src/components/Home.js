import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Topbar from './Topbar';

function Home() {
  
  return (
<div className="wrapper">
 <Sidebar />
 <Navbar />
  <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard </h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
           
          <Topbar /> 


         <div className="col-md-12">
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">Monthly Recap Report</h5>
      <div className="card-tools">
        <button type="button" className="btn btn-tool" data-card-widget="collapse">
          <i className="fas fa-minus" />
        </button>
        <div className="btn-group">
          <button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
            <i className="fas fa-wrench" />
          </button>
          <div className="dropdown-menu dropdown-menu-right" role="menu">
            <a href="#" className="dropdown-item">Action</a>
            <a href="#" className="dropdown-item">Another action</a>
            <a href="#" className="dropdown-item">Something else here</a>
            <a className="dropdown-divider" />
            <a href="#" className="dropdown-item">Separated link</a>
          </div>
        </div>
        <button type="button" className="btn btn-tool" data-card-widget="remove">
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-8">
          <p className="text-center">
            <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
          </p>
          <div>
            <canvas id="myChart" height={180} style={{height: 180}} />
          </div>
        </div>
        <div className="col-md-4">
          <p className="text-center">
            <strong>Goal Completion</strong>
          </p>
          <div className="progress-group">
            Add Products to Store
            <span className="float-right"><b>160</b>/200</span>
            <div className="progress progress-sm">
              <div className="progress-bar bg-primary" style={{width: '80%'}} />
            </div>
          </div>
          <div className="progress-group">
            Complete Sell
            <span className="float-right"><b>310</b>/400</span>
            <div className="progress progress-sm">
              <div className="progress-bar bg-danger" style={{width: '75%'}} />
            </div>
          </div>
          <div className="progress-group">
            <span className="progress-text">Order Prodcuts</span>
            <span className="float-right"><b>480</b>/800</span>
            <div className="progress progress-sm">
              <div className="progress-bar bg-success" style={{width: '60%'}} />
            </div>
          </div>
          <div className="progress-group">
            Other Services
            <span className="float-right"><b>250</b>/500</span>
            <div className="progress progress-sm">
              <div className="progress-bar bg-warning" style={{width: '50%'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="row">
        <div className="col-sm-3 col-6">
          <div className="description-block border-right">
           
            <h5 className="description-header">$35,210.43</h5>
            <span className="description-text">TOTAL REVENUE</span>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="description-block border-right">
            
            <h5 className="description-header">$10,390.90</h5>
            <span className="description-text">TOTAL COST</span>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="description-block border-right">
          
            <h5 className="description-header">$24,813.53</h5>
            <span className="description-text">TOTAL PROFIT</span>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="description-block">
           
            <h5 className="description-header">1200</h5>
            <span className="description-text">GOAL COMPLETIONS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



          </div>
        </div>
      </div>
    </section>
  </div>
  <footer className="main-footer">
    All rights reserved.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.2.0
    </div>
  </footer>
</div>

  )
}

export default Home;
