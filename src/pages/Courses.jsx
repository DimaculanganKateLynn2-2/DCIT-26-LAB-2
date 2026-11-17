
import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className="page">
      <h1>Available Courses</h1>
      <p>Here are some of the available courses.</p>

      <div className="card-container">

        <CourseCard
          courseCode="BSIT"
          courseName="Bachelor of Science in Information Technology"
          instructor="Mr. Anderson"
          units="3"
        />

        <CourseCard
          courseCode="BSCS"
          courseName="Bachelor of Science in Computer Science"
          instructor="Ms. Taylor"
          units="3"
        />

        <CourseCard
          courseCode="BSIS"
          courseName="Bachelor of Science in Information Systems"
          instructor="Mr. James"
          units="3"
        />

        <CourseCard
          courseCode="BSEMC"
          courseName="Bachelor of Science in Entertainment and Multimedia Computing"
          instructor="Ms. Wilson"
          units="3"
        />

      </div>
    </div>
  );
}

export default Courses;
