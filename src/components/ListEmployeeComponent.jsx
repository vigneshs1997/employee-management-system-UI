import React, {useState, useEffect} from 'react'
import { listEmployees } from '../services/EmployeeService';

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Call the API to fetch employee data
    listEmployees().then((response) => {//then()=> Promise method that handles the response of the API call with help of callback
      setEmployees(response.data);// Set the array of employee object to the state variable
    }).catch(error => {
      console.error(error);
    });
  }, []);// Empty dependency array means this effect runs once when the component mounts
  
  function addNewEmployee(){
    
  }
  /*=======================================Dummy Data==========================================*/

    // const dummyData = [ // Array of Objects
    //     {
    //     "id": 1,
    //     "firstName": "Vignesh",
    //     "lastName": "Senthilkumar",
    //     "email": "vigneshsenthilkumar@gmail.com"
    //     },
    //     {
    //     "id": 2,
    //     "firstName": "Manimegalai",
    //     "lastName": "Senthilkumar",
    //     "email": "manimegalaisenthilkumar@gmail.com"
    //     },
    //     {
    //     "id": 3,
    //     "firstName": "Pandimeenal",
    //     "lastName": "Senthilkumar",
    //     "email": "pandimeenalsenthilkumar@gmail.com"
    //     }
  // ];
  
  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>  
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
          <table className='table table-striped table-bordered'>
            <thead>
                  <tr>
                      <th>Employe Id</th>
                      <th>Employee First Name</th>
                      <th>Employee Last Name</th>
                      <th>Employee Email Id</th>
                  </tr>
            </thead>
              <tbody>
                  {/*Each row depends on the employee id*/}
                  {/* {dummyData.map(employee => ( 
                      <tr key={employee.id}>
                          <td>{employee.id}</td>
                          <td>{employee.firstName}</td>
                          <td>{employee.lastName}</td>
                          <td>{employee.email}</td>
                      </tr>
                  ))} */}
                  
                  {employees.map(employee => ( 
                      <tr key={employee.id}>
                          <td>{employee.id}</td>
                          <td>{employee.firstName}</td>
                          <td>{employee.lastName}</td>
                          <td>{employee.email}</td>
                      </tr>
                  ))}
            </tbody>  
          </table>   
    </div>
  )
}

export default ListEmployeeComponent
