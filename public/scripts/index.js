import { circleBtn, $resetBtn } from "./ui.js";
import { addJojoCard, resetAll } from "./logic.js";

circleBtn.addEventListener('click', addJojoCard);
$resetBtn.addEventListener('click', resetAll);
