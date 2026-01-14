let filesA = [];
let filesB = [];
let poolA = [];
let poolB = [];

const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const btn = document.getElementById("showBtn");

const imgA = document.getElementById("imgA");
const imgB = document.getElementById("imgB");

inputA.addEventListener("change", () => {
    filesA = Array.from(inputA.files);
    resetPools();
    checkReady();
});

inputB.addEventListener("change", () => {
    filesB = Array.from(inputB.files);
    resetPools();
    checkReady();
});

function resetPools() {
    poolA = [...filesA];
    poolB = [...filesB];
}

function checkReady() {
    btn.disabled = !(filesA.length && filesB.length);
}

btn.addEventListener("click", () => {
    if (poolA.length === 0) poolA = [...filesA];
    if (poolB.length === 0) poolB = [...filesB];

    const fileA = extractRandom(poolA);
    const fileB = extractRandom(poolB);

    imgA.src = URL.createObjectURL(fileA);
    imgB.src = URL.createObjectURL(fileB);
});

function extractRandom(pool) {
    const index = Math.floor(Math.random() * pool.length);
    return pool.splice(index, 1)[0];
}
