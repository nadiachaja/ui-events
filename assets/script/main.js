let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}




let bibber = document.querySelector('a:nth-of-type(2)')

bibber.addEventListener('click', bibberHandler)
bibber.addEventListener('animationend', bibberHandler)

function bibberHandler(){
  bibber.classList.toggle('bibberen')
}



let rotate = document.querySelector('a:nth-of-type(9)')

rotate.addEventListener('click', rotateHandler)

function rotateHandler(){
  rotate.classList.toggle('rotate')
}



let grote = document.querySelector('a:nth-of-type(20)')

grote.addEventListener('click', widthHandler)

function widthHandler(){
grote.classList.toggle('width')
}


let move = document.querySelector('a:nth-of-type(17)')

move.addEventListener('click', squshHandler)

function squshHandler(){
  move.classList.toggle('sqush')
  
}


let shift = document.querySelector('a:nth-of-type(8)')

 



