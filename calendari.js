//aquesta funció ens retornarà el coeficient A, que serà el segle de la data introduida
function calcularSegle (any) {
    if (any>=1700 && any<=1799) {
        return 5;
    } else if (any>=1800 && any<=1899) { 
        return 3;
    } else if (any>=1900 && any<=1999) {
        return 1;
    } else if (any>=2000 && any<=2099) {
        return 0;
    } else if (any>=2100 && any<=2199) {
        return -2;
    } else if (any>=2200 && any<=2299) {
        return -4;
    }
    return calcularSegle;
}

//aquesta funció ens retornarà el coeficient B, que serà l'any de la data introduida
function calcularAny (any) {
    any = any.toString ();
    var x = parseInt (any.substr(-2));
    var y = Math.floor (x/4);
    valorAny = x+y;
    return valorAny;   
}

//aquesta funció ens retornarà el coeficient C, que ens indicarà si l'any introduit és bixest o no
function anyBixest (any, mes) {
var CalcularAnyBixest;
var numMes;
var anyBixest;
var multipleDe4 = (any % 4 == 0)
var multipleDe100 = (any % 100 == 0)
var multipleDe400 = (any % 400 == 0)

if (multipleDe4 && (!multipleDe100 || multipleDe400)) {
    anyBixest = true;
} else {
    anyBixest = false;
}

if (mes.substr(0,3)=="gener") {
    numMes=1;
} else if (mes.substr(0,3)=="febrer") {
    numMes=2;
}

if (anyBixest && (numMes==1 || numMes==2)) {
    CalcularAnyBixest = -1;
} else {
    CalcularAnyBixest = 0;
}
return CalcularAnyBixest;
}

//aquesta funció ens retornarà el coeficient D, que serà el mes de la data introduida
function calcularMes (mes) {
    var valorMes;
    mes = mes.toString();
    mes = mes.toLowerCase();
    if (mes.substr(0,3) == "gen") {
        valorMes = 6;
    } else if (mes.substr(0,3) == "feb") {
        valorMes = 2;
    } else if (mes.substr(0,3) == "mar") {
        valorMes = 2;
    } else if (mes.substr(0,3) == "abr") {
        valorMes = 5;
    } else if (mes.substr(0,3) == "mai") {
        valorMes = 0;
    } else if (mes.substr(0,3) == "jun") {
        valorMes = 3;
    } else if (mes.substr(0,3) == "jul") {
        valorMes = 5;
    } else if (mes.substr(0,3) == "ago") {
        valorMes = 1;
    } else if (mes.substr(0,3) == "set") {
        valorMes = 4;
    } else if (mes.substr(0,3) == "oct") {
        valorMes = 6;
    } else if (mes.substr(0,3) == "nov") {
        valorMes = 2;
    } else if (mes.substr(0,3) == "des") {
        valorMes = 4;
    }
    return valorMes;
}

//aquesta funció ens retornarà el coeficient E, que serà el dia en qüestió
function calcularDia (dia) {
    var valorDia = dia;
    return valorDia;
}

//aquesta funció suma tots els coeficients anteriors i, després, 
//calcula el residu obtingut de la divisió de la suma entre 7
//el resultat final serà un nombre (coprès entre 0 i 6) 
function calcularAlgoritme (dia, mes, any) {
    var A = calcularSegle (any);
    var B = calcularAny (any);
    var C = anyBixest (any, mes);
    var D = calcularMes (mes);
    var E = calcularDia (dia);
    
    var sumaCoeficients = A + B + C + D + E;
    
    var resultat = sumaCoeficients;
    
    return resultat%7;    
}
