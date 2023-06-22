import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export const Login = () => {
        // const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const submit = async e => {
            e.preventDefault();
    
            const user = {
                // username: username,
                email: email,
                password: password
              };
    
            const {data} = await axios.post('http://localhost:8000/log/', user ,{headers: {
                'Content-Type': 'application/json'
            }}, {withCredentials: true});
    
            console.log(data)
            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
            window.location.href = '/'
    
        }
    const my={
        backgroundImage: "url('/R.jpeg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };
  
  return (
    <div style={my}>
    <div className=''>
          <div className=" col-sm-12">
              <div className="card-body p-4 login">
              <div className="media lg">
              <img src="/logo.jpg" alt="User Avatar" class="img-circle " height="150" width="150"/>
                </div>
                <form onSubmit={submit}>
              <label className="txt"><h3>PHARMACIES SERVICES</h3> </label>
                    <div id="logins-part" className="clogin " role="tabpanel" aria-labelledby="logins-part-trigger">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email"  value={email} required onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password} required onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      
                      <button className="btn btn-primary" type='submit'>Login</button>

                      <Link to="/admin" className="nav-link">
                      <button className="btn btn-primary">Login</button>
                      </Link>
                    </div>
                </form>
              </div>
            </div>
    </div>   
    </div>
  )
}

export default Login
