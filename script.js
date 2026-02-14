let steps = [
    "stem",
    "leaf1",
    "leaf2",
    "petal1",
    "petal2",
    "petal3",
    "center"
];

let i = 0;

function drawStep() {

    if (i < steps.length) {

        document.getElementById(steps[i]).style.opacity = "1";
        i++;

        setTimeout(drawStep, 600);

    } else {

        document.getElementById("message").innerHTML =
        "This flower is for you po ❤️";

    }
}

drawStep();
