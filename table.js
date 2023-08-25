export const Table = {
  inTable: document.querySelector('.imcClass'),
  closeTable: document.getElementById('tableClose'),

  open() {
    Table.inTable.classList.add('open')
  },
  close() {
    Table.inTable.classList.remove('open')
  }
}

Table.closeTable.onclick = () => {
  Table.close()
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    Table.close()
  }
})
