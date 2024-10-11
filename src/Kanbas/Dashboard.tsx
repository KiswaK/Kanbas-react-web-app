import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
          <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                      <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/3081/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5>MATH3081</h5>
                      <p className="wd-dashboard-course-title">Introduction to probability and statistics</p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/3500/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5>CS3500</h5>
                      <p className="wd-dashboard-course-title">Object-oriented design</p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/4550/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5>CS4550</h5>
                      <p className="wd-dashboard-course-title">Web development</p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1245/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5>MATH1245</h5>
                      <p className="wd-dashboard-course-title">Calculus 1</p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1010/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5>THTR1010</h5>
                      <p className="wd-dashboard-course-title">Dynamic on-screen presenter</p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1800/Home">
                    <img src="/images/discrete.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5>CS1800</h5>
                      <p className="wd-dashboard-course-title">Discrete structures</p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1000/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5>ACCT1000</h5>
                      <p className="wd-dashboard-course-title">Introduction to accounting</p>
                      <button className="btn btn-primary">Go</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }