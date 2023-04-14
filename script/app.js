function playSound(e){
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`)
  const key = document.querySelector(`dic[data-key= "${e.keyCode}"]`)
  if(!audio) return; 
  key.classList.add('playing')
}

window.addEventListener("keydown", playSound)