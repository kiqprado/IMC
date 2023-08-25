import { PopUp } from './popup.js'
import { AlertError } from './alert.js'

const form = document.querySelector('form')

export const inputWeight = document.getElementById('weight')
export const inputHeight = document.getElementById('height')

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const result = IMC(weight, height)

  const showError = notNumber(weight) || notNumber(height)

  if (showError) {
    AlertError.open()
    return
  }

  AlertError.close()

  PopUp.open()
  PopUp.message.innerText = `Seu IMC é de ${result}`
}

function notNumber(value) {
  return isNaN(value) || value == ''
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
