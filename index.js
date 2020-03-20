const _ = require('lodash');

const saludos = [
"Salut! desde Francia",
"Hallo! desde Alemania",
"Ciao! desde Italia",
"Ahoj! desde Republica Checa",
"YAH sahs! desde Grecia",
"Bog! desde Croacia",
"Hallo! desde Holanda",
"Szia! desde Hungria",
"Hej! desde Suecia",
"Czesc! desde Polonia",
"¡Hola! desde Mexico",
"Ní háo desde China",
"Kon'nichiwa desde Japon",
"Annyeonghaseyo desde Korea",
"Shalom! desde Israel",
"Sàwàddee ká, sàwàddee kráb! desde Tailandia",
"Merhaba! desde Turquia",
"Zdrahvdz-vuee-tyeh! desde Rusia",
"Marhaba! desde Egipto",
"Hujambo! desde Kenya",
"Olá! desde Brasil"
];

function randomSaludo() {
    return _.sample(saludos);
}
  
module.exports = {
    randomSaludo,
};