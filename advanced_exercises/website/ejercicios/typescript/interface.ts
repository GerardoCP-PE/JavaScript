enum Color {
    rojo = "Rojo",
    verde = "verde"
}
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 4,
  //color: Color.rojo,
};

function area(r: Rectangulo): number{
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);
rect.toString = function(){
    return this.color? `Tengo un rectangulo de ${areaRect} de color ${this.color}` : `Tengo un rectangulo de ${areaRect}`;  
}
console.log(rect.toString());

