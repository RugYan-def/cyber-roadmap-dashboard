const quizArea = document.getElementById('quizArea');
const questions = [
  {
    question: "What is the speed limit in a residential area in PA?",
    options: ["25 mph", "35 mph", "45 mph", "55 mph"],
    correct: 0
  },
  {
    question: "What is the legal BAC limit for drivers 21+?",
    options: ["0.10%", "0.08%", "0.06%", "0.05%"],
    correct: 1
  }
];
let current = 0;
let score = 0;

function startQuiz() {
  quizArea.classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  quizArea.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">${q.question}</h2>
    ${q.options.map((opt, i) => `<button onclick="checkAnswer(${i})" class="block w-full my-2 px-4 py-2 bg-white border rounded hover:bg-gray-100">${opt}</button>`).join('')}
  `;
}

function checkAnswer(selected) {
  if (selected === questions[current].correct) score++;
  current++;
  if (current < questions.length) showQuestion();
  else quizArea.innerHTML = `<p class="text-xl font-bold text-green-600">You scored ${score}/${questions.length}</p>`;
}
