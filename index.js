const textToType = "A digitação é uma habilidade importante para a comunicação moderna. Pratique regularmente para melhorar sua velocidade e precisão.";

let startTime;
let timerInterval;
let isTyping;

function startTypingTest() {
    isTyping = true; 
    clearInterval(timerInterval);

    document.getElementById('result').innerHTML = '';
    document.getElementById('timer').innerHTML = '15';

    const inputField = document.getElementById('inputField');

    inputField.value = ''; 
    inputField.focus();

    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000); 
}

function updateTimer() {
    const elapsedTimer = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = 15 - elapsedTimer;

    document.getElementById('timer').innerHTML = remainingTime;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        finishTest();
    }
}

function finishTest() {
    isTyping = false;
    const inputField = document.getElementById('inputField');

    const typedText = inputField.value.trim(); 
    const totalWords = typedText.split(' ').filter(word => word.length > 0).length;
    const timeTaken = 15;
    const speed = (totalWords / timeTaken) * 60;

    document.getElementById('result').innerHTML = `Você digitou ${totalWords} palavras em 15 segundos. Sua velocidade é de ${speed.toFixed(2)} palavras por minuto.`;

    
}

document.getElementById('textType').innerHTML = textToType;


document.getElementById('inputField').addEventListener('focus', () => {
    if (!isTyping) {
        startTypingTest();
    }
});