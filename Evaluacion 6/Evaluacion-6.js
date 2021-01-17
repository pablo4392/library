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

    
_ = {
    //01---METODO FOREACH 
    each: (array, funzione) => {
        for (let i=0; i<array.length; i++){
            funzione(array[i], i);
        }
    },
    //02---METODO FILTER
    myFilter: (array, funzione) => {
        const newArray = [];
        for (let i=0; i<array.length; i++) {
            if (funzione(array[i], i) === true) {
                newArray.push(array[i])
            }
        }
        return newArray;
    },
    //03---METODO MAP
    mapMethod : (array, funzione) => {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[i] = funzione(array[i]);
        }
        return newArray;
    },
    //04---METODO FIND
    myFind: (array, funzione) => {
        for (let i = 0; i < array.length; i ++) {
            if(funzione(array[i],i) === true) {
                return array[i];
            }
        }
    },
    //05---METODO FINDINDEX
    findIndexMeth: (array, funzione) => {
        for (let i = 0; i < array.length; i++) {
            if (funzione(array[i],i) === true) {
                return i 
            }
        }
    },
    //06---METODO CONTAINS
    containsMeth: (array, element) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == element) {
                return true;
            }
        }
        return false;
    },
    //07---METODO PLUCK
    pluckMeth: (object, propertyName) => {
        for (let i = 0; i < object.length; i++) {
            return object[i][propertyName];
        }
    }
}

//ejecucion del metodo forEach
const example = _.each(numbers, (num, index) => {
    console.log(`La posición ${index} tiene el valor ${num}`)
})

//ejecucion del metodo filter
const filteredElements = _.myFilter(numbers, non => non > 6);
console.log(filteredElements)

//ejecucion metodo map
function fn(x) {
    return x*2;
}
console.log(_.mapMethod(numbers, fn));

//ejecucion metodo find
const ansF = _.myFind(numbers, (num) => num >= 10);
console.log(ansF)

//ejecucion del metodo findIndex
const ansFi = _.findIndexMeth(numbers, (num) => num >= 10);
console.log(ansFi)

//ejecucion del metodo contains/include
const ansIn = _.containsMeth(numbers, 6);
console.log(ansIn);
    
//ejecucion del metodo pluck
console.log(_.pluckMeth(users, 'age'));