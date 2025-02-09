document.addEventListener('DOMContentLoaded', () =>{
    // Conditional IF
    let age = 18;
    let capacity;
    if(age >= 18){
        capacity = 'you are an adult';
    }else{
        capacity = 'you are minor';
    }
    console.log(capacity);
    document.getElementById('conditional-if').innerHTML = `If you have ${age} years old, then ${capacity}`;

    // Conditional switch emulation case
    const dayNumber = prompt('Enter a number between 1 and 7:');
    if(dayNumber == 1){
        console.log('Not optimized: Monday');
        document.getElementById('switch-emu').innerHTML = 'Not optimized: Monday';
    }else if(dayNumber == 2){
        console.log('Not optimized: Tuesday');
        document.getElementById('switch-emu').innerHTML = 'Not optimized: Tuesday';
    }else if(dayNumber == 3){
        console.log('Not optimized: Wednesday');
        document.getElementById('switch-emu').innerHTML = 'Not optimized: Wednesday';
    }else if(dayNumber == 4){
        console.log('Not optimized: Thursday');
        document.getElementById('switch-emu').innerHTML = 'Not optimized: Thursday';
    }else if(dayNumber == 5){
        console.log('Not optimized: Friday');
        document.getElementById('switch-emu').innerHTML = 'Not optimized: Friday';
    }else if(dayNumber == 6){
        console.log('Not optimized: Saturday');
        document.getElementById('switch-emu').innerHTML = 'Not optimized :Saturday';
    }else if(dayNumber == 7){
        console.log('Not optimized: Sunday');
        document.getElementById('switch-emu').innerHTML = 'Not optimized: Sunday';
    }else{
        console.log('Not optimized: Invalid week day!');
        document.getElementById('switch-emu').innerHTML = 'Not optimized: Invalid week day!';
    }

    // Conditional switch
    switch(dayNumber){
        case '1':
            console.log('Optimized: Monday');
            document.getElementById('switch').innerHTML = 'Optimized: Monday';
            break;
        case '2':
            console.log('Tuesday');
            document.getElementById('switch').innerHTML = 'Optimized: Tuesday';
            break;
        case '3':
            console.log('Wednesday');
            document.getElementById('switch').innerHTML = 'Optimized: Wednesday';
            break;
        case '4':
            console.log('Thursday');
            document.getElementById('switch').innerHTML = 'Optimized: Thursday';
            break;
        case '5':
            console.log('Friday');
            document.getElementById('switch').innerHTML = 'Optimized: Friday';
            break;
        case '6':
            console.log('Saturday');
            document.getElementById('switch').innerHTML = 'Optimized: Saturday';
            break;
        case '7':
            console.log('Sunday');
            document.getElementById('switch').innerHTML = 'Optimized: Sunday';
            break;
        default:
            console.log('Invalid week day!')
            document.getElementById('switch').innerHTML = 'Optimized: Invalid week day!';
            break;
    }

    // Classic hardcoding
    console.log('Hardcoded values');
    console.log(0);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);

    // For loop
    for(let i = 0; i < 10; i++){
        console.log(i);
    }

    // While loop
    let i = 0;
    while(i < 10){
        console.log(i);
        i++;
    }

    // Do While loop
    i = 0;
    do{
        console.log(i);
        i++;
    }while(i < 10);
});