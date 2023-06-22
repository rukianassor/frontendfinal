import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function Addmedicine () {
  const [medicinename, setMedicinename] = useState('');
  const [medicineprice, setMedicineprice] = useState('');
  const [medicineamount, setMedicineamount] = useState('');
  const [medicinecategory, setMedicinecategory] = useState('');
  const [medicineconfigurationdate, setMedicineconfigurationdate] = useState('');
  const [medicineinputdate, setMedicineinputdate] = useState('');
  const [medicineexpiredate, setMedicineexpiredate] = useState('');
  const [medicinelogo, setMedicinelogo] = useState('');

const handleAdd=(e)=>{
  e.preventDefault()
    const medicine={medicinename,medicineprice,medicineamount,medicinecategory,medicineconfigurationdate,medicineinputdate,medicineexpiredate,medicinelogo}
    console.log(medicine)
    fetch("http://localhost:8000/med/",{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(medicine)

    }).then(()=>{
      console.log("New Medicine added")
    })
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
            <h1>New Medicine Form</h1>
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
          <form >
          <div className="card-header">
            <h1 className="card-title"><strong>Insert regular information about new medicine</strong></h1>
           
          </div>
          <div className="card-body">
            
            <div className="row" >
              <div className="col-md-6">
                <div className="form-group">
                  <label>Medicine Name</label>
                  <input type="text" class="form-control" id="medicinename" name="medicinename" value={medicinename} onChange={(e)=>setMedicinename(e.target.value)} placeholder="example : PANADOL"></input>
                </div>
                <div className="form-group">
                  <label>Amount Item(s) Inserted</label>
                  <input type="number" class="form-control" id="medicineamount" name='medicineamount' value={medicineamount} onChange={(e)=>setMedicineamount(e.target.value)}  placeholder="example : 4"></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Price per Item</label>
                  <input type="number" class="form-control" id="medicineprice" name='medicineprice' value={medicineprice} onChange={(e)=>setMedicineprice(e.target.value)} placeholder="example : 1,000"></input>
                </div>
                <div className="form-group" id='medicinecategory' name='medicinecategory' value={medicinecategory} onChange={(e)=>setMedicinecategory(e.target.value)}>
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
                    <input type="date" class="form-control float-right" id="medicineconfigurationdate" name='medicineconfigurationdate' value={medicineconfigurationdate} onChange={(e)=>setMedicineconfigurationdate(e.target.value)} ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Input Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="medicineinputdate" name='medicineinputdate' value={medicineinputdate} onChange={(e)=>setMedicineinputdate(e.target.value)} ></input>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Expire Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="medicineexpiredate" name='medicineexpiredate' value={medicineexpiredate} onChange={(e)=>setMedicineexpiredate(e.target.value)} ></input>
                  </div>
                </div>
                <div class="form-group">
                  <label for="customFile">Medicine Picture</label> 
                  <div class=" input-group">
                  <label class="custom-file-label" for="customFile"></label>
                      <input type="file" class="custom-file-input" id="customFile" name='medicinelogo' value={medicinelogo} onChange={(e)=>setMedicinelogo(e.target.value)} ></input>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
          <ol className="breadcrumb float-sm-left">
              <a className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Reset
                </button>
              </li>
              </a>
              
            </ol>
            <ol className="breadcrumb float-sm-right">
              <Link to="/medicine" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Cancel
                </button>
              </li>
              </Link>
              <a className="nav-link">
              <li className="breadcrumb-item active">
              <button onClick={handleAdd} className="btn btn-default" >
              Save
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

export default Addmedicine

