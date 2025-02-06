import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Read() {

  const [apiData, setApiData] = useState([]);

  function getdata() {
    axios.get('https://67a1b8625bcfff4fabe33500.mockapi.io/crud')
      .then((respons) => {
        setApiData(respons.data);
      })
  }

  function handelLocal(id,Name,Age,Email){
    localStorage.setItem('id',id);
    localStorage.setItem('Name',Name);
    localStorage.setItem('Age',Age);
    localStorage.setItem('Email',Email);
  }

  function handeldlt(id) {
    axios.delete(`https://67a1b8625bcfff4fabe33500.mockapi.io/crud/${id}`)
      .then(() => {
        getdata();
      })
      .catch((error) => {
        alert('Error 404')
      })
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className='row'>
      <div className='col-md-12'>

        <Link to='/creat'>
          <button className='btn btn-primary m-3'>Creat New Data</button>
        </Link>

        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => {
              return (
                <tr>
                  <td>{item.id}   </td>
                  <td>{item.Name} {item.name}</td>
                  <td>{item.Age}  {item.age}</td>
                  <td>{item.Email} {item.email}</td>
                  <td>
                    <Link to='/edit'>
                      <button className='btn btn-primary' onChange={()=>handelLocal(item.id,item.Name,item.Age, item.Email)}> Edit</button>
                    </Link>
                  </td>
                  <td>

                    <button className='btn btn-danger' onClick={() => { if (window.confirm('Are You Sure to Delete Data ? ?')) { handeldlt(item.id) } }} >Delete</button></td>
                </tr>
              )

            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Read;
