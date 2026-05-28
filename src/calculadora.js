function calcular_cadena(cadena) {
    if (cadena === "") return 0;

    let cadenaDeNumeros = cadena;
    let delimitadores = ",|-";

    if (cadena.startsWith("//[")) {
        const coincidencia = cadena.match(/^\/\/\[(.+?)\]\s*(.*)/);
        const delimitadorCrudo = coincidencia[1];
        
        const delimitadorEscapado = delimitadorCrudo.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        
        delimitadores += `|${delimitadorEscapado}`;
        cadenaDeNumeros = coincidencia[2];
    }

    return cadenaDeNumeros
        .split(new RegExp(delimitadores))
        .map(actual => Number(actual))
        .filter(numero => numero <= 1000)
        .reduce((acumulado, actual) => acumulado + actual, 0);
}

export default calcular_cadena;