const questionTemplate = (question) => `
    <div class="questCard">
    <div class="py-2 kantong-number">
        <div class="number"><h3 class="nomor">${question.id}/10</h3></div>
    </div>
        
    <h3 class="test-soal">${question.text}</h3>

        <div class="buttonAnswer">
            <button id="cat1" type="submit" >Never</button>
            <button id="cat2" type="submit" >Almost Never</button>
            <button id="cat3" type="submit" >Sometimes</button>
            <button id="cat4" type="submit" >Fairly Often</button>
            <button id="cat5" type="submit" >Very Often</button>
        </div>
    </div>
`;


export default questionTemplate;

