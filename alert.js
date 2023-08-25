export const AlertError = {
  element: document.querySelector('.alert'),

  open() {
    AlertError.element.classList.add('open')
  },
  close() {
    AlertError.element.classList.remove('open')
  }
}
