
function CourseCard({ courseCode, courseName, instructor, units }) {
  return (
    <div className="course-card">
      <h3>{courseName}</h3>
      <p><strong>Course Code:</strong> {courseCode}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Units:</strong> {units}</p>
    </div>
  );
}

export default CourseCard;
