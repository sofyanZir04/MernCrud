import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function CreateUser(){
    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [email,setEmail] = useState('');
    const navigate=useNavigate()
    const Submit =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email,age})
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
        navigate('/');

    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <form onSubmit={e=>Submit(e)}>
                <div className="form-group my-2">
                    <input type="text" className="form-control"
                     placeholder="Enter Name" name="name"
                     onChange={(e)=>{ setName(e.target.value)}}
                    
                    />

                </div>
                <div className="form-group my-2">
                    <input type="email" className="form-control" 
                    placeholder="Enter email" name="email"
                    onChange={(e)=>{ setEmail(e.target.value)}}
                    />
                </div>
                <div className="form-group my-2">
                    <input type="text" className="form-control" 
                    placeholder="Enter age" name="age"
                    onChange={(e)=>{ setAge(e.target.value)}}
                    />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>

            </form>
        </div>
    )
}
