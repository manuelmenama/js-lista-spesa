//dichiarazione delle variabili
const shopList = [
  'carbone per il gas e la siderurgia 6000000 t',
  'acciaio 2000000 t',
  'petrolio 7000000 t',
  'legno 1000000 t',
  'rame 150000 t',
  'nitrato di sodio 220000 t',
  'sali potassici 70000 t',
  'colofonia 25000 t',
  'gomma 22000 t',
  'toluolo 18000 t',
  'piombo 10000 t',
  'stagno 7000 t',
  'nikelio 5000 t',
  'molibdeno 600 t',
  'tungsteno 600 t',
  'zirconio 20 t',
  'titanio 400 t',
];

// in lista salvo l'elemento ul
const lista = document.querySelector('ul');

// for (let i = 0; i < shopList.length; i++){

//  let newListItem = document.createElement("li");
//  lista.append(newListItem);

//  newListItem.innerHTML = shopList[i];
  
// }

//condizione di partenza per il ciclo while
let c = 0;

//condizione di stop per il ciclo while
while (c < shopList.length) {

  //creo elementi li all'interno di ul
  let newListItem = document.createElement("li");
  lista.append(newListItem);
  //scrivo aoll'interno di ogni il
  newListItem.innerHTML = shopList[c];
  //incremento del contatore
  c++;
}