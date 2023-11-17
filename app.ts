const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');
// function add(num1: number, num2: number)
// function add(num1: any, num2: any)

const numResults: Array<number> = [];
const textResults: string[] = [];

type NumorString = number | string;
type Result = { val: number; timestamp: Date };

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1: number | string, num2: number | String) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2; 
}

function printResult(resultobj: { val: number; timestamp: Date}) {
    console.log(resultobj.val);
}

// console.log(add(1, 6));
if (buttonElement) {
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = add(+num1, +num2);
        numResults.push(result);
        const stringResult = add(num1, num2);
        textResults.push(stringResult);
        
        // console.log(result);
        // console.log(stringResult);
        // console.log(add(true, false));
        printResult({ val: result as number, timestamp: new Date() });
        console.log(numResults, textResults);
    });

    const myPromise = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve('It worked!');
        }, 1000);
    });

    myPromise.then((result) => {
        console.log(result.split('w'));
    });
    
}

// console.log(add('1', '6'));