import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Addcosmetic() {
  const [cosmeticname, setCosmeticname] = useState('');
  const [cosmeticprice, setCosmeticprice] = useState('');
  const [cosmeticamount, setCosmeticamount] = useState('');
  const [cosmeticcategory, setCosmeticcategory] = useState('');
  const [cosmeticconfigurationdate, setCosmeticconfigurationdate] = useState('');
  const [cosmeticinputdate, setCosmeticinputdate] = useState('');
  const [cosmeticexpiredate, setCosmeticexpiredate] = useState('');
  const [cosmeticlogo, setCosmeticlogo] = useState('');

  const handleAdd=(e)=>{
  e.preventDefault()
    const cosmetic={cosmeticname,cosmeticprice,cosmeticamount,cosmeticcategory,cosmeticconfigurationdate,cosmeticinputdate,cosmeticexpiredate,cosmeticlogo}
    console.log(cosmetic)
    fetch("http://localhost:8000/cos/",{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(cosmetic)

    }).then(()=>{
      console.log("New Cosmetic added")
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
            <h1>New Cosmetic Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <Link to="/cosmetic" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Show Cosmetics List
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
            <h1 className="card-title"><strong>Insert regular information about new cosmetic</strong></h1>
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
            
            <div className="row" >
              <div className="col-md-6">
                <div className="form-group">
                  <label>Cosmetic Name</label>
                  <input type="text" class="form-control" id="cosmeticname" name="cosmeticname" value={cosmeticname} onChange={(e)=>setCosmeticname(e.target.value)} placeholder=""></input>
                </div>
                <div className="form-group">
                  <label>Amount Item(s) Inserted</label>
                  <input type="number" class="form-control" id="cosmeticamount" name='cosmeticamount' value={cosmeticamount} onChange={(e)=>setCosmeticamount(e.target.value)}  placeholder=""></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Price per Item</label>
                  <input type="number" class="form-control" id="cosmeticprice" name='cosmeticprice' value={cosmeticprice} onChange={(e)=>setCosmeticprice(e.target.value)} placeholder=""></input>
                </div>
                <div className="form-group" id='cosmeticcategory' name='cosmeticcategory' value={cosmeticcategory} onChange={(e)=>setCosmeticcategory(e.target.value)}>
                  <label>Category</label>
                  <select className="form-control select2"  style={{width: '100%'}}>
                    <option selected="selected">GEL OIL</option>
                    <option>LIQUID</option>
                    <option>PILLS</option>
                    <option>POWDER</option>
                    <option>Cream</option>
                    <option>lotion</option>
                    <option>Perfume</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Configuration Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="cosmeticconfigurationdate" name='cosmeticconfigurationdate' value={cosmeticconfigurationdate} onChange={(e)=>setCosmeticconfigurationdate(e.target.value)} ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Input Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="cosmeticinputdate" name='cosmeticinputdate' value={cosmeticinputdate} onChange={(e)=>setCosmeticinputdate(e.target.value)} ></input>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Expire Date</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="date" class="form-control float-right" id="cosmeticexpiredate" name='cosmeticexpiredate' value={cosmeticexpiredate} onChange={(e)=>setCosmeticexpiredate(e.target.value)} ></input>
                  </div>
                </div>
                <div class="form-group">
                  <label for="customFile">Medicine Picture</label> 
                  <div class=" input-group">
                  <label class="custom-file-label" for="customFile"></label>
                      <input type="file" class="custom-file-input" id="customFile" name='cosmeticlogo' value={cosmeticlogo} onChange={(e)=>setCosmeticlogo(e.target.value)} ></input>
                      
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
          <ol className="breadcrumb float-sm-left">
              <a className="nav-link" >
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

export default Addcosmetic

