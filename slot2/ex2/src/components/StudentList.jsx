import students from "../data/listOfStudent";
import "../App.css";

function StudentList() {
  return (
    <div className="student-list">
      {students.map((s) => (
        <div className="student-card" key={s.id}>
          <img src={s.image} alt={s.name} />
          <div className="student-info">
            <h3>{s.name}</h3>
            <p>ID: {s.id}</p>
            <p>Age: {s.age}</p>
            <p>Grade: {s.grade}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
