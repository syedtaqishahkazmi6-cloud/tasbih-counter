// ✅ Firebase setup
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ DOM elements
document.addEventListener("DOMContentLoaded", () => {
    const tasbeehDisplay = document.getElementById("tasbeeh-display");
    const countBtn = document.getElementById("count-btn");
    const clearBtn = document.getElementById("clear-btn");
    const lightBtn = document.getElementById("light-btn");
    const tasbeehRef = db.ref("tasbeeh/count");

    // Load saved count
    tasbeehRef.once("value").then(snapshot => {
        if (snapshot.exists()) {
            tasbeehDisplay.textContent = snapshot.val();
        }
    });

    // Count button
    countBtn.addEventListener("click", () => {
        let current = parseInt(tasbeehDisplay.textContent);
        current += 1;
        tasbeehDisplay.textContent = current;
        tasbeehRef.set(current);
    });

    // Clear button
    clearBtn.addEventListener("click", () => {
        tasbeehDisplay.textContent = "0";
        tasbeehRef.set(0);
    });

    // Lightning button
    lightBtn.addEventListener("click", () => {
        lightBtn.classList.add("glow");
        setTimeout(() => {
            lightBtn.classList.remove("glow");
        }, 500);
    });
});