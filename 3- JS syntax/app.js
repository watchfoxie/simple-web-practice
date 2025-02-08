document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connection-state-container').innerHTML = 'HTML document is completly loaded and can be manipulated';

    const PI = 3.14159;

    // Circle area
    let radius = 2;
    let circle = PI * radius ** 2;

    /*JS Data types*/
    // Number
    let numb = 10;
    let trueNumb = 9;
    
    // String
    let str = 'Hello world!'

    // Boolean
    let isTrue = true;
    let isFalse = false;

    // Undefined
    let x;

    // Null
    let y = null;

    // Object
    let obj = {name: 'Andrian', age: 25 };

    // Array
    let digits = [0,1,2,3,4,5,6,7,8,9];

    // Function
    let func = function(){
        return 'Hello dear!';
    }

    // Provide devs and user with information
    console.log(`If the radius is ${radius}, then the circle area is ${circle}`);
    console.log(`Number ${numb}, and ${numb} number ${trueNumb}!`);
    console.log(`String message is "${str}"`);
    console.log(`We have boolean ${isTrue} and ${isFalse}`)
    console.log(`Here we have ${x} variable`)
    console.log(`Here we have ${y} variable`)
    console.log(`Meet my friend ${obj.name}, ${obj.age} years old`)
    console.log(`Arabic digits ${digits}`)
    console.log(`Every time i come home, i want to hear: ${func()}`)
    
    document.getElementById('circle-area-description').innerHTML = `Data Type (${typeof radius} and ${typeof circle}) If the radius is ${radius}, then the circle area is ${circle}`;
    document.getElementById('type-number').innerHTML = `Data Type: (${typeof numb}) Number ${numb}, and ${numb} number ${trueNumb}!`;
    document.getElementById('type-string').innerHTML = `Data Type: (${typeof str}) The message for the user is ${str}`;
    document.getElementById('type-boolean').innerHTML = `Data Type: (${typeof isTrue}) We have boolean ${isTrue} and ${isFalse}`;
    document.getElementById('type-undefined').innerHTML = `Data Type: (${typeof x}) Here we have ${x} variable`;
    document.getElementById('type-null').innerHTML = `Data Type: (${typeof y}) Here we have ${y} variable`;
    document.getElementById('type-object').innerHTML = `Data Type: (${typeof obj}) Meet my friend ${JSON.stringify(obj)}`;
    document.getElementById('type-array').innerHTML = `Data Type: (${typeof digits}) Arabic digits ${digits}`;
    document.getElementById('func-mess').innerHTML = `Data Type: (${typeof func()}) Every time i come home, i want to hear: ${func()}`;
});