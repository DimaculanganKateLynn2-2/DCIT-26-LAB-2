
import StudentCard from "../components/StudentCard";

function Students() {
  return (
    <div className="page">
      <h1>Student List</h1>
      <p>Here are the registered students.</p>

      <div className="card-container">

        <StudentCard
          name="Juan Dela Cruz"
          studentId="2024-001"
          course="BS Information Technology"
          year="3rd Year"
        />

        <StudentCard
          name="Maria Santos"
          studentId="2024-002"
          course="BS Computer Science"
          year="2nd Year"
        />

        <StudentCard
          name="Pedro Reyes"
          studentId="2024-003"
          course="BS Information Technology"
          year="1st Year"
        />

        <StudentCard
          name="Ana Garcia"
          studentId="2024-004"
          course="BS Information Systems"
          year="3rd Year"
        />

      </div>
    </div>
  );
}

export default Students;
