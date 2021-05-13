import trebleClef from "../assets/treble_clef.svg";
import bassClef from "../assets/bass_clef.svg";
import { capitalize } from "../helpers/capitalize";
import classNames from "classnames";
export default function Clef({ type = "treble", className }) {
  return (
    <img
      src={type === "treble" ? trebleClef : type === "bass" && bassClef}
      alt={capitalize(`${type} clef`)}
      className={classNames(`${type} clef`, className)}
    />
  );
}
