const precioOriginal = 100;
const descuento =15;
//formula para el precio con descuento
const porcentajePrecioConDescuento = 100 - descuento ;
//formula que toma dos variables 
//la primera que se puede cambiar 
//la segunda ques es el resultado de la resta con el descuento
// const pricewithDescount = (precioOriginal * porcentajePrecioConDescuento)/100
function precioWithDescount1(precio ,descuento){
  return (precio * (100 - descuento))/100
}


function calculateDescount(){
  const prices = document.getElementById("precio");
  const descounts = document.getElementById("descount");
  const result = document.getElementById("resultado");
  const value1 = prices.value;
  const value2 = descounts.value;
  const precioWithDescount = precioWithDescount1(value1,value2)
  result.innerText = `Precio con dsct. incluido es ${precioWithDescount}`
}   