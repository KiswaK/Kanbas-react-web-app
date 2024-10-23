export default function SimpleArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let htmlArray1 = [<li key="1">Buy milk</li>, <li key="2">Feed the pets</li>];
    let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];
    
    return (
      <div id="wd-simple-arrays">
        <h4>Simple Arrays</h4>
        <div>numberArray1 = {numberArray1.join(", ")}</div>     <br />
        <div>stringArray1 = {stringArray1.join(", ")}</div>     <br />
        <div>variableArray1 = {variableArray1.join(", ")}</div> <br />
        Todo list:
        <ol>{htmlArray1}</ol>
        <hr />
      </div>
    );
  }