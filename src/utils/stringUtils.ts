export function stringToColor(input: string) {
  const avatarColors = ["#27364D", "#469BC4", "#008F7D", "#E7A83D", "#5E190A"];

  const hashString = input
    .split("")
    .map((char) => char.charCodeAt(0))
    .reduce((a, b) => a + b, 0);

  return avatarColors[hashString % avatarColors.length];
}
