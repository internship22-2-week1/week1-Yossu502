function multiplicaionYDivision(Lista) {
    for (let index = 0; index < Lista.length; index++){
        for (let index = 0; index < Lista.length; index++) {
            if(Lista[index] === '*' || Lista[index] === '/'){
                if (Lista[index] === '*') {
                    console.log(`${Lista[index-1]} * ${Lista[index+1]}`);
                    Lista[index] = (parseFloat(Lista[index-1]) * parseFloat(Lista[index+1])).toFixed(2)
                    Lista.splice((index-1), 1)
                    Lista.splice((index), 1)
                    
                }
                if(Lista[index] === '/'){
                    console.log(`${Lista[index-1]} / ${Lista[index+1]}`);
                    Lista[index] = (parseFloat(Lista[index-1]) / parseFloat(Lista[index+1])).toFixed(2)
                    Lista.splice((index-1), 1)
                    Lista.splice((index), 1)
                }
            }
        }
    }
    return Lista 
}


function suma(Lista) {
    for (let index = 0; index < Lista.length; index++){
        for (let index = 0; index < Lista.length; index++) {
            if(Lista[index] === '-' || Lista[index] === '+'){
                if (Lista[index] === '+') {
                    console.log(`${Lista[index-1]} + ${Lista[index+1]}`);
                    Lista[index] = (parseFloat(Lista[index-1]) + parseFloat(Lista[index+1])).toFixed(2)
                    Lista.splice((index-1), 1)
                    Lista.splice((index), 1)
                    
                }
                if(Lista[index] === '-'){
                    console.log(`${Lista[index-1]} - ${Lista[index+1]}`);
                    Lista[index] = (parseFloat(Lista[index-1]) - parseFloat(Lista[index+1])).toFixed(2)
                    Lista.splice((index-1), 1)
                    Lista.splice((index), 1)
                }
            }
        }
    }
    return Lista 
}


function realizarOperaciones(Lista) {
    let listaFinal = []
    listaFinal = multiplicaionYDivision(Lista)
    listaFinal = suma(listaFinal)
    return listaFinal[0]
}

function cicloParentesis(string) {
    const indices = [];
    const posicion = []
    for(var i = 0; i < string.length; i++) {
            if (string[i] === '('){
                indices.push(i)
            } 
    }
	return indices.length;
}


function hayParentesis(string) {
    let Lista =[]
    let regExp = /\(([^)]+)\)/
    let matches = regExp.exec(string);
    for (let index = 0; index < matches[1].length; index++) {
        Lista.push(matches[1][index])
    }
    let numero = parseInt(realizarOperaciones(Lista))
    let stringNuevo  = string.replace(matches[0], (String(numero)))
    return String(stringNuevo)
}


function main() {
    let string = '4-7+8+9/2*3'
    let Lista = []

    console.log(`La expresion inicial es ${string}`);
    if (string.length > 20) {
        console.log('La cadena introducida tiene un tamaño mayor a 20 caracteres, introduzca uno menor');
    }else{
        let nuevoString
        if (cicloParentesis(string)>0) {
            nuevoString = hayParentesis(string)
            for (let index = 0; index < nuevoString.length; index++) {
                Lista.push(nuevoString[index])
            }
            console.log(`La expresion sin parentesis es: ${nuevoString}`);
            let final = realizarOperaciones(Lista)
            console.log(final);
        }else{
            for (let index = 0; index < string.length; index++) {
                Lista.push(string[index])
            }
            let final = realizarOperaciones(Lista)
            console.log(`El resultado final es de: ${final}`);
        }
        
    }
}

main()

