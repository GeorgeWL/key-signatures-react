import {
  createSimpleKeyObjects,
  getFlatsOfKey,
  getSharpsOfKey,
  generateKeySignatures
} from "./keySignatures";
const flatSymbol = "♭";
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
  const keyBFlat = keySignaturesArray.find((x) => x.name === `B${flatSymbol}`);
  const keyEFlat = keySignaturesArray.find((x) => x.name === `E${flatSymbol}`);
  const keyAFlat = keySignaturesArray.find((x) => x.name === `A${flatSymbol}`);
  const keyDFlat = keySignaturesArray.find((x) => x.name === `D${flatSymbol}`);
  const keyGFlat = keySignaturesArray.find((x) => x.name === `G${flatSymbol}`);
  const keyCFlat = keySignaturesArray.find((x) => x.name === `C${flatSymbol}`);
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
  it("Returns correct number of Flats for keys without Flat Notes", () => {
    sharpKeys.forEach((key) => {
      expect(key.flatsCount).toEqual(0);
    });
  });
  it("Returns correct number of Sharps for keys without Sharp Notes", () => {
    flatKeys.forEach((key) => {
      expect(key.sharpsCount).toEqual(0);
    });
  });
  it("Returns correct number of sharps for keys with Sharp Notes", () => {
    expect(keyC.sharpsCount).toEqual(0);
    expect(keyG.sharpsCount).toEqual(1);
    expect(keyD.sharpsCount).toEqual(2);
    expect(keyA.sharpsCount).toEqual(3);
    expect(keyE.sharpsCount).toEqual(4);
    expect(keyB.sharpsCount).toEqual(5);
    expect(keyFSharp.sharpsCount).toEqual(6);
    expect(keyCSharp.sharpsCount).toEqual(7);
  });
});
