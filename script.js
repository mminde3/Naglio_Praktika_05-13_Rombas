

let rombas= ``;

star = "";

for (let i = 0; i < 21; i++) {
    star += '*';
    rombas += `<div class="line">${star}</div>`;
    //color.innerHTML = "#" + randomColor;
}

for (var i = 21; i > 0; i--) {
    star = star.substring(1);
    rombas += `<div class="line">${star}</div>`;
}

document.getElementById("rombas").innerHTML = rombas;


