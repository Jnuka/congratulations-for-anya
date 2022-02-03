let nextStageBlock = document.getElementsByClassName("puzzle-next-stage")[0];
nextStageBlock.style.visibility = "hidden";

let button = document.getElementById("next_button");


button.addEventListener("click", () => {
    nextStageBlock.style.visibility = "visible";
});