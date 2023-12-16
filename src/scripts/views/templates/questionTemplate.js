const questionTemplate = (question) => `
  <div class="questCard">
    <div class="py-2 kantong-number">
      <div class="number"><h3 class="nomor">${question.id}/10</h3></div>
    </div>

    <h3 class="test-soal">${question.text}</h3>

    <div class="radio-input">
      <input value="value-1" name="value-radio" id="value-1" type="radio">
      <label for="value-1">Never</label>
      <input value="value-2" name="value-radio" id="value-2" type="radio">
      <label for="value-2">Almost Never</label>
      <input value="value-3" name="value-radio" id="value-3" type="radio">
      <label for="value-3">Sometimes</label>
      <input value="value-4" name="value-radio" id="value-4" type="radio">
      <label for="value-4">Fairly Often</label>
      <input value="value-5" name="value-radio" id="value-5" type="radio">
      <label for="value-5">Very Often</label>
    </div>
  </div>
`;

export default questionTemplate;