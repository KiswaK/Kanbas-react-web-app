export default function ConditionalOutputIfElse() {
    const ConditionalOutputInline = () => {
        const loggedIn = false;
        return (
          <div id="wd-conditional-output-inline">
            {loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please login Inline</h2>}
          </div>
        );
    };
    return (
      <div>
        <h3>Conditional Output If Else</h3>
        <ConditionalOutputInline /> {/* Call the inline component */}
      </div>
    );
}