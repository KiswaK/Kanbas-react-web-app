import { FaSearch, FaPlus, FaChevronCircleDown, FaEllipsisV, FaBook, FaCheckCircle, FaTrash } from 'react-icons/fa';
import { MdAssignment } from 'react-icons/md';
import { BsGripVertical } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModuleControlButtons from '../Modules/ModuleControlButtons';
import { deleteAssignment} from './reducer';
import GreenCheckmark from '../Modules/GreenCheckmark';
import { useNavigate, useParams } from "react-router"; 

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Assignments() {
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const { cid } = useParams(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const CourseAssignments = assignments.filter((assignment: any) => assignment.course === cid) 

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

    const handleNewAssignmentClick = () => {
      navigate(`/Kanbas/Courses/${cid}/Assignments/new`); 
    };

    const handleDeleteClick = (assignment: any) => {
      setAssignmentToDelete(assignment);
      setShowDeleteDialog(true);
    };

    const handleConfirmDelete = () => {
      if (assignmentToDelete) {
        dispatch(deleteAssignment(assignmentToDelete._id));
        setShowDeleteDialog(false);
        setAssignmentToDelete(null);
      }
    };

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
        <Link to={`/Kanbas/Courses/${cid}/Assignments/new`} className="btn btn-danger">
          + Assignment
        </Link>
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
                    CourseAssignments.map((assignment: any) => (
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
                    <span className='text-secondary fw-bold'> | Not availible until</span>
                    <span className='text-secondary'> May 20th</span>
                </div>
                <div className="text-muted">
                    Due May 12th | 100pts
                </div>
              </div>
              <div className="d-flex align-items-center">
              <GreenCheckmark/>
                    <button 
                      className="btn btn-link text-danger me-2"
                      onClick={() => handleDeleteClick(assignment)}
                    >
                      <FaTrash />
                    </button>
                    <FaEllipsisV className="text-muted" />

                    </div>
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item bg-light py-4"> No assignments available.</li>
          )}
        </ul>
      </div>
      {showDeleteDialog && (
        <div className="modal d-block" tabIndex={-1} role="dialog" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Assignment</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteDialog(false)}></button>
              </div>
              <div className="modal-body">
                <p>Do you want to delete?"{assignmentToDelete?.title}"?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteDialog(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
