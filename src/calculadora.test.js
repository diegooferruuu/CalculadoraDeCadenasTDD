import calcular_cadena from "./calculadora.js";

describe("Calcular", () => {
  it("deberia devolver 0 para cadena vacia", () => {
    expect(calcular_cadena("")).toEqual(0);
  });

  it("deberia devolver el numero si la cadena tiene un solo numero", () => {
    expect(calcular_cadena("5")).toEqual(5);
  });

  it("deberia sumar dos numeros separados por coma", () => {
    expect(calcular_cadena("1,2")).toEqual(3);
  });

  it("deberia sumar varios numeros separados por coma", () => {
    expect(calcular_cadena("1,2,3")).toEqual(6);
  });

  it("deberia permitir el guion como separador mixto", () => {
    expect(calcular_cadena("1-2,3")).toEqual(6);
  });

  it("deberia soportar delimitadores personalizados", () => {
    expect(calcular_cadena("//[;] 6,3-2;1")).toEqual(12);
  });

  it("deberia ignorar los numeros mayores a 1000", () => {
    expect(calcular_cadena("2,1001")).toEqual(2);
    expect(calcular_cadena("1000,5")).toEqual(1005);
    expect(calcular_cadena("//[;] 1002;3-1")).toEqual(4);
  });
});