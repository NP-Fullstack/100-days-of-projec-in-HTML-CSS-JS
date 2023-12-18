// Variables
// Puntero Hora
let hr = document.getElementById('hour-id');
// Puntero minuto
let mn = document.getElementById('min-id');
// Puntero segundo
let sect = document.getElementById('sec-id');
// Deg
let deg = 6;


// Fucion del Reloj

setInterval(() =>{
    let day =  new  Date();
    let hh =  day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss  = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sect.style.transform = `rotateZ(${ss}deg)`;

})
 