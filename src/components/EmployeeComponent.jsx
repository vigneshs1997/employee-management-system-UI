import React, { useState } from 'react'
import { createNewEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom'; 
const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    const handleLastName = (e) => setLastName(e.target.value);
    
    const saveEmployee = (e) => {
        e.preventDefault();//Stop the default behaviour of the form to submit and refresh the page
         
        const employee = { firstName, lastName, email };
        console.log(employee);

        createNewEmployee(employee).then((response) => { //return a promise and  handle the response in the block
            console.log(response.data);
            navigator('/employees'); //navigate to the list of employees page after successful creation
        });

        
    }
  return (
      <div className='container'>
          <br />
        <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <h2 className='text-center'>Add Employee</h2>
                  <div className='card-body'>
                      <form>
                          <div className='form-group mb-2'>
                              <label className='form-label'>First Name:</label>
                              <input
                                  type="text"
                                  placeholder='Enter Employee First Name'
                                  name='firstName'
                                  value={firstName}
                                  className='form-control'
                                  onChange={(e) => setFirstName(e.target.value)}
                              />
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Last Name:</label>
                              <input
                                  type="text"
                                  placeholder='Enter Employee Last Name'
                                  name='lastName'
                                  value={lastName}
                                  className='form-control'
                                  onChange={handleLastName}
                              />
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Email</label>
                              <input
                                  type='email'
                                  placeholder='Enter Email'
                                  name='email'
                                  value={email}
                                  className='form-control'
                                  onChange={(e) =>setEmail(e.target.value)}
                              />
                          </div>
                          <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                  </div>
              </div> 
        </div>
    </div>
  )
}

export default EmployeeComponent
