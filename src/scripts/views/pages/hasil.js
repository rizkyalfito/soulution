function calculateStressLevel(score) {
  if (score >= 0 && score <= 13) {
      return 'Low Stress';
  } if (score >= 14 && score <= 26) {
      return 'Moderate Stress';
  } if (score >= 27 && score <= 40) {
      return 'High Perceived Stress';
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
      <h3>Your Stress Level</h3>
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



