import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 MATH3081 
              </h5>
              <p className="wd-dashboard-course-title">
                introduction to probability and statistics
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS3500 
              </h5>
              <p className="wd-dashboard-course-title">
                object oriented design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <h5>
                CS 4550
              </h5>
              <p className="wd-dashboard-course-title">
                web development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 MATH1245
              </h5>
              <p className="wd-dashboard-course-title">
                calculus 1
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 THTR1010 
              </h5>
              <p className="wd-dashboard-course-title">
                Dynamic on screen presenter
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/Users/kiswakhan/Desktop/webdev/kanbas-react-web-app/public/images/discrete.jpg" width={200} />
            <div>
              <h5>
                 CS1800
              </h5>
              <p className="wd-dashboard-course-title">
                discrete structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 ACCT 1000
              </h5>
              <p className="wd-dashboard-course-title">
                introduction to accounting 
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

}

