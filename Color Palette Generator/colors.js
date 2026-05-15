const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generatePalette);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createColorBox(color) {
    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color;
    box.innerText = color;

    box.addEventListener("click", function () {
        const selectedColor = this.style.backgroundColor;

       document.body.style.background=selectedColor;
        navigator.clipboard.writeText(selectedColor);

        alert("Background changed and color copied!");
    });

    return box;
}

function generatePalette() {
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const box = createColorBox(color);
        palette.appendChild(box);
    }
}

// أول ما الصفحة تفتح يولّد ألوان
generatePalette();