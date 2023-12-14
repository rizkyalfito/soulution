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

    
    document.getElementById('next-btn').addEventListener('click', () => {
      
      currentQuestion++;

      if (currentQuestion >= questions.length) {
       
        document.querySelector('#next-btn').textContent = 'Finish';
        document.querySelector('#next-btn').addEventListener('click', () => {
         
          window.location.href = '#/hasil';
        });
      } else {
        
        const nextQuestion = questionTemplate(questions[currentQuestion]);
        questionContainer.innerHTML = nextQuestion;
      }
    });

    
    questionContainer.innerHTML += questionTemplate(questions[currentQuestion]);
  },
  };
  
  
  export default Test;
  