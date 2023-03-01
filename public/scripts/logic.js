import { jojoCards } from "./constants.js";
import { contentCards } from "./ui.js";

let count = 0;
export const addJojoCard = () => {

  if (count >= 9) {
    alert('Solo existen nueve protagonistas por ahora');
    return;
  }

  const jojoCard = document.createElement('div');
  jojoCard.id = `part${count + 1}`;
  jojoCard.classList.add('jojocard');

  const jojoName = document.createElement('span');
  jojoName.innerText = jojoCards[count].name;

  const jojoImg = document.createElement('img');
  jojoImg.src = jojoCards[count].img;
  jojoImg.alt = jojoCards[count].name;

  jojoCard.appendChild(jojoName);
  jojoCard.appendChild(jojoImg);

  contentCards.appendChild(jojoCard);

  count++;

  setTimeout(() => {
    jojoCard.classList.add('show');
  }, 100);
};