let mousedownID = -1

function mousedown(event) {
  if (mousedownID == -1) mousedownID = setInterval(whilemousedown, 100)
}

function mouseup(event) {
  if (mousedownID != -1) {
    clearInterval(mousedownID)
    mousedownID = -1
    counter = 0
  }
}

let counter = Number()

function whilemousedown() {
  counter += 1
  if (counter === 70) {
    logoDiv.classList.add('hidden')
    haroldDiv.classList.remove('hidden')
  }
}

let logoDiv = document.querySelector('.logo')
let haroldDiv = document.querySelector('.harold')

logoDiv.addEventListener('mousedown', mousedown)
logoDiv.addEventListener('mouseup', mouseup)
logoDiv.addEventListener('mouseout', mouseup)
