import questionsource from "../../../data/source-question";
import questionTemplate from "../templates/questionTemplate";
import calculatePSSScore from "../../utils/calculatePSSScore";

const Test = {
  async render() {
    return `
      <div class="w-100 rounded up-content">
        <p><b>Complete the following questions according to your situation<br /> <br />
        In the LAST MONTH, how often have you: </b></p>
      </div>
      <div class="test-content">
        <div id="questionlist"></div>
        <div class="next">
          <div class="next-button">
            <button id="next-btn" type="button" disabled>Next</button>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const questions = await questionsource.Question();
    const questionContainer = document.querySelector('#questionlist');
    const userAnswers = [];
    let currentQuestion = 0;

    const isAllAnswersFilled = () => {
      const radioButtons = document.querySelectorAll('input[name="value-radio"]');
      const answeredQuestions = Array.from(radioButtons).filter(button => button.checked);
      return answeredQuestions.length === 1; // Ubah menjadi 1 agar satu jawaban yang terpilih
    };

    const updateQuestion = () => {
      if (currentQuestion >= questions.length) {
        document.querySelector('#next-btn').textContent = 'Finish';
        document.querySelector('#next-btn').addEventListener('click', () => {
          const pssScore = calculatePSSScore(userAnswers);

          // Simpan nilai pssScore ke sessionStorage
          sessionStorage.setItem('pssScore', pssScore);

          // Pindah ke halaman hasil
          window.location.href = '#/hasil';
        });
      } else {
        const nextQuestion = questionTemplate(questions[currentQuestion]);
        questionContainer.innerHTML = nextQuestion;
        document.querySelector('#next-btn').disabled = true;
      }
    };

    document.getElementById('next-btn').addEventListener('click', () => {
      const selectedAnswer = document.querySelector('input[name="value-radio"]:checked');

      if (selectedAnswer) {
        const answerValue = parseInt(selectedAnswer.value, 10);
        userAnswers.push(answerValue);
      }

      currentQuestion++;
      updateQuestion();

      if (currentQuestion < questions.length) {
        document.querySelector('#next-btn').disabled = true;
      } else {
        document.querySelector('#next-btn').textContent = 'Finish';
      }
    });

    // Pemanggilan pertama untuk menetapkan pertanyaan awal
    updateQuestion();

    // Tambahkan event listener untuk memeriksa jawaban yang diisi
    document.addEventListener('change', () => {
      document.querySelector('#next-btn').disabled = !isAllAnswersFilled();
    });
  },
};

export default Test;
