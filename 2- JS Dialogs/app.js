document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connection-state-container').innerHTML = 'HTML document is completly loaded and can be manipulated';

    alert('Hello, i\'m JavaScript!')

    const name = prompt('What is your name?')

    alert(`Hello ${name}!`)

    const likeJS = confirm('Do you like me?')

    if(likeJS){
        alert('That\'s great')
    }else{
        alert('That\'s so bad!')
    }
});