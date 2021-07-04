import { useReactSimpleFlags } from "./lib";
import flags from "./flags.json";

function App() {
  return (
    <header className="container">
      <hgroup className="mt-5">
        <span style={{ fontSize: "3rem" }}>⛳️</span>
        <h2>React Simple Feature Flag</h2>
        <h3>
          List of flags defined in <code>/src/flags.json</code>
        </h3>
      </hgroup>

      <ul>
        {flags.map(({ name }) => (
          <FlagMarkup key={name} flag={name} />
        ))}
      </ul>
    </header>
  );
}

function FlagMarkup({ flag }) {
  const hasFlag = useReactSimpleFlags(flag);
  return (
    <li>
      Flag <strong>{flag}</strong> is {hasFlag ? "enabled" : "disabled"}
    </li>
  );
}

export default App;
