import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Contact () {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [pharmacyname, setPharmacyname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [whatsappnumber, setWhatsappnumber] = useState('');
  const [othernumber, setOthernumber] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd=(e)=>{
    e.preventDefault()
      const contact={pharmacyname,email,phonenumber,whatsappnumber,othernumber,description}
      console.log(contact)
      fetch("http://localhost:8000/contact/",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(contact)
  
      }).then(()=>{
        console.log("New Contact added")
      })
    }

  
  

  useEffect(() => {
    fetch('http://localhost:8000/contact/')
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
            <h1>CONTACT INFORMATION </h1>
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
            <h1 className="card-title"><strong>Insert regular information about pharmacy contact</strong></h1>
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
                  <label>Pharmacy Name</label>
                  <input type="text" class="form-control" id="examplemedname" placeholder="example : FAHUD PHARMACY" value={pharmacyname} onChange={(e)=>setPharmacyname(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control" id="email" placeholder=" example : rukron009@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" id="price" placeholder="example : mombasa zanzibar "></input>
                </div>
                <div className="form-group">
                  <label>Phone number</label>
                  <input type="phone" class="form-control" id="price" placeholder="example : 0678833110 " value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Whatsapp number</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="phone" class="form-control" id="price" placeholder="example : 0678833120 " value={whatsappnumber} onChange={(e)=>setWhatsappnumber(e.target.value)}></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <textarea type="text" class="form-control float-right" id="reservation" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Other number</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="phone" class="form-control" id="price" placeholder="example : 0678833130 " value={othernumber} onChange={(e)=>setOthernumber(e.target.value)}></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            Contact info about pharmacy
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
              <Link to="/" className="nav-link">
              <li className="breadcrumb-item active">
              <button  onClick={handleAdd} type="button" class="btn btn-default">
              Save
                </button>
              </li>
              </Link>
            </ol>
          </div>

{data.map(contact => (
    <>
<div className="col-md-12">

  <div className="card card-primary card-outline">
    <div className="card-header">
      <h5 className="mailbox-read-info">Read Contact
      <span className="mailbox-read-time float-right">{currentDate.toString()}</span></h5>
      <div className="card-tools">
      </div>
    </div>
    {/* /.card-header */}
    <div className="card-body p-0">
      <div className="mailbox-read-info">
        <h5><b>Pharmacy Name : </b> {contact.id} {contact.pharmacyname}</h5>
        <h5><b>Email: </b>{contact.id} {contact.email}</h5>
        <h5><b>Phone number : </b>{contact.id} {contact.phonenumber}</h5>
        <h5><b>Whatsapp number: </b>{contact.id} {contact.whatsappnumber}</h5>
        <h5><b>other number: </b>{contact.id} {contact.othernumber}</h5>
      </div>
      {/* /.mailbox-read-info */}
      
      {/* /.mailbox-controls */}
      <div className="mailbox-read-message">
        <p>Fahud pharmacy</p>
        <p>{contact.id} {contact.description}</p>
      </div>
      {/* /.mailbox-read-message */}
    </div>
    {/* /.card-body */}
    <div className="card-footer bg-white">
     
    </div>
    {/* /.card-footer */}
    <div className="card-footer">
      <div className="float-right">
        <button type="button" className="btn btn-default"><i className="fas" /> update</button>
      </div>
    </div>
    {/* /.card-footer */}
  </div>
  {/* /.card */}
</div>
</>
))}
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

export default Contact
