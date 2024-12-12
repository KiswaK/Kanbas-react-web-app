import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const createAssignment = async (assignment: any) => {
    const { data } = await axios.post(ASSIGNMENTS_API, assignment);
    return data;
  };
  
  export const findAssignmentById = async (assignmentId: string) => {
    const { data } = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return data;
  };
  
  export const deleteAssignment = async (assignmentId: string) => {
    try {
      const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting assignment", error);
      throw error;
    }
  };
   export const updateAssignment = async (assignment: any) => {
    console.log(assignment._id)
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
  };
  export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${ASSIGNMENTS_API}/course/${courseId}`);
    return response.data;
  };

  

  