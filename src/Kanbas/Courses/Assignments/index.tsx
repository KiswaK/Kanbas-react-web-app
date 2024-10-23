import { FaSearch, FaPlus, FaChevronCircleDown, FaEllipsisV, FaBook, FaCheckCircle } from 'react-icons/fa';
import { MdAssignment } from 'react-icons/md';
import { BsGripVertical } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModuleControlButtons from '../Modules/ModuleControlButtons';
import GreenCheckmark from '../Modules/GreenCheckmark';
import { useParams } from "react-router"; 
import * as db from '../../Database'; 

export default function Assignments() {
    const assignments = db.assignments; 
    const { cid } = useParams(); 
    const CourseAssignments = assignments.filter(assignment => assignment.course === cid)

    return (
        <div id="wd-assignments" className="container mt-4">
     <div className="d-flex mb-3">
       <div className="flex-grow-1 me-2">
         <div className="input-group w-50">
           <span className="input-group-text">
             <FaSearch />
           </span>
           <input
             className="form-control"
             placeholder="Search..."
           />
         </div>
       </div>
       <button className="btn btn-secondary me-2">+ Group</button>
       <button className="btn btn-danger">+ Assignment</button>
     </div>

     <div className="card bg-light">
       <div className="card-header d-flex justify-content-between align-items-center py-4">
         <h5 className="mb-0">
           <BsGripVertical className="me-2 text-muted" size={25} />
           ASSIGNMENTS
         </h5>
         <div className="position-relative">
           <span className="badge rounded-pill text-dark px-3 py-2" style={{ border: '2px solid gray', borderRadius: '25px' }}>
             40% Finished
           </span>
           <button className="btn btn-outline-secondary btn-sm ms-3">
             <FaPlus />
           </button>
         </div>
       </div>
            <ul className="list-group list-group-flush">
                {CourseAssignments.length > 0 ? (
                    CourseAssignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item bg-light py-4">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 text-muted" size={25}/>
                <FaBook className="me-2 text-muted" size={25}/>
                <div className='flex-grow-1'>
                    <div className='mb-1'>
                        <a
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className='text-decoration-none'
                        >
                            <strong> {assignment.title}</strong>
                        </a>
                    </div>
                <div>
                    <span className='text-danger'>Multiple Modules</span>
                    <span className='text-secondary fw-bold'> | Not avalible until</span>
                    <span className='text-secondary'> May 20th</span>
                </div>
                <div className="text-muted">
                    Due May 12th | 100pts
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-3"/>
                <FaEllipsisV className="text-muted"/>
              </div>
              </div>
            </li>
          ))
        ) : (
            <li className="list-group-item bg-light py-4" > no assignments found</li>
        )}
      </ul>
    </div>
    </div>
  );
}