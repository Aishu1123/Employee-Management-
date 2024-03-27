import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Text } from "@chakra-ui/react";
import AddEmployeeForm from "./AddEmployeeForm";
import Emp from "./Emp";

const Dashboard = ({ logout }) => {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Function to fetch employees data
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Load employees data on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <Button onClick={() => setShowAddForm(true)}>Add Employee</Button>
      <Button onClick={logout}>Logout</Button>
      <Text fontSize="xl" mt={4}>Employee List</Text>
      {showAddForm && <AddEmployeeForm fetchEmployees={fetchEmployees} />}
      {/* <Emp
        employees={employees}
        fetchEmployees={fetchEmployees}
      /> */}
    </div>
  );
};

export default Dashboard;
