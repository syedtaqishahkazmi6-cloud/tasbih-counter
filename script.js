const tasbeehDisplay = document.getElementById("tasbeeh-display");
const tasbeehRef = db.ref("tasbeeh/count");

// Load saved count
tasbeehRef.once("value").then(snapshot => {
    if (snapshot.exists()) {
        tasbeehDisplay.textContent = snapshot.val();
    }
});

// Increment tasbeeh
function incrementTasbeeh() {
    let current = parseInt(tasbeehDisplay.textContent);
    current += 1;
    tasbeehDisplay.textContent = current;
    tasbeehRef.set(current);
}

// Clear tasbeeh
function clearTasbeeh() {
    tasbeehDisplay.textContent = "0";
    tasbeehRef.set(0);
}