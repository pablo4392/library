const numbers = [8, 5, 6, 3, 10, 12, 15];
const users = [
    {
        name: 'Pablo',
        age: 28
    },
    {
        name: 'Helmik',
        age: 29
    },
    {
        name: 'Cristian',
        age: 29
    },
    {
        name: 'Abisai',
        age: 30
    }];

    //01---METODO FOREACH 
const first = {
    each: (array, funzione) => {
        for (let i=0; i<array.length; i++){
            funzione(array[i], i);
        }
    }
}
//ejecucion del metodo forEach
const example = first.each(numbers, (num, index) => {
    console.log(`La posición ${index} tiene el valor ${num}`)
})



    //02---METODO FILTER
const second = {
    myFilter: (array, funzione) => {
        const newArray = [];
        for (let i=0; i<array.length; i++) {
            if (funzione(array[i], i) === true) {
                newArray.push(array[i])
            }
        }
        return newArray;
    }
}
//ejecucion del metodo filter
const filteredElements = second.myFilter(numbers, non => non > 6);
console.log(filteredElements)



    //03---METODO MAP
const third = {
    mapMethod : (array, funzione) => {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[i] = funzione(array[i]);
        }
        return newArray;
    }
}
//ejecucion metodo map
function fn(x) {
    return x*2;
}
console.log(third.mapMethod(numbers, fn));



    //04---METODO FIND
const fourth = {
    myFind: (array, funzione) => {
        for (let i = 0; i < array.length; i ++) {
            if(funzione(array[i],i) === true) {
                return array[i];
            }
        }
    }
}
//ejecucion metodo find
const ansF = fourth.myFind(numbers, (num) => num >= 10);
console.log(ansF)



    //05---METODO FINDINDEX
const fiveth = {
    findIndexMeth: (array, funzione) => {
        for (let i = 0; i < array.length; i++) {
            if (funzione(array[i],i) === true) {
                return i 
            }
        }
    }
}
//ejecucion del metodo findIndex
const ansFi = fiveth.findIndexMeth(numbers, (num) => num >= 10);
console.log(ansFi)



    //06---METODO CONTAINS
const sixth = {
    containsMeth: (array, element) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == element) {
                return true;
            }
        }
        return false;
    }
}
//ejecucion del metodo contains/include
const ansIn = sixth.containsMeth(numbers, 6);
console.log(ansIn);



    //07---METODO PLUCK
const seventh = {
    pluckMeth: (object, propertyName) => {
        for (let i = 0; i < object.length; i++) {
            return object[i][propertyName];
        }
    }
}
//ejecucion del metodo pluck
console.log(seventh.pluckMeth(users, 'age'));