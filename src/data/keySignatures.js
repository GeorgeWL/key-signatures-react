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

// the group name for Flat/Natural/Sharp identifiers is accidentals
export function getAccidentalsOfKey(accidentalsCount, accidentalType) {
  if (
    typeof accidentalsCount !== "number" ||
    accidentalsCount < 0 ||
    accidentalsCount > 7
  )
    throw TypeError(
      `accidentalsCount property should only be a number between 0-7. Received ${accidentalsCount}`
    );
  switch (accidentalType) {
    case "flat":
      return Object.values(flattenedKeys).slice(0, accidentalsCount);
    case "sharp":
      return Object.values(sharpenedKeys).slice(0, accidentalsCount);
    default:
      throw TypeError(
        `accidentalType property should only be 'flat' or 'sharp'. Received ${accidentalType}`
      );
  }
}

// Localised
function getPositionCircularArray(array, index) {
  const arrayLength = array.length;
  const position = ((index % arrayLength) + arrayLength) % arrayLength;
  return array[position];
}
const keySignatures = generateKeySignatures();

export default keySignatures;
