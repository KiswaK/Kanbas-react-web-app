import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import Lab3 from "./Lab3"
import Lab4 from "./Lab4";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import { Provider } from "react-redux";
import store from "./store";

export default function Labs(){
    return (
      <Provider store={store}>
      <div className="container-fluid"></div>
      <div id="wd-labs">
      <TOC/>
      <Routes>
        <Route path = "Lab1" element = {<Lab1></Lab1>} />
        <Route path = "Lab2" element = {<Lab2></Lab2>} />
        <Route path = "Lab3" element = {<Lab3></Lab3>} />
        <Route path = "Lab4" element = {<Lab4></Lab4>} />
      </Routes>
       {/* <Lab1 />
      <Lab2 />
      <h2>Lab 3</h2>
      <h2>Lab 4</h2>
      <h2>Lab 5</h2> */}
      </div>
    </Provider>
  );
}

