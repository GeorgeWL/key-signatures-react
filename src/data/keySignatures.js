const sharpenedKeys = {
  fSharp: "F#",
  cSharp: "C#",
  gSharp: "G#",
  dSharp: "D#",
  aSharp: "A#",
  eSharp: "E#",
  bSharp: "B#"
};
const flattenedKeys = {
  bFlat: "B♭",
  eFlat: "E♭",
  aFlat: "A♭",
  dFlat: "D♭",
  gFlat: "G♭",
  cFlat: "C♭",
  fFlat: "F♭"
};
const keyNames = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  sharpenedKeys.fSharp,
  sharpenedKeys.cSharp,
  "F",
  flattenedKeys.bFlat,
  flattenedKeys.eFlat,
  flattenedKeys.aFlat,
  flattenedKeys.dFlat,
  flattenedKeys.gFlat,
  flattenedKeys.cFlat
];
export function generateKeySignatures() {
  const keyObjectsSimple = createSimpleKeyObjects();
  const keyObjects = keyObjectsSimple.map((key, index) => ({
    ...key,
    relativeMinor: {
      ...getPositionCircularArray(keyObjectsSimple, index + 3),
      sharpsCount: key.sharpsCount,
      flatsCount: key.flatsCount
    }
  }));
  return keyObjects;
}
export function createSimpleKeyObjects() {
  const isSharp = (index) => index < 8;
  const isFlat = (index) => index > 7;
  return keyNames.map((keyName, index) => {
    const sharpsCount = isSharp(index) ? index : 0;
    const flatsCount = isFlat(index) && keyName !== "C" ? index - 7 : 0;
    return {
      name: keyName,
      sharpsCount,
      flatsCount
    };
  });
}

export function getRelativeMinorOfKey(keyName) {
  throw new Error("Not Yet Implemented");
  return {};
}

export function getSharpsOfKey(sharpsCount) {
  throw new Error("Not Yet Implemented");
  return {};
}
export function getFlatsOfKey(flatsCount) {
  throw new Error("Not Yet Implemented");
  return {};
}
// Localised
function getPositionCircularArray(array, index) {
  const arrayLength = array.length;
  const position = ((index % arrayLength) + arrayLength) % arrayLength;
  return array[position];
}
const keySignatures = generateKeySignatures();

export default keySignatures;
