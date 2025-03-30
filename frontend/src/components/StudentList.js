import React from "react";
import axios from "axios";

const StudentList = ({ students, fetchStudents }) => {
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div style={listStyles.container}>
      <h2 style={listStyles.heading}>Student List</h2>
      <ul style={listStyles.list}>
        {students.length === 0 ? (
          <p style={listStyles.noStudents}>No students added yet.</p>
        ) : (
          students.map((student, index) => (
            <li key={index} style={listStyles.listItem}>
              <span style={listStyles.studentInfo}>
                {student.name} - {student.course}
              </span>
              <button onClick={() => deleteStudent(student.id)} style={listStyles.deleteButton}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const listStyles = {
  container: {
    width: "80%",
    marginTop: "20px",
  },
  heading: {
    marginBottom: "10px",
    color: "red",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid lightgreen",
    backgroundColor: "blue",
    borderRadius: "5px",
    marginBottom: "5px",
    color: "red",
  },
  studentInfo: {
    flexGrow: 1,
  },
  deleteButton: {
    backgroundColor: "red",
    color: "black",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  noStudents: {
    fontStyle: "italic",
    color: "yellow",
  },
};

export default StudentList;