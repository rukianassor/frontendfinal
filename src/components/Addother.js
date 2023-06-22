import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Medicine from './Medicine'
import { Link } from 'react-router-dom'

const Addother = () => {
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
            <h1>New Product Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <Link to="/otherproduct" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Show Products List
                </button>
              </li></Link>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="card card-default">
          <div className="card-header">
            <h1 className="card-title"><strong>Insert regular information about new product</strong></h1>
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
                  <label>Product Name</label>
                  <input type="text" class="form-control" id="examplemedname" placeholder="example : WHEEL CHAIR"></input>
                </div>
                <div className="form-group">
                  <label>Amount Item(s) Inserted</label>
                  <input type="number" class="form-control" id="amount" placeholder="example : 4"></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Price per Item</label>
                  <input type="number" class="form-control" id="price" placeholder="example : 1,000"></input>
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control select2"  style={{width: '100%'}}>
                    <option selected="selected">Gel oil</option>
                    <option>Liquid</option>
                    <option>Pills</option>
                    <option>Powder</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Configuration Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="reservation"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Input Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="reservation"></input>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Expire Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="reservation"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Made from</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="text" class="form-control float-right" id="reservation"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            Visit 
          </div>
        </div>
       
      </div>
    </section>
          <div className="col-sm-12">
          <ol className="breadcrumb float-sm-left">
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Reset
                </button>
              </li>
              </Link>
              
            </ol>
            <ol className="breadcrumb float-sm-right">
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Cancel
                </button>
              </li>
              </Link>
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Save
                </button>
              </li>
              </Link>
            </ol>
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

export default Addother
