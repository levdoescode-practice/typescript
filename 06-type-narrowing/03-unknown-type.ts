// Unlike type Any which allows you to do anything with it (but without TS type checking),
// type Unknown restricts you until you narrow down the type to a specific one.
// This is a good thing because it helps you avoid runtime errors.
function func31(data: unknown) {
    if (data && typeof data === "object" && "name" in data) {
        console.log(data.name);
    } else if (data && typeof data === "string") {
        console.log(data.toUpperCase());
    } else if (typeof data === "number") {
        console.log(data.toFixed(2));
    } else {
        console.log(data);
    }
}
