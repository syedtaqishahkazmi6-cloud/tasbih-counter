document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("tasbeeh-display");
    const countBtn = document.getElementById("count-btn");
    const clearBtn = document.getElementById("clear-btn");

    let count = 0;

    countBtn.addEventListener("click", () => {
        count += 1;
        display.textContent = count;
    });

    clearBtn.addEventListener("click", () => {
        count = 0;
        display.textContent = count;
    });
});