function calcular_cadena(cadena) {
    if (cadena === "") return 0;

    let cadenaDeNumeros = cadena;
    let delimitadores = ",|-";

    if (cadena.startsWith("//[")) {
        const finCabecera = cadena.lastIndexOf("]") + 1;
        const cabecera = cadena.substring(0, finCabecera);
        cadenaDeNumeros = cadena.substring(finCabecera).trim();

        const coincidencias = cabecera.matchAll(/\[(.*?)\]/g);
        
        for (const coincidencia of coincidencias) {
            const delimitadorCrudo = coincidencia[1];
            const delimitadorEscapado = delimitadorCrudo.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            delimitadores += `|${delimitadorEscapado}`;
        }
    }

    return cadenaDeNumeros
        .split(new RegExp(delimitadores))
        .map(actual => Number(actual))
        .filter(numero => numero <= 1000)
        .reduce((acumulado, actual) => acumulado + actual, 0);
}

export default calcular_cadena;