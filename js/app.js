
document.querySelector('.area').addEventListener('keyup',function () {
  let text = document.getElementById('area').value
  document.getElementById('iframe').srcdoc = text
})