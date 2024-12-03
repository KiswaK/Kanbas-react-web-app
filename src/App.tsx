import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";
import TOC from "./Labs/TOC";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import Assignments from "./Kanbas/Courses/Assignments";
import AssignmentEditor from "./Kanbas/Courses/Assignments/Editor"; 


export default function App() {
  return (
    <HashRouter>
         <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element= {<Navigate to="TOC" />} />
          <Route path="/TOC" element={<TOC/>}/>
          <Route path="/Labs/*" element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Kanbas/Courses/:cid/Assignments" element={<Assignments />} />
            <Route path="/Kanbas/Courses/:cid/Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="/Kanbas/Courses/:cid/Assignments/:aid" element={<AssignmentEditor />} />
         
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}
