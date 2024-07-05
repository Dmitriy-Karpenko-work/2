document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function () {
    if (checkAnswers()) {
      const answers = collectAnswers();
      showResults(answers);
    } else {
      alert("Пожалуйста, ответьте на все вопросы перед завершением опроса.");
    }
  });

  function checkAnswers() {
    const q1 = document.querySelector('input[name="question1"]:checked');
    const q2 = document.querySelector('input[name="question2"]:checked');
    const q3 = document.querySelector('input[name="question3"]:checked');
    return q1 && q2 && q3;
  }

  function collectAnswers() {
    const answers = [];
    const q1 = document.querySelector('input[name="question1"]:checked').value;
    const q2 = document.querySelector('input[name="question2"]:checked').value;
    const q3 = document.querySelector('input[name="question3"]:checked').value;
    answers.push({ question: "Вопрос 1", answer: q1 });
    answers.push({ question: "Вопрос 2", answer: q2 });
    answers.push({ question: "Вопрос 3", answer: q3 });
    return answers;
  }

  function showResults(answers) {
    alert(
      "Результаты опроса:\n\n" +
        "Вопрос 1: " +
        answers[0].answer +
        "\n" +
        "Вопрос 2: " +
        answers[1].answer +
        "\n" +
        "Вопрос 3: " +
        answers[2].answer
    );
  }
});
