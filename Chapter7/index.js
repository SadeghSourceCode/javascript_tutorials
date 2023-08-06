// let global = 'global';

// function sum() {
//     console.log(global);

//     let functionVariable = 'function';
//     console.log(functionVariable);

//     if(true){
//         let blockVariable = 'block';
//         console.log(functionVariable);
//     }

// }

// sum();

// console.log(functionVariable);


// function logName(name) {
//     let ss = name;
//     console.log(ss);
// }

// logName('John');
// logName('Sadegh');


function sumWithInitialValue(initialValue) {
    let sum = initialValue;

    function add(value) {
        console.log(`P: ${sum} -- N: ${value}`);
        sum += value;
        console.log(sum);
    }

    return add;
}

const adder = sumWithInitialValue(5);
adder(3);
adder(4);
adder(9);