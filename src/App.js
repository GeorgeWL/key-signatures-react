import "./styles.css";
import { generateKeySignatures } from "./data/keySignatures";
import Clef from "./components/clef";
const keySignatures = generateKeySignatures();
export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </header>
      <main>
        <Clef type="bass" />
        <Clef type="treble" />
      </main>
      <footer>
        All icons used are from the{" "}
        <a
          href="https://thenounproject.com/vasily21/collection/music/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Music Icons Collection
        </a>{" "}
        by Vasily Gedzun from the Noun Project
      </footer>
    </div>
  );
}
