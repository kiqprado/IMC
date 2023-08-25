import { inputHeight, inputWeight } from './script.js'
import { Table } from './table.js'

export const PopUp = {
  alert: document.querySelector('.popup'),
  message: document.querySelector('h2'),
  closeBtn: document.getElementById('close'),

  open() {
    PopUp.alert.classList.add('open')
  },
  close() {
    PopUp.alert.classList.remove('open')
  }
}

PopUp.closeBtn.onclick = () => {
  PopUp.close()
  inputHeight.value = ''
  inputWeight.value = ''
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    PopUp.close()
    inputHeight.value = ''
    inputWeight.value = ''
  }
})

function openTable() {
  Table.open()
}

imcTable.addEventListener('click', openTable)
