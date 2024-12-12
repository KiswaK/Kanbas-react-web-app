import EnvironmentVariables from "./Lab5/EnvironmentVariables";
import HttpClient from "./Lab5/HttpClient";
import PathParameters from "./Lab5/PathParameters";
import QueryParameters from "./Lab5/QueryParameters";
import WorkingWithArrays from "./Lab5/WorkingWithArrays";
import WorkingWithObjects from "./Lab5/WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./Lab5/WorkingWithObjectsAsynchronously";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div><hr />
      <EnvironmentVariables />
      <PathParameters/>
      <QueryParameters/>
      <WorkingWithObjects/>
      <WorkingWithArrays/>
      <HttpClient/>
      <WorkingWithObjectsAsynchronously/>
    </div>
  );
}