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


let weg = document.querySelector('a:nth-of-type(8)')

weg.addEventListener('click', wegHandler)

function wegHandler(){
  weg.classList.toggle('weg-flow')
}



let big = document.querySelector('a:nth-of-type(6)')

big.addEventListener('mouseover', () => {
  big.classList.add('scale');
});

big.addEventListener('mouseleave', () => {
  big.classList.remove('scale');
});



let bottom = document.querySelector('a:nth-of-type(19)')

bottom.addEventListener('click', bottomHandler)

function bottomHandler(){
  bottom.classList.toggle('bottom')
}



let wobble = document.querySelector('a:nth-of-type(11)')

wobble.addEventListener('mouseover', () => {
  wobble.classList.add('wobble');
});

wobble.addEventListener('mouseleave', () => {
  wobble.classList.remove('wobble');
});



let onder = document.querySelector('a:nth-of-type(14)')

onder.addEventListener('click', onderHandler)

function onderHandler(){
  onder.classList.toggle('onder')
}



let kleur = document.querySelector('a:nth-of-type(16)')

kleur.addEventListener('click', kleurHandler)

function kleurHandler(){
  kleur.classList.toggle('kleur')
}



let key = document.querySelector('a:nth-of-type(10)')

addEventListener('keydown', function(e) {
  if (e.key == "z" && e.metaKey == true) {
    console.log("doe iets");
  }
})