import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function Users(){
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(res=>setUsers(res.data))
        .catch(err=> console.log(err))
    },[])

    const handelDelete =(id)=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div><Link  to='/create'  className='btn '>Add</Link></div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>{
                            return(
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td><Link to={`/update/${user._id}`}>Update</Link></td>
                                <td><button onClick={()=>handelDelete(user._id)} 
                                className="btn btn-danger">Delete</button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}