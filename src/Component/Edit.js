import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

function Edit() {

        const [id, setId] = useState(0);
        const [name, setName] = useState('');
        const [age, setAge] = useState('');
        const [email, setEmail] = useState('');

        useEffect(() => {
            setId(localStorage.getItem('id'));
            setName(localStorage.getItem('name'));
            setAge(localStorage.getItem('age'));
            setEmail(localStorage.getItem('email'));
        }, []);

        const navigate = useNavigate();

        const handleUpdate=(e)=>{
            e.preventDefault();
            axios.put(`https://67a1b8625bcfff4fabe33500.mockapi.io/crud/${id}`,{
                Name : name,
                Age : age ,
                Email : email
            }).then(()=>{
                navigate('/');
            })
            .catch((error) => {
                alert('Error 404');
                console.log(error);
              })
        }

    return (
        <div className='row'>
            <div className='col-md-4'>
                <Link to='/'>
                    <button className='btn btn-primary m-3'>Back</button>
                </Link>
                <div className='bg-success text-center rounded'>
                    <h2>Creat Data</h2>
                </div>

                <form className='form-goup' onSubmit={handleUpdate}>
                    <div>

                        <label className='form-label'> Enter Name : </label>
                        <input className='form-control' value={name} onChange={(e)=>setName(e.target.value)} type='text' name='name' />
                        <br />

                        <label> Enter Age : </label>
                        <input className='form-control' value={age} onChange={(e)=>setAge(e.target.value)} type='number' name='name' />
                        <br />

                        <label> Enter Email : </label>
                        <input className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} type='text' name='name' />
                        <br />

                        <div className='d-grid'>
                            <input className='btn btn-primary' type='submit' value={'Submit'} />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;
