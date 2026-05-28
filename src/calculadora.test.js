import calcular_cadena from "./calculadora.js";

describe("Calcular", () => {
  it("deberia devolver 0", () => {
    expect(calcular_cadena(" ")).toEqual(0);
  });
});