import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'


const Otherproduct = () => {
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
            <h1>product List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <Link to="/addother" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Add New Product
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
                
                <h3 className="card-title">DataTable with product features</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                  <tr>
                      <td>Sn</td>
                      <td>Product Name</td>
                      <td>Product Price</td>
                      <td>Category</td>
                      <td>Configuration Date</td>
                      <td>Expire Date</td>
                      <td>Made From</td>
                      <td>Amount</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>***** </td>
                      <td>2,500</td>
                      <td>Pill</td>
                      <td>23/4/2010</td>
                      <td>25/4/2023</td>
                      <td>UAE</td>
                      <td>2,997</td>
                      <td class="project-actions text-right">
                      <a class="btn btn-info btn-sm" href="#">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a>
                          <a class="btn btn-danger btn-sm" href="#">
                              <i class="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>********</td>
                      <td>1,500</td>
                      <td>pill</td>
                      <td>23/4/2010</td>
                      <td>25/4/2023</td>
                      <td>UAE</td>
                      <td>2,997</td>
                      <td class="project-actions text-right">
                      <a class="btn btn-info btn-sm" href="#">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a>
                          <a class="btn btn-danger btn-sm" href="#">
                              <i class="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>********</td>
                      <td>1,500</td>
                      <td>Liquid</td>
                      <td>23/4/2010</td>
                      <td>25/4/2023</td>
                      <td>UAE</td>
                      <td>2,997</td>
                      <td class="project-actions text-right">
                      <a class="btn btn-info btn-sm" href="#">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a>
                          <a class="btn btn-danger btn-sm" href="#">
                              <i class="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                    </tr>
                   
                    <tr>
                      <td>4</td>
                      <td>********</td>
                      <td>1,500</td>
                      <td>Liquid</td>
                      <td>23/4/2010</td>
                      <td>25/4/2023</td>
                      <td>UAE</td>
                      <td>2,997</td>
                      <td class="project-actions text-right">
                      <a class="btn btn-info btn-sm" href="#">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a>
                          <a class="btn btn-danger btn-sm" href="#">
                              <i class="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                    </tr>
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

export default Otherproduct
