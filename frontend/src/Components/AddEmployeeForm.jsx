import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";

const AddEmployeeForm = ({ fetchEmployees }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/employees", {
        firstName,
        lastName,
        email,
        department,
        salary,
      });
      fetchEmployees();
      // Reset form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setDepartment("");
      setSalary("");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Department</FormLabel>
        <Input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Salary</FormLabel>
        <Input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </FormControl>
      <Button type="submit">Add Employee</Button>
    </form>
  );
};

export default AddEmployeeForm;
