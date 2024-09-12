const button = document.createElement("button");

button.addEventListener("click", (e) => {
    console.log(e.target);
});

button.addEventListener("click", handleClick);

function handleClick(e) {
    console.log(e.target); // undefined
}
