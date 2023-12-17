// Fungsi ini didefinisikan di luar objek LandingPage
function handleButtonClick(target) {
  // Menghapus kelas 'active' dari semua tombol
  document.querySelectorAll('.menu-button').forEach((button) => button.classList.remove('active'));

  // Menambahkan kelas 'active' pada tombol yang diklik
  const activeButton = document.querySelector(`.menu-button[data-target="${target}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }

  // Mengarahkan ke target halaman
  window.location.href = target;
}

const LandingPage = {
  async render() {
    return `
        <div id="landing-page" class="d-flex flex-column justify-content-center">
        <div class="jumbotron">
        <div class="container ">
          <div class="row">
            <div class="col-md-6 text-center align-self-center">
              <h1 class="display-4">Take Care of Your Mental Health</h1>
              <p class="lead">-- Soulution, Best Solution for Your Soul --</p>
              <p class="lead2">Don't underestimate your mental problems. Check your mental health here</p>
              <a class="btn btn-primary btn-lg" href="#/check" role="button">Get Started</a>
            </div>
            <div class="col-md-6">
              <img data-src="./images/heros/hero.jpg" alt="Hero Image" class="img-fluid lazyload">
            </div>
          </div>
        </div>
      </div>

      <div class="feature d-flex flex-row justify-content-center">
        <div class="container text-center">
            <div class="row g-4">
                <div class="col-12 col-md-6 col-lg-4 mx-auto">
                    <div class="card mb-3 h-100" >
                        <img src="./images/heros/hero-check.jpg" style="width: 85%;" class="card-img-top mx-auto" alt="...">
                        <div class="card-body mt-3">
                            <h5 class="card-title">Check</h5>
                            <p class="card-text" style="text-align: justify;">Find out how much stress you're under by answering some psychology questions that can measure your stress levels.</p>
                            <button class="cssbuttons-io-button menu-button"  data-target="#/check">
                              Let's try
                              <div class="icon">
                                <svg
                                  height="24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mx-auto">
                    <div class="card mb-3 h-100" >
                        <img src="./images/heros/hero-tips.jpg" class="card-img-top mt-5" alt="...">
                        <div class="card-body mt-5">
                            <h5 class="card-title">Tips</h5>
                            <p class="card-text" style="text-align: justify;">Relieve your stress by reading articles on tips for relieving stress for short or long periods of time.</p>
                            <button class="cssbuttons-io-button mt-4 menu-button"  data-target="#/tips">
                              Let's read
                              <div class="icon">
                                <svg
                                  height="24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mx-auto">
                    <div class="card mb-3 h-100" >
                        <img src="./images/heros/hero-forum.jpg" style="width: 95%;" class="card-img-top mt-2" alt="...">
                        <div class="card-body mt-4">
                            <h5 class="card-title">Forum</h5>
                            <p class="card-text mb-5" style="text-align: justify;">Tell us about your experiences with stress or how you deal with stress and become a helper for many people.</p>
                            <button class="cssbuttons-io-button menu-button"  data-target="#/forum">
                              Let's talk
                              <div class="icon">
                                <svg
                                  height="24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-5 align-mid">
              <img src="./images/heros/hero2.png" alt="Banner Image" class="img-fluid">
            </div>
            <div class="col-md-6 text-center align-self-center">
              <h2 class="display-4">Mental health is important for you</h2>
            </div>
          </div>
        </div>
      </div>

      

      

            `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const buttons = document.querySelectorAll('.menu-button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        handleButtonClick(target);
      });
    });
  },
};

export default LandingPage;
