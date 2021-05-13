import "./styles.css";
import { generateKeySignatures } from "./data/keySignatures";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {JSON.stringify(generateKeySignatures())}
    </div>
  );
}
