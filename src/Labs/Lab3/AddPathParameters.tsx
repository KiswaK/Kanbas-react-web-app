import { useParams } from "react-router-dom";

export default function AddPathParameters() {
  const { a, b } = useParams<{ a: string; b: string }>();

  return (
    <div id="wd-add">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {a && b ? parseInt(a) + parseInt(b) : "Invalid parameters"}
    </div>
  );
}