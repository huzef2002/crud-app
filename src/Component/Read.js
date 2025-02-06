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
    localStorage.setItem('name',Name);
    localStorage.setItem('age',Age);
    localStorage.setItem('email',Email);
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
                <tr key={item.id}>
                  <td>{item.id}   </td>
                  <td>{item.Name} </td>
                  <td>{item.Age}  </td>
                  <td>{item.Email} </td>
                  <td>
                    <Link to='/edit'>
                      <button className='btn btn-primary' onClick={()=>handelLocal(item.id,item.Name,item.Age, item.Email)}> Edit</button>
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
