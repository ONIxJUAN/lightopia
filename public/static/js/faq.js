let openBox = null;
let openBoxHeight = null;
let openBoxPlus = null;
sorting();

function sorting() {
  const categories = [
    ...new Set(questions.map((question) => question.category)),
  ];
  for (const category of categories) {
    const questionList = [];
    for (const question of questions) {
      if (category === question.category) {
        questionList.push(question);
      }
    }
    buildfaq(questionList);
  }
  faqAnswers();
}

function buildfaq(questionList) {
  const $faq = document.getElementById("faq");
  let html = `<div id="${questionList[0].category}"><h2>${questionList[0].category}</h2>`;

  for (const question of questionList) {
    html += `<div class="faq_box" id="${question.question}"><h3 id="${question.question} h3">${question.question}
      </h3><span class="faq_right" id="${question.question} right">+</span><p id="${question.question} p">${question.answer}</p></div>`;
  }

  $faq.innerHTML += html;
}

function faqAnswers() {
  for (const question of questions) {
    const $answerBox = document.getElementById(question.question);
    const $answer = document.getElementById(`${question.question} p`);
    const $question = document.getElementById(`${question.question} h3`);

    $answerBox.style.height = `${$question.clientHeight + 32}px`;

    $answerBox.addEventListener("click", function () {
      const $plus = document.getElementById(`${question.question} right`);
      if ($plus.classList.contains("clicked")) {
        $plus.classList.remove("clicked");
        $answerBox.style.height = `${$question.clientHeight + 32}px`;
      } else {
        if (openBox !== null) {
          openBox.style.height = `${openBoxHeight + 32}px`;
          openBoxPlus.classList.remove("clicked");
        }
        $plus.classList.add("clicked");
        $answerBox.style.height = `${
          $answer.clientHeight + $question.clientHeight + 48
        }px`;
        openBox = $answerBox;
        openBoxHeight = $question.clientHeight;
        openBoxPlus = $plus;
      }
    });
  }
}
