import { circleBtn, $resetBtn } from "./ui.js";
import { addJojoCard, resetAll } from "./logic.js";

const init = () => {
    circleBtn.addEventListener('click', addJojoCard);
    $resetBtn.addEventListener('click', resetAll);
}
window.addEventListener("DOMContentLoaded", init);