function calculateStressLevel(score) {
    if (score >= 0 && score <= 13) {
        return `
      <h3>Low Stress</h3>
      <div class="desk-stress">
      <p class="deskripsi-stress">You are doing well. Keep it up!<p>
      </div>
      `;
    } if (score >= 14 && score <= 26) {
        return `
      <h3>Moderated Stress</h3>
      <div class="desk-stress">
      <p class="deskripsi-stress">Your stress level is moderate. It may be helpful to explore stress management techniques such as deep breathing exercises, mindfulness, or regular physical activity. Remember to take breaks and prioritize self-care.<br />
      Do you need some tips? check it out!</p>
      </div>
      <a class="linked-hasil" href="#/tips"><b>Click Here!</b></a>
      `;
    } if (score >= 27 && score <= 40) {
        return `
      <h3>High Perceived Stress</h3>
      <div class="desk-stress">
      <p class="deskripsi-stress">Your stress level is high. It is crucial to prioritize self-care and seek support. Consider talking to friends, family, or a mental health professional. Implement stress-reducing activities and make time for activities you enjoy<br />
      You need special treatment. Maybe our tips can help you <p>
      </div>
      <a class="linked-hasil" href="#/tips"><b>Click Here!</b></a>
      `;
    }
    return 'Invalid PSS score';

}

const Hasil = {
    async render() {
        const pssScore = parseFloat(sessionStorage.getItem('pssScore'));
        console.log('PSS Score:', pssScore);

        if (!isNaN(pssScore)) {
            const stressLevel = calculateStressLevel(pssScore);
            console.log('Stress Level:', stressLevel);

            return `
      <div class="w-100 rounded hasil-up">
      <h2>Knowing your stress level is the first step in taking action</h2>
  </div>
  <div class="img-section">
      <div class="align-mid py-3 img-hasil">
          <img src="./images/heros/hero-hasil.png" alt="Hero Hasil Image" class="img-fluid">
      </div>
  </div>
  <div class="hasil-desk">
      <h3 class="hasil-title"><b>Your Stress Level</b></h3>
      <div id="result">
          <h1>${pssScore}</h1>
          <p>${stressLevel}</p>
      </div>
  </div>
  
      `;
        }
        console.log('Invalid PSS score');
        return "Invalid PSS score";
    },


    async afterRender() {
        // Tambahkan logika tambahan jika diperlukan
    },
};

export default Hasil;



