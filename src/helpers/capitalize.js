export function capitalize(string) {
  return string
    .split("")
    .map((character, index) =>
      index === 0 ? character.toUpperCase() : character
    )
    .join("");
}
export function titleCase(string) {
  return string
    .split(/ /g)
    .map((word) => capitalize(word))
    .join(" ");
}
