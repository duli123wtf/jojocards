import { JOJOCARDS } from "./constants.js";
import { $contentCards } from "./ui.js";
import templates from "./templates.js";

let count = 0;

export const addJojoCard = () => {
  // Validando límites
  if (count >= 9) {
    // Mostrar el modal
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Agregar evento de click al botón de cerrar
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    return;
  }
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
};

export const resetAll = () => {
    // Cerrar el modal
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    // Eliminar las tarjetas creadas
    $contentCards.innerHTML = '';
    // Reiniciar el contador
    count = 0;
};
