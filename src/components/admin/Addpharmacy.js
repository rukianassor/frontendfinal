import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

 function Addpharmacy() {
  const [pharmacyname, setPharmacyname] = useState('');
  const [ownername, setOwnername] = useState('');
  const [pharmacyaddress, setPharmacyaddress] = useState('');
  const [businesslicence, setBusinesslicence] = useState('');
  const [pharmacycontact, setPharmacycontact] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [region, setRegion] = useState('');

const handleAdd=(e)=>{
  e.preventDefault()
    const pharmacy={pharmacyname,ownername,pharmacyaddress,businesslicence,pharmacycontact,latitude,longitude,region}
    console.log(pharmacy)
    fetch("http://localhost:8000/pham/",{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(pharmacy)

    }).then(()=>{
      console.log("New Pharmacy added")
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
            <h1>New Pharmacy Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <Link to="/pharmaies" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
              Show Pharmacies List
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
          <form>
          <div className="card-header">
            <h4 className=""><strong>Insert regular information about new pharmacy</strong></h4>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row" >
              <div className="col-md-6">
                <div className="form-group">
                  <label>Pharmacy Name</label>
                  <input type="text" class="form-control" id="pharmacyname" name="pharmacyname" value={pharmacyname} onChange={(e)=>setPharmacyname(e.target.value)} placeholder="example : FAHUD PHARMACY" required></input>
                </div>
                <div className="form-group">
                  <label>Pharmacy Address</label>
                  <input type="text" class="form-control" id="pharmacyaddress" name='pharmacyaddress' value={pharmacyaddress} onChange={(e)=>setPharmacyaddress(e.target.value)} placeholder="example : KINONDONI "></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Owner Name</label>
                  <input type="text" class="form-control" id="ownername" name='ownername'  value={ownername} onChange={(e)=>setOwnername(e.target.value)} placeholder="example : MR. PHARMACY"></input>
                </div>
                <div className="form-group" >
                  <label>Business Licence</label>
                  <input type="text" class="form-control" id="businesslicence" name='businesslicence' value={businesslicence} onChange={(e)=>setBusinesslicence(e.target.value)} placeholder="BUSINESS LICENCE NUMBER"></input>
                 </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Pharmacy Contact</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="text" class="form-control float-right" id="pharmacycontact" name='pharmacycontact' value={pharmacycontact} onChange={(e)=>setPharmacycontact(e.target.value)}></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Region</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                    </div>
                    <input type="text" class="form-control float-right" id="region" name='region' value={region} onChange={(e)=>setRegion(e.target.value)}></input>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Latitude</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control float-right" id="latitude" name='latitude' value={latitude} onChange={(e)=>setLatitude(e.target.value)}></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Longitude</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control float-right" id="longitude" name='longitude' value={longitude} onChange={(e)=>setLongitude(e.target.value)}></input>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
          </div>
          </form>
        </div>
       
      </div>
    </section>
          <div className="col-sm-12">
          <ol className="breadcrumb float-sm-left">
              <Link to="/pharmacies" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" >
              Reset
                </button>
              </li>
              </Link>
              
            </ol>
            <ol className="breadcrumb float-sm-right">
              <Link to="/pharmacies" className="nav-link">
              <li className="breadcrumb-item active">
              <button type="button" class="btn btn-default" >
              Cancel
                </button>
              </li>
              </Link>
              <Link to="" className="nav-link">
              <li className="breadcrumb-item active">
              <button onClick={handleAdd} class="btn btn-default">
              Save
                </button>
              </li>
              </Link>
            </ol>
          </div>
  </div>
</div>


    </>
  )
}

export default Addpharmacy



// import React, { useState } from 'react';

// function Addmedicine() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = event => {
//     event.preventDefault();

//     fetch('http://localhost:8000/api/contact/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   };

//   const handleChange = event => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

//       <label htmlFor="message">Message:</label>
//       <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Addmedicine;
