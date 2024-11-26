function checkAnswer(questionNumber, correctAnswer) {
    const userAnswer = document.getElementById(`answer-${questionNumber}`).value.trim().toLowerCase();
    if (userAnswer === correctAnswer.toLowerCase()) {
        document.getElementById(`question-${questionNumber}`).style.display = 'none';
        const nextQuestion = document.getElementById(`question-${questionNumber + 1}`);
        if (nextQuestion) {
            nextQuestion.style.display = 'block';
        } else {
            document.getElementById('secret-question').style.display = 'block';
        }
    } else {
        alert('Incorrect answer. Try again!');
    }
}

function checkSecret() {
    const secretAnswer = document.getElementById('answer-secret').value.trim();
    if (secretAnswer === '{ctf12345}') {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').textContent = 'Congratulations! You found the flag!';
    } else {
        alert('Incorrect secret code. Inspect the page to find it!');
    }
}
