import userEvent from "@testing-library/user-event";
import React from "react";
import EmployeeService from "../services/EmployeeService";

class EmployeeComponent extends React.Component {
  constructor(props) {
      super(props)
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((response) => {
      this.setState({ employees: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> Employee List </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Employee Id</td>
              <td>Employee Role</td>
              <td>Employee Firstname</td>
              <td>Employee Lastname</td>
              <td>Employee Phone</td>
              <td>Employee Email</td>
              <td>Employee streetName</td>
              <td>Employee streetNumber</td>
              <td>Employee zipCode</td>
              <td>Employee city</td>
              <td>Employee Username</td>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(
                employee =>
              <tr key= {employee.id}>
                    <td> {employee.id} </td>
                    <td> {employee.role} </td>
                    <td> {employee.firstname} </td>
                    <td> {employee.lastname} </td>
                    <td> {employee.phone} </td>
                    <td> {employee.email} </td>
                    <td> {employee.streetName} </td>
                    <td> {employee.streetNumber} </td>
                    <td> {employee.zipCode} </td>
                    <td> {employee.city} </td>
                    <td> {employee.username} </td>
                 </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default EmployeeComponent;
