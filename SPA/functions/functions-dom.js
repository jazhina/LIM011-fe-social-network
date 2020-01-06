// Modal para foto
export const closeModal = (modal) => {
  modal.style.display = 'none';
};
export const showModal = (contenido, foto, modal) => {
  contenido.src = '';
  contenido.src = foto;
  modal.style.display = 'flex';
};
export const closeGrey = (modal) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
