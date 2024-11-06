export function cc(...classes: (string | boolean )[]): string {
    return classes.filter((c) => typeof c === "string").join(" ");
}
