import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router';

function Creat() {
    const [myName, setMyName] = useState('');
    const [myAge, setMyAge] = useState('');
    const [myEmail, setMyEmail] = useState('');

    const naviget = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('https://67a1b8625bcfff4fabe33500.mockapi.io/crud', {
            Name: myName,
            Age: myAge,
            Email: myEmail,
        })
            .then(() => {
                alert("Sucsessful");
                naviget('/');

            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='row'>
            <div className='col-md-4'>
                <Link to='/'>
                    <button className='btn btn-primary m-3'>Creat New Data</button>
                </Link>
                <div className='bg-success text-center rounded'>
                    <h2>Creat Data</h2>
                </div>
                <form className='form-goup' onSubmit={handleSubmit}>
                    <div>
                        <label className='form-label'> Enter Name : </label>
                        <input className='form-control' value={myName} onChange={(e) => setMyName(e.target.value)} type='text' name='name' />
                        <br />

                        <label> Enter Age : </label>
                        <input className='form-control' value={myAge} onChange={(e) => setMyAge(e.target.value)} type='number' name='name' />
                        <br />

                        <label> Enter Email : </label>
                        <input className='form-control' value={myEmail} onChange={(e) => setMyEmail(e.target.value)} type='text' name='name' />
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

export default Creat;
