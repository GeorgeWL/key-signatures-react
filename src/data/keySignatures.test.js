import {
  createSimpleKeyObjects,
  getFlatsOfKey,
  getSharpsOfKey,
  generateKeySignatures
} from "./keySignatures";
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
  it("Returns correct number of Sharps for keys without Sharp Notes", () => {
    flatKeys.forEach((keySignature) => {
      expect(Object(keySignature).hasOwnProperty("sharpsCount")).toEqual(true);
      expect(keySignature?.sharpsCount).toEqual(0);
    });
  });
  it("Returns correct number of Flats for keys without Flat Notes", () => {
    sharpKeys.forEach((keySignature) => {
      expect(keySignature.hasOwnProperty("flatsCount")).toBe(true);
      expect(keySignature?.flatsCount).toEqual(0);
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
describe.skip("Get Flats of Each Key Signatures Correctly", () => {
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

  it("Returns Sharps as Notes for each Key with Sharps", () => {
    expect(getFlatsOfKey(keyC)).toEqual([]);
  });
  it("Returns Flats as Notes for each Key with Flats", () => {
    expect(getFlatsOfKey(keyC)).toEqual([]);
  });
});
