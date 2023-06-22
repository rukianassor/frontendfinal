import React, { useEffect, useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Editmedicine () {
  const {id} = useParams();
  const [values, setValues] = useState({
    id: id,
    medicinename: '',
    medicineamount: '',
    medicineprice: '',
    medicinecategory: '',
    medicineconfigurationdate: ''
  })
  useEffect(()=> {
    axios.get('http://localhost:8000/med/' + id +'/')
    // .then(res => console.log(res))
    .then(res => {
      setValues({...values, medicinename: res.data.medicinename, 
                            medicineamount: res.data.medicineamount,
                            medicineprice: res.data.medicineprice,
                            medicinecategory: res.data.medicinecategory,
                            medicineconfigurationdate: res.data.edicineconfigurationdate})
      })
    .catch(err => console.log(err))
  }, [])
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();
  
  axios.put('http://localhost:8000/med/' + id +'/' , values)
  // .then(res => console.log(res))
  .then(res => {
      navigate('/medicine');
    })
  .catch(err => console.log(err))
}
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
            <h1>UPDATE MEDICINE DATA</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Show Medicines List
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
          <form onSubmit={handleSubmit}>
          <div className="card-header">
            <h1 className="card-title"><strong>Correct information about medicine</strong></h1>
            <div className="card-tools">
              
            </div>
          </div>
          <div className="card-body">
            <div className="row" >
              <div className="col-md-6">
                <div className="form-group">
                  <label>Medicine Name</label>
                  <input type="text" class="form-control" id="medicinename" name="medicinename" value={values.medicinename} onChange={e => setValues({...values, medicinename: e.target.value})}></input>
                </div>
                <div className="form-group">
                  <label>Amount Item(s) Inserted</label>
                  <input type="number" class="form-control" id="medicineamount" name='medicineamount'  value={values.medicineamount} onChange={e => setValues({...values, medicineamount: e.target.value})}></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Price per Item</label>
                  <input type="number" class="form-control" id="medicineprice" name='medicineprice' value={values.medicineprice} onChange={e => setValues({...values, medicineprice: e.target.value})}></input>
                </div>
                <div className="form-group" id='medicinecategory' name='medicinecategory' value={values.medicinecategory} onChange={e => setValues({...values, medicinecategory: e.target.value})}>
                  <label>Category</label>
                  <select className="form-control select2"  style={{width: '100%'}}>
                    <option selected="selected">GEL OIL</option>
                    <option>LIQUID</option>
                    <option>PILLS</option>
                    <option>POWDER</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Configuration Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="medicineconfigurationdate" name='medicineconfigurationdate' value={values.medicineconfigurationdate} onChange={e => setValues({...values, medicineconfigurationdate: e.target.value})} ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Input Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="medicineinputdate" name='medicineinputdate'   ></input>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Expire Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="medicineexpiredate" name='medicineexpiredate'  ></input>
                  </div>
                </div>
                <div class="form-group">
                  <label for="customFile">Medicine Picture</label> 
                  <div class=" input-group">
                  <label class="custom-file-label" for="customFile"></label>
                      <input type="file" class="custom-file-input" id="customFile" name='medicinelogo' ></input>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
          <ol className="breadcrumb float-sm-left">
              <a className="nav-link" >
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default">
              Reset
                </button>
              </li>
              </a>
              
            </ol>
            <ol className="breadcrumb float-sm-right">
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" >
              Cancel
                </button>
              </li>
              </Link>
              <a className="nav-link">
              <li className="breadcrumb-item active">
              <button   className="btn btn-default" >
              Update
                </button>
              </li>
              </a>
            </ol>
          </div>
          </form>
        </div>
      </div>
    </section>
          
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
  );
}

export default Editmedicine


