
let rombas= ``;
star = "";
//Didejanti iki 21
for (let i = 0; i < 21; i++) {
    star = "";
    x = i;
    for (x = i; x > 0; x--) {
        let number = (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
        star += `<spam style="color: #${number};">*</spam>`;
    }
    rombas += `<div class="line">${star}</div>`;
}
//Mazejanti iki 21
for (let i = 0; i < 21; i++) {
    star = "";
    x = i;
    for (x = i; x < 21; x++) {
        let number = (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
        star += `<spam style="color: #${number};">*</spam>`;
    }
    rombas += `<div class="line">${star}</div>`;
}

document.getElementById("rombas").innerHTML = rombas;

