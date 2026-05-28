function calcular_cadena(cadena) {
    if (cadena === "") return 0;

    return cadena
        .split(",")
        .reduce((acumulado, actual) => acumulado + Number(actual), 0);
}

export default calcular_cadena;