export function stringToColor(input: string) {
    const avatarColors = ["#BD312D", "#469BC4", "#79676E", "#E7A83D", "#4CA89C"]

    const hashString = input
        .split('')
        .map((char) => char.charCodeAt(0))
        .reduce((a, b) => a + b, 0)

    return avatarColors[hashString % avatarColors.length];
}
