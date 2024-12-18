import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],  
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Add a new assignment
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        avaliableUntil: assignment.avaliableUntil,
        dueDate: assignment.dueDate,
        avaliableFrom: assignment.avaliableFrom,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    setAssigments: (state, {payload: assignments}) => {
      state.assignments = assignments;
    },
    
    deleteAssignment: (state, { payload: assignmentID }) => {
        state.assignments = state.assignments.filter(
          (a: any) => a._id !== assignmentID);
      },
      updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        ) as any;
      },
      editAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignmentId ? { ...a, editing: true } : a
        ) as any;
      },
    },
  });

  export const { addAssignment, deleteAssignment, updateAssignment,  editAssignment, setAssigments } =
  assignmentsSlice.actions;
  export default assignmentsSlice.reducer;