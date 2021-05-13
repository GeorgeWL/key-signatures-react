import {
  createSimpleKeyObjects,
  getAccidentalsOfKey,
  mergeAccidentalsWithKey,
  generateKeySignatures
} from "./keySignatures";
const sharpenedKeys = {
  cSharp: "C#",
  dSharp: "D#",
  eSharp: "E#",
  fSharp: "F#",
  gSharp: "G#",
  aSharp: "A#",
  bSharp: "B#"
};
const flattenedKeys = {
  cFlat: "C♭",
  dFlat: "D♭",
  eFlat: "E♭",
  fFlat: "F♭",
  gFlat: "G♭",
  aFlat: "A♭",
  bFlat: "B♭"
};
// Sharpened Keys
const cMajorSharpenedKeys = [];
const gMajorSharpenedKeys = [sharpenedKeys.fSharp].sort();
const dMajorSharpenedKeys = [
  ...gMajorSharpenedKeys,
  sharpenedKeys.cSharp
].sort();
const aMajorSharpenedKeys = [
  ...dMajorSharpenedKeys,
  sharpenedKeys.gSharp
].sort();
const eMajorSharpenedKeys = [
  ...aMajorSharpenedKeys,
  sharpenedKeys.dSharp
].sort();
const bMajorSharpenedKeys = [
  ...eMajorSharpenedKeys,
  sharpenedKeys.aSharp
].sort();
const fSharpMajorSharpenedKeys = [
  ...bMajorSharpenedKeys,
  sharpenedKeys.eSharp
].sort();
const cSharpMajorSharpenedKeys = Object.values(sharpenedKeys).sort();
// Flat keys
const dFlatMajor = Object.values(flattenedKeys).sort();

const cMajorKeySignature = ["C", "D", "E", "F", "G", "A", "B"];
const gMajorKeySignature = ["C", "D", "E", sharpenedKeys.fSharp, "G", "A", "B"];
const dMajorKeySignature = [
  sharpenedKeys.cSharp,
  "D",
  "E",
  sharpenedKeys.fSharp,
  "G",
  "A",
  "B"
];
const aMajorKeySignature = [
  sharpenedKeys.cSharp,
  "D",
  "E",
  sharpenedKeys.fSharp,
  sharpenedKeys.gSharp,
  "A",
  "B"
];
const eMajorKeySignature = [
  sharpenedKeys.cSharp,
  sharpenedKeys.dSharp,
  "E",
  sharpenedKeys.fSharp,
  sharpenedKeys.gSharp,
  "A",
  "B"
];
const bMajorKeySignature = [
  sharpenedKeys.cSharp,
  sharpenedKeys.dSharp,
  "E",
  sharpenedKeys.fSharp,
  sharpenedKeys.gSharp,
  sharpenedKeys.aSharp,
  "B"
];
const fSharpMajorKeySignature = [
  sharpenedKeys.cSharp,
  sharpenedKeys.dSharp,
  sharpenedKeys.eSharp,
  sharpenedKeys.fSharp,
  sharpenedKeys.gSharp,
  sharpenedKeys.aSharp,
  "B"
];
const cSharpMajorKeySignature = cSharpMajorSharpenedKeys;
const eFlatMajorKeySignature = ["C", "D", "E", "F", "G", "A", "B"];
const aFlatMajorKeySignature = ["C", "D", "E", "F", "G", "A", "B"];
const bFlatMajorKeySignature = ["C", "D", "E", "F", "G", "A", "B"];
const fMajorKeySignature = ["C", "D", "E", "F", "G", "A", "B"];

describe("Create Simple Key Signature Objects for Major Key Signatures", () => {
  const keySignaturesArray = createSimpleKeyObjects();
  const keyC = keySignaturesArray.find((x) => x.name === "C");
  const keyG = keySignaturesArray.find((x) => x.name === "G");
  const keyD = keySignaturesArray.find((x) => x.name === "D");
  const keyA = keySignaturesArray.find((x) => x.name === "A");
  const keyE = keySignaturesArray.find((x) => x.name === "E");
  const keyB = keySignaturesArray.find((x) => x.name === "B");
  const keyFSharp = keySignaturesArray.find((x) => x.name === "F#");
  const keyCSharp = keySignaturesArray.find((x) => x.name === "C#");
  const keyF = keySignaturesArray.find((x) => x.name === "F");
  const keyBFlat = keySignaturesArray.find(
    (x) => x.name === flattenedKeys.bFlat
  );
  const keyEFlat = keySignaturesArray.find(
    (x) => x.name === flattenedKeys.eFlat
  );
  const keyAFlat = keySignaturesArray.find(
    (x) => x.name === flattenedKeys.aFlat
  );
  const keyDFlat = keySignaturesArray.find(
    (x) => x.name === flattenedKeys.dFlat
  );
  const keyGFlat = keySignaturesArray.find(
    (x) => x.name === flattenedKeys.gFlat
  );
  const keyCFlat = keySignaturesArray.find(
    (x) => x.name === flattenedKeys.cFlat
  );
  const sharpKeys = [keyG, keyA, keyE, keyB, keyFSharp, keyCSharp];
  const flatKeys = [
    keyF,
    keyBFlat,
    keyEFlat,
    keyAFlat,
    keyDFlat,
    keyGFlat,
    keyCFlat
  ];
  it("Has expected props in Objects", () => {
    keySignaturesArray.forEach((keySignature) => {
      expect(Object.keys(keySignature).sort()).toEqual(
        ["name", "flatsCount", "sharpsCount"].sort()
      );
      expect(typeof keySignature.name).toEqual("string");
      expect(keySignature.name.length > 0).toEqual(true);
      expect(typeof keySignature.flatsCount).toEqual("number");
      expect(typeof keySignature.sharpsCount).toEqual("number");
    });
  });
  it("Correctly returns 0 flats or sharps for C Major", () => {
    expect(keyC.sharpsCount).toEqual(0);
    expect(keyC.flatsCount).toEqual(0);
  });
  it("Returns correct number of Sharps for keys without Sharp Notes", () => {
    flatKeys.forEach((keySignature) => {
      expect(keySignature.sharpsCount).toEqual(0);
    });
  });
  it("Returns correct number of Flats for keys without Flat Notes", () => {
    sharpKeys.forEach((keySignature) => {
      expect(keySignature.flatsCount).toEqual(0);
    });
  });
  it("Returns correct number of sharps for keys with Sharp Notes", () => {
    expect(keyG.sharpsCount).toEqual(1);
    expect(keyD.sharpsCount).toEqual(2);
    expect(keyA.sharpsCount).toEqual(3);
    expect(keyE.sharpsCount).toEqual(4);
    expect(keyB.sharpsCount).toEqual(5);
    expect(keyFSharp.sharpsCount).toEqual(6);
    expect(keyCSharp.sharpsCount).toEqual(7);
  });
  it("Returns correct number of flats for keys with Flat Notes", () => {
    expect(keyF.flatsCount).toEqual(1);
    expect(keyBFlat.flatsCount).toEqual(2);
    expect(keyEFlat.flatsCount).toEqual(3);
    expect(keyAFlat.flatsCount).toEqual(4);
    expect(keyDFlat.flatsCount).toEqual(5);
    expect(keyGFlat.flatsCount).toEqual(6);
    expect(keyCFlat.flatsCount).toEqual(7);
  });
});

describe("Get Accidentals of Each Key Signatures Correctly", () => {
  it("gives error responses for invalid paramaters");
  it("Returns Sharps as Notes for each Key with Sharps", () => {
    expect(getAccidentalsOfKey(0, "sharp")).toEqual(cMajorSharpenedKeys);
    expect(getAccidentalsOfKey(1, "sharp")).toEqual(gMajorSharpenedKeys);
    expect(getAccidentalsOfKey(2, "sharp")).toEqual(dMajorSharpenedKeys);
    expect(getAccidentalsOfKey(3, "sharp")).toEqual(aMajorSharpenedKeys);
    expect(getAccidentalsOfKey(4, "sharp")).toEqual(eMajorSharpenedKeys);
    expect(getAccidentalsOfKey(5, "sharp")).toEqual(bMajorSharpenedKeys);
    expect(getAccidentalsOfKey(6, "sharp")).toEqual(fSharpMajorSharpenedKeys);
    expect(getAccidentalsOfKey(7, "sharp")).toEqual(cSharpMajorSharpenedKeys);
  });
  it("Returns Flats as Notes for each Key with Flats", () => {
    expect(getAccidentalsOfKey(0, "flat")).toEqual([]);
    //   expect(getAccidentalsOfKey(1, "flat")).toEqual([]);
    //   expect(getAccidentalsOfKey(2, "flat")).toEqual([]);
    //   expect(getAccidentalsOfKey(3, "flat")).toEqual([]);
    //   expect(getAccidentalsOfKey(4, "flat")).toEqual([]);
    //   expect(getAccidentalsOfKey(5, "flat")).toEqual([]);
    //   expect(getAccidentalsOfKey(6, "flat")).toEqual([]);
    expect(getAccidentalsOfKey(7, "flat")).toEqual(dFlatMajor);
  });
});
describe("Merges Accidentals with original Key correctly", () => {
  expect(mergeAccidentalsWithKey(cMajorSharpenedKeys)).toEqual(
    cMajorKeySignature
  );
  expect(mergeAccidentalsWithKey(gMajorSharpenedKeys)).toEqual(
    gMajorKeySignature
  );
  expect(mergeAccidentalsWithKey(dMajorSharpenedKeys)).toEqual(
    dMajorKeySignature
  );
  expect(mergeAccidentalsWithKey(aMajorSharpenedKeys)).toEqual(
    aMajorKeySignature
  );
  expect(mergeAccidentalsWithKey(eMajorSharpenedKeys)).toEqual(
    eMajorKeySignature
  );
  expect(mergeAccidentalsWithKey(bMajorSharpenedKeys)).toEqual(
    bMajorKeySignature
  );
  expect(mergeAccidentalsWithKey(fSharpMajorSharpenedKeys)).toEqual(
    fSharpMajorKeySignature
  );
  expect(mergeAccidentalsWithKey(cSharpMajorSharpenedKeys)).toEqual(
    cSharpMajorKeySignature
  );
});
describe("Get Relative Minor for each Key", () => {});
