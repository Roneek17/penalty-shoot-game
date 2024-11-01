const result = document.getElementById("result");
const goalkeeper = document.getElementById("goalkeeper");
const ball = document.getElementById("ball");

const goalAreas = {
    "top-left": { x: "15%", y: "20%" },
    "top-center": { x: "50%", y: "20%" },
    "top-right": { x: "85%", y: "20%" },
    "bottom-left": { x: "15%", y: "50%" },
    "bottom-center": { x: "50%", y: "50%" },
    "bottom-right": { x: "85%", y: "50%" }
};

function randomGoalkeeperDive() {
    const keys = Object.keys(goalAreas);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const divePosition = goalAreas[randomKey];
    goalkeeper.style.left = divePosition.x;
    goalkeeper.style.top = divePosition.y;

    goalkeeper.src = "dive.png";

    return randomKey;
}

function shoot(area) {

    goalkeeper.src = "keeper.png";

    const goalkeeperPosition = randomGoalkeeperDive();
    const ballPosition = goalAreas[area];
    ball.style.left = ballPosition.x;
    ball.style.top = ballPosition.y;
    if (area === goalkeeperPosition) {
        result.textContent = "What a save!!";
    } else {
        result.textContent = "Gooooooaaaaal!!!!";
    }
}

