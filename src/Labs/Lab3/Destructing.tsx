export default function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
    
    const numbers = ["one", "two", "three"];
    const [first, second, third] = numbers;
  
    return (
      <div id="wd-destructing">
        <h2>Destructuring</h2>
  
        <h3>Object Destructuring</h3>
        <p>
          <code>const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;</code>
          <br />
          <strong>name</strong> = {name}
          <br />
          <strong>age</strong> = {age}
        </p>
  
        <h3>Array Destructuring</h3>
        <p>
          <code>const [first, second, third] = ["one", "two", "three"]</code>
          <br />
          <strong>first</strong> = {first}
          <br />
          <strong>second</strong> = {second}
          <br />
          <strong>third</strong> = {third}
        </p>
        
        <hr />
        
      </div>
    );
  }