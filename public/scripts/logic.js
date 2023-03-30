import { JOJOCARDS } from "./constants.js";
import { $contentCards, $resetBtn, $modal } from "./ui.js";
import templates from "./templates.js";

let count = 0;

export const addJojoCard = () => {
  // Validando límites
  if (count < JOJOCARDS.length) {
    // Creando card
    const $jojoCard = document.createElement('div');
    $jojoCard.id = `part${count + 1}`;
    $jojoCard.classList.add('jojocard');
    const currentJojo = JOJOCARDS[count];
    $jojoCard.innerHTML = templates.getJojoCard(currentJojo);
    // Agregando card
    $contentCards.appendChild($jojoCard);
    // Programando animación
    setTimeout(() => {
      $jojoCard.classList.add('show');
    }, 100);
    count++;
    return;
  }
  // Mostrar el modal
  const modal = document.getElementById('modal');
  // modal.classList.remove('modal-enter-active'); // Resetear la animación
  modal.classList.remove('hidden');

  // Agregar evento de click al botón de cerrar
  const closeBtn = modal.querySelector('.close');
  const backgroundModal = modal.querySelector(".modal-background");
  const handlerCloseModal = () => {
    modal.classList.add('hidden');
    console.log("sdasdsa");
  }
  closeBtn.addEventListener('click', handlerCloseModal);
  backgroundModal.addEventListener("click", handlerCloseModal);
};

export const resetAll = () => {
  // Cerrar el modal
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  // Eliminar las tarjetas creadas
  $contentCards.innerHTML = '';
  // Reiniciar el contador
  count = 0;
};

