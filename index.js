const form = document.forms[0]
const rBox = document.getElementById('r-box')
const gBox = document.getElementById('g-box')
const bBox = document.getElementById('b-box')
const hexBox = document.querySelector('.hex-box')
const hexValue = document.getElementById('hex-value')
const convertBtn = document.getElementById('convert-btn')
const feedback = document.getElementById('feedback')
let rValue = ""
let gValue = ""
let bValue = ""

rBox.style.backgroundColor = "rgb(255, 0, 0)"
gBox.style.backgroundColor = "rgb(0, 255, 0)"
bBox.style.backgroundColor = "rgb(0, 0, 255)"
hexBox.style.backgroundColor = "rgb(255, 255, 255)"

// convert number into hex format
function numberToHex(num) {
  let hex = num.toString(16)
  console.log(hex)
  if (hex.length < 2) {
    hex = "0" + hex
  }
  return hex
}

// covert rgb to hex value
function rgbToHex(r, g, b) {
  let hex = numberToHex(r) + numberToHex(g) + numberToHex(b)
  return hex.toUpperCase()
}

function checkRgbValue(value) {
  if (Number.isInteger(value) && value >= 0 && value <= 255) {
    return true
  }
  return false
}

// check if the form is valid to summit
function checkForm() {
  let retVal = true
  let feedbackContent = ''
  if (!checkRgbValue(rValue)) {
    feedbackContent += 'r vlaue should be in the range 0 ~ 255! '
    rBox.previousElementSibling.value = ""
    retVal = false
  }
  if (!checkRgbValue(gValue)) {
    feedbackContent += 'g vlaue should be in the range 0 ~ 255! '
    gBox.previousElementSibling.value = ""
    retVal = false
  }
  if (!checkRgbValue(bValue)) {
    feedbackContent += 'b vlaue should be in the range 0 ~ 255! '
    bBox.previousElementSibling.value = ""
    retVal = false
  }
  feedback.innerText = feedbackContent
  return retVal
}

// monitor the input of r/g/b value
form.addEventListener('input', function (event) {
  let inputValue = event.target.value
  if (event.target.id === 'r-value') {
    rValue = Number(inputValue);
    rBox.style.backgroundColor = `rgb(${inputValue}, 0, 0)`
  } else if (event.target.id === 'g-value') {
    gValue = Number(inputValue)
    gBox.style.backgroundColor = `rgb(0, ${inputValue}, 0)`
  } else if (event.target.id === 'b-value') {
    bValue = Number(inputValue)
    bBox.style.backgroundColor = `rgb(0, 0, ${inputValue})`
  }
  // hexBox.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`
})

// submit the form
form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log(hexValue)
  if (checkForm() === true) {
    console.log('All pass.')
    hexValue.value = rgbToHex(rValue, gValue, bValue)
    hexBox.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`
  } else {
    console.log('No pass')
  }
})