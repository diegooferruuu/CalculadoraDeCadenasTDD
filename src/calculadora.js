function calcular_cadena(cadena) {
    if (cadena === "") return 0;

    const separadores = /[,-]/;
    
    return cadena
        .split(separadores)
        .reduce((acumulado, actual) => acumulado + Number(actual), 0);
}

export default calcular_cadena;