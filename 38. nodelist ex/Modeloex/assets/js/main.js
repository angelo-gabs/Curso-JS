const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGround = estilosBody.backgroundColor

for(let p of ps ) {
    p.style.backgroundColor = backGround
    p.style.color = '#FFFFFF' 
}