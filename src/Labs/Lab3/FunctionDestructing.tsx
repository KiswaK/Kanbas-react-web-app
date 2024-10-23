export default function FunctionDestructing() {
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
  
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
  
    return (
      <div id="wd-function-destructing">
        <h2>Function Destructuring</h2>
        
        <p>
          <code>const add = (a, b) =&gt; a + b;</code><br />
          <code>const sum = add(1, 2);</code><br />
          <code>const subtract = (&#123; a, b &#125;) =&gt; a - b;</code><br />
          <code>const difference = subtract(&#123; a: 4, b: 2 &#125;);</code><br />
        </p>
  
        <p>
          <strong>sum</strong> = {sum}<br />
          <strong>difference</strong> = {difference}
        </p>
        
        <hr />
      </div>
    );
  }