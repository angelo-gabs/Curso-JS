function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r)
}

let rand = random (1, 50);
let contador = 0

while (rand !== 10 ) {
    rand = random(1, 50)
    contador++
    console.log(`${contador}-${rand}`)
}