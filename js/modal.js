const Modal = document.querySelector(".modal");
const BtnsOpen = document.querySelectorAll(".modal-btn-open");
const BtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => Modal.classList.toggle("is-hidden");

BtnsOpen.forEach(btn => {
  btn.addEventListener("click", toggleModal);
});

if (BtnClose) {
  BtnClose.addEventListener("click", toggleModal);
}
