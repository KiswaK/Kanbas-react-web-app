import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import Lab3 from "./Lab3"
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";

export default function Labs(){
    return (
      <div id="wd-labs">
      <TOC/>
      <Routes>
        <Route path = "Lab1" element = {<Lab1></Lab1>} />
        <Route path = "Lab2" element = {<Lab2></Lab2>} />
        <Route path = "Lab3" element = {<Lab3></Lab3>} />
      </Routes>
      </div>

   );
 }

