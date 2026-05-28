import calcular_cadena from "./calculadora.js";

describe("Calcular", () => {
  it("deberia devolver 0", () => {
    expect(calcular_cadena("")).toEqual(0);
  });
  it("deberia devolver el numero si la cadena tiene un solo numero", () => {
    expect(calcular_cadena("5")).toEqual(5);
    expect(calcular_cadena("12")).toEqual(12);
  });
});