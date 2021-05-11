const flatSymbol = "♭";
const sharpKeys = ["F#", "C#", "G#", "D#", "A#", "E#", "B#"];
const flatKeys = ["B♭", "E♭", "A♭", "D♭", "G♭", "C♭", "F♭"];
function generateKeySignatures() {
  const keyNames = [
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    `F#`,
    "C#",
    "F",
    `B${flatSymbol}`,
    `E${flatSymbol}`,
    `A${flatSymbol}`,
    `D${flatSymbol}`,
    `G${flatSymbol}`,
    `C${flatSymbol}`
  ];
  const isSharp = (index) => index <= 7;
  const isFlat = (index) => index >= 7;
  const keyObjectsSimple = keyNames.map((keyName, index) => {
    const sharpsCount = isSharp(index) ? index : 0;
    const flatsCount = isFlat(index) ? index - 7 : 0;
    return {
      name: keyName,
      sharpsCount,
      flatsCount
    };
  });
  const keyObjectsWithSharpsFlats = keyObjectsSimple.map((item, index) => {});
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

function getPositionCircularArray(array, index) {
  const arrayLength = array.length;
  const position = ((index % arrayLength) + arrayLength) % arrayLength;
  return array[position];
}

function getSharpsOfKey(sharpsCount) {
  return {};
}
function getFlatsOfKey(flatsCount) {
  return {};
}
const keySignatures = generateKeySignatures();

export default keySignatures;
