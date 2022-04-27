const precioOriginal = 100;
const descuento =15;
//formula para el precio con descuento
const porcentajePrecioConDescuento = 100 - descuento ;
//formula que toma dos variables 
//la primera que se puede cambiar 
//la segunda ques es el resultado de la resta con el descuento


// funcion que toma dos valores para , sus parametros lo definen
function precioWithDescount1(precio ,descuento){
  return (precio * (100 - descuento))/100 + "% Dsct"
}

//creando una lista de cupones validos para aplicarle los descuentos solucion #1
//creando una lista de objetos con cupones y su descuentos respectivos #3
const cupones = [{
  name:"lunes",
  discount:30,
},{
  name:"martes",
  discount:20
},{
  name:"miercoles",
  discount:10
}];
//funcio que toma el evento onclik para activar la fucntion de calculate descount
function calculateDescount(){
  const prices = document.getElementById("precio");
  const coupon = document.getElementById("coupon");
  const resultbox = document.getElementById("resultado");
  const priceValue = prices.value;
  const couponValue = coupon.value;
  
  // let descount = 0
  //forma de leerlo -- si dentro de los valores  de couponValue cumple el caso que coincide con el "case" cupones[0] entonces descount será igual a 30
  // switch (couponValue) {
  //   case cupones[0]:
  //     descount = 30
  //     break;
  //   case cupones[1]:
  //     descount = 20
  //     break;
  //   case cupones[3]:
  //     descount = 10
  //     break;  
  //   default:
  //     alert(`porfavor ingrese uno de los cupones \n * ${cupones[0]}\n * ${cupones[1]}\n * ${cupones[2]}\n`)
  //     break;
  // }
//SOLUCION #2  manejando la legibilidad con error first
//forma de leerlo --si en cuponValues esta incluido(o ingresan ) un no cupon(un string que no pertenesca a la lista de los cupones)  entonces 
  // let descuento = 0
  // if (!cupones.includes(couponValue)){
  //     alert(`porfavor ingrese uno de los cupones \n* ${cupones[0]}\n* ${cupones[1]}\n* ${cupones[2]}  `)
  //   }else if (couponValue == cupones[0]){
  //     descuento =30
  //   }else if(couponValue == cupones[1]){
  //     descuento =20
  //   }else if(couponValue == cupones[2]){
  //     descuento =10
  //   }    
//  SOLUCION #3 array y condicionales
//funcion para comparar
  function discountEqaulizaer(coupon){
    return coupon.name === couponValue
  }
  const couponDescon = cupones.find(discountEqaulizaer)
  
  if(!couponDescon){
    alert(`porfavor ingrese uno de los cupones \n* ${cupones[0].name}\n* ${cupones[1].name}\n* ${cupones[2].name}`)
  }else{
    const descuento = couponDescon.discount
    const precioWithDescount = precioWithDescount1(priceValue,descuento)
    resultbox.innerText = precioWithDescount;
  }
}   