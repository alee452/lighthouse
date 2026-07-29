//recording button
const click = document.getElementById("click");
const innerCircle = document.getElementById("innerCircle");
const ring = document.getElementById("ring");

click.addEventListener("mouseenter", () => {
    innerCircle.style.fill = "#6B8BA4";
    innerCircle.style.stroke = "#6B8BA4";
    ring.style.stroke = "#6B8BA4";
});

click.addEventListener("mouseleave", () => {
    innerCircle.style.fill = "#9DA3B0";
    innerCircle.style.stroke = "#9DA3B0";
    ring.style.stroke = "#9DA3B0";
});

//playing button
const clickPlay = document.getElementById("clickPlay");
const buttonPlay = document.getElementById("buttonPlay");
const Vector1 = document.getElementById("Vector1");
const Vector2 = document.getElementById("Vector2");

clickPlay.addEventListener("mouseenter", () => {
    buttonPlay.style.stroke = "#6B8BA4";
    Vector1.style.stroke = "#6B8BA4";
    Vector2.style.stroke = "#6B8BA4";
});

clickPlay.addEventListener("mouseleave", () => {
    buttonPlay.style.stroke = "#9DA3B0";
    Vector1.style.stroke = "#9DA3B0";
    Vector2.style.stroke = "#9DA3B0";
});

//pause button
const clickPause = document.getElementById("clickPause");
const ringPause = document.getElementById("ringPause");
const pause = document.getElementById("pause");


clickPause.addEventListener("mouseenter", () => {
    pause.style.fill = "#6B8BA4";
    ringPause.style.stroke = "#6B8BA4";
});

clickPause.addEventListener("mouseleave", () => {
    pause.style.fill = "#9DA3B0";
    ringPause.style.stroke = "#9DA3B0";
});

//delete button
const clickTrash = document.getElementById("clickTrash");
const trash = document.getElementById("trash");

clickTrash.addEventListener("mouseenter", () => {
    trash.style.stroke = "#6B8BA4";
});

clickTrash.addEventListener("mouseleave", () => {
    trash.style.stroke = "#9DA3B0";
});


const playSVG = document.getElementById("playSVG");
const pauseSVG = document.getElementById("pauseSVG");

document.getElementById("clickPlay").addEventListener("click", () => {
    playSVG.classList.add("hidden");
    pauseSVG.classList.remove("hidden");

    pause.style.fill = "#6B8BA4";
    ringPause.style.stroke = "#6B8BA4";
});

document.getElementById("clickPause").addEventListener("click", () => {
    pauseSVG.classList.add("hidden");
    playSVG.classList.remove("hidden");

    buttonPlay.style.stroke = "#6B8BA4";
    Vector1.style.stroke = "#6B8BA4";
    Vector2.style.stroke = "#6B8BA4";
});



//sidebar buttons
const newChatButtong = document.getElementById("newChatButton");
const newChatID = document.getElementById("newChatID");
const messageSectionID = document.getElementById("messageSectionID");

newChatButtong.addEventListener("click", () => {
    newChatID.style.display = "flex";
    messageSectionID.style.display = "none";
});