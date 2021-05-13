
let rombas= ``;
star = "";

for (let i = 0; i < 21; i++) {
    let number = (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    star += `<spam style="color: #${number};">*</spam>`;
    rombas += `<div class="line">${star}</div>`;

}

for (var i = 21; i > 0; i--) {
    star = star.slice(0, -38);
   rombas += `<div class="line">${star}</div>`;
}

document.getElementById("rombas").innerHTML = rombas;

// Unmute code for special effects
// setTimeout(function(){
//     location.reload();
// }, 500)