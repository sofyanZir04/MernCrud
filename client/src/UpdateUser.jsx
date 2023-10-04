import React, { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateUser(){
    const {id}=useParams();
    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [email,setEmail] = useState('');
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get ("http://localhost:3001/getUser/"+id)
        .then(res=>{console.log(res)
            setName(res.data.name)
            setAge(res.data.age)
            setEmail(res.data.email)
        })
        ,[]});


    const Update =(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser"+id,{name,email,age})
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
        navigate('/');

    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <form onSubmit={e=>Update(e)}>
                <div className="form-group my-2">
                    <input type="text" className="form-control"
                     placeholder="Enter Name" name="name"
                     value={name}
                     onChange={(e)=>{ setName(e.target.value)}}
                    
                    />

                </div>
                <div className="form-group my-2">
                    <input type="email" className="form-control" 
                    placeholder="Enter email" name="email"
                    onChange={(e)=>{ setEmail(e.target.value)}}
                    value={email}
                    />
                </div>
                <div className="form-group my-2">
                    <input type="text" className="form-control" 
                    placeholder="Enter age" name="age"
                    onChange={(e)=>{ setAge(e.target.value)}}
                    value={age}
                    />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>

            </form>
        </div>
    )
}