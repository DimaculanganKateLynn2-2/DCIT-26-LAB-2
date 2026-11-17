
function StudentCard({ name, studentId, course, year }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p><strong>Student ID:</strong> {studentId}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year Level:</strong> {year}</p>
    </div>
  );
}

export default StudentCard;
