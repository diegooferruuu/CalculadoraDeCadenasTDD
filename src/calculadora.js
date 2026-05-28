function calcular_cadena(cadena) {
    if (cadena === "") return 0;

    let cadenaDeNumeros = cadena;
    let patronSeparadores = /,|-/;

    if (cadena.startsWith("//[")) {
        const coincidencia = cadena.match(/^\/\/\[(.+?)\]\s*(.*)/);
        const delimitadorPersonalizado = coincidencia[1];
        cadenaDeNumeros = coincidencia[2];
        
        patronSeparadores = new RegExp(`,|-|${delimitadorPersonalizado}`);
    }

    return cadenaDeNumeros
        .split(patronSeparadores)
        .reduce((acumulado, actual) => acumulado + Number(actual), 0);
}

export default calcular_cadena;