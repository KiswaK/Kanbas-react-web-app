import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {

  const { pathname } = useLocation();
  const { cid } = useParams(); 

  const courseLinks = [
    "Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"
  ];


  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        {courseLinks.map((link) => (
    <Link key={link} to={`/Kanbas/Courses/${cid}/${link}`} className={`list-group-item border border-0
      ${pathname.includes(link) ? "active text-black" : "text-danger"}`}>
      <span className="fs-6">{link}</span>
    </Link>
  ))}
    </div>
    
);}
