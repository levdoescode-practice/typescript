const button2 = document.createElement("button");

button2.addEventListener("click", handleClick2);

function handleClick2(e: MouseEvent) {
    console.log(e.target); // undefined
}
