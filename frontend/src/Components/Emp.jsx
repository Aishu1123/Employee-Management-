// import {
//     Box,
//     Button,
//     Flex,
//     FormControl,
//     FormLabel,
//     Input,
//     Text,
//     useColorModeValue,
//   } from "@chakra-ui/react";
//   import axios from "axios";
//   import React, { useState } from "react";
  
//   const Emp= ({ getEmployees }) => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [department, setDepartment] = useState("");
//     const [salary, setSalary] = useState("");
  
//     const handleAddEmployee = async () => {
//       try {
//         await axios.post("http://localhost:8080/employees", {
//           firstName,
//           lastName,
//           email,
//           department,
//           salary,
//           userId: "user_id_placeholder", // Replace with actual user ID
//         });
//         console.log("Employee added successfully");
//         getEmployees();
//       } catch (error) {
//         console.error("Error adding employee:", error);
//       }
//     };
  
//     return (
//       <Box
//         p={4}
//         boxShadow={
//           "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
//         }
//         borderRadius={"1rem"}
//         bg={useColorModeValue("white", "gray.700")}
//       >
//         <FormControl>
//           <FormLabel>First Name:</FormLabel>
//           <Input
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             placeholder="Enter First Name"
//           />
//         </FormControl>
//         <FormControl mt={4}>
//           <FormLabel>Last Name:</FormLabel>
//           <Input
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             placeholder="Enter Last Name"
//           />
//         </FormControl>
//         <FormControl mt={4}>
//           <FormLabel>Email:</FormLabel>
//           <Input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Email"
//           />
//         </FormControl>
//         <FormControl mt={4}>
//           <FormLabel>Department:</FormLabel>
//           <Input
//             type="text"
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//             placeholder="Enter Department"
//           />
//         </FormControl>
//         <FormControl mt={4}>
//           <FormLabel>Salary:</FormLabel>
//           <Input
//             type="number"
//             value={salary}
//             onChange={(e) => setSalary(e.target.value)}
//             placeholder="Enter Salary"
//           />
//         </FormControl>
//         <Flex mt={4} justifyContent="flex-end">
//           <Button colorScheme="blue" onClick={handleAddEmployee}>
//             Add Employee
//           </Button>
//         </Flex>
//       </Box>
//     );
//   };
  
//   export default Emp;
  