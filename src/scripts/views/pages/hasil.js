const Hasil = {
  async render() {
    // Ambil nilai pssScore dari sessionStorage
    const pssScore = sessionStorage.getItem('pssScore');

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
        </div>
      </div>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    // Bersihkan nilai pssScore dari sessionStorage setelah digunakan
    sessionStorage.removeItem('pssScore');
  },
};

export default Hasil;
