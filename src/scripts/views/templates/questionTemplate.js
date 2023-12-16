const questionTemplate = (question) => `
  <div class="questCard">
    <div class="py-2 kantong-number">
      <div class="number"><h3 class="nomor">${question.id}/10</h3></div>
    </div>

    <h3 class="test-soal">${question.text}</h3>

    <div class="buttonAnswer">
      <button id="cat1" type="submit" data-value="0">Never</button>
      <button id="cat2" type="submit" data-value="1">Almost Never</button>
      <button id="cat3" type="submit" data-value="2">Sometimes</button>
      <button id="cat4" type="submit" data-value="3">Fairly Often</button>
      <button id="cat5" type="submit" data-value="4">Very Often</button>
    </div>
  </div>
`;
const buttons = document.querySelectorAll('.buttonAnswer button');
let total = 0;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const answerValue = parseInt(this.dataset.value,10);
        total += answerValue;

        document.getElementById('totalValue').value = total;
    });
}); 

export default questionTemplate;

