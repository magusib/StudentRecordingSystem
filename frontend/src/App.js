import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = async (name, course) => {
    try {
      await axios.post("http://127.0.0.1:5000/api/students", { name, course });
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Recording System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} fetchStudents={fetchStudents} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "navy", 
    fontFamily: "'Copperplate Gothic Bold', sans-serif", 
    color: "red",
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    marginBottom: "20px",
    fontFamily: "'Copperplate Gothic Bold', sans-serif",
    fontSize: "28px",
    color: "lightblue", 
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
};

export default App;