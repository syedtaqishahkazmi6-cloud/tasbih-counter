let count = 0;

function increment() {
    count += 1;
    document.getElementById("counter-screen").textContent = count;
}

function reset() {
    count = 0;
    document.getElementById("counter-screen").textContent = count;
}