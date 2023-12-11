import questionsource from "../../../data/source-question";
import questionTemplate from "../templates/questionTemplate";

const Test = {
    async render() {
      return `
      
  <div class=" w-100 rounded up-content">
      <p><b>Complete the following questions according to your situation<br /> <br />
      In the LAST MONTH, how often have you: </b></p>
  </div>
<div class="test-content">

  <div id="questionlist"></div>

    <div class="next">
      <div class="next-button">
        <button id="next-btn" type="submit" >Next</button>
       </div>
    </div>
  </div>
`;
    },
  
    async afterRender() {
      const questions = await questionsource.Question();
    const questionContainer = document.querySelector('#questionlist');

    let currentQuestion = 0;

    // Add event listener for the Next button
    document.getElementById('next-btn').addEventListener('click', () => {
      // Increase current question
      currentQuestion++;

      if (currentQuestion >= questions.length) {
        // Handle reaching the last question
        // You can display a message or perform other actions
        document.querySelector('#next-btn').textContent = 'Finish';
        document.querySelector('#next-btn').addEventListener('click', () => {
          // Go to the results page
          window.location.href = '/results';
        });
      } else {
        // Display the next question
        const nextQuestion = questionTemplate(questions[currentQuestion]);
        questionContainer.innerHTML = nextQuestion;
      }
    });

    // Display the first question
    questionContainer.innerHTML += questionTemplate(questions[currentQuestion]);
  },
  };
  
  
  export default Test;
  