import React from 'react';
import { Link } from 'react-router';

function Edit() {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <Link to='/'>
                    <button className='btn btn-primary m-3'>Back</button>
                </Link>
                <div className='bg-success text-center rounded'>
                    <h2>Creat Data</h2>
                </div>
                {/* <form className='form-goup' onSubmit={handleSubmit}> */}
                <form className='form-goup'>
                    <div>
                        <label className='form-label'> Enter Name : </label>
                        <input className='form-control'  type='text' name='name' />
                        <br />

                        <label> Enter Age : </label>
                        <input className='form-control'  type='number' name='name' />
                        <br />

                        <label> Enter Email : </label>
                        <input className='form-control' type='text' name='name' />
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
