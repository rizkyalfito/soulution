const LandingPage = {
  async render() {
    return `
    <div id="landing-page" class="d-flex flex-column justify-content-center">
    <div class="jumbotron">
    <div class="container ">
      <div class="row">
        <div class="col-md-6 text-center align-self-center">
          <h1 class="display-4">Take Care of Your Mental Health</h1>
          <p class="lead">Soulution, Best Solution for Your Soul</p>
          <a class="btn btn-primary btn-lg" href="#/check" role="button">Get Started</a>
        </div>
        <div class="col-md-6">
          <img src="./images/heros/hero.jpg" alt="Hero Image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>

  <div class="feature d-flex flex-row justify-content-center">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="card mb-3 h-100" style="width: 20rem;">
                    <img src="./images/heros/hero-check.jpg" style="width: 85%;" class="card-img-top mx-auto" alt="...">
                    <div class="card-body mt-3">
                        <h5 class="card-title">Check</h5>
                        <p class="card-text" style="text-align: justify;">Find out how much stress you're under by answering some psychology questions that can measure your stress levels.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mx-auto">
                <div class="card mb-3 h-100" style="width: 20rem;">
                    <img src="./images/heros/hero-tips.jpg" class="card-img-top mt-5" alt="...">
                    <div class="card-body mt-5">
                        <h5 class="card-title">Tips</h5>
                        <p class="card-text" style="text-align: justify;">Relieve your stress by reading articles on tips for relieving stress for short or long periods of time.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mx-auto">
                <div class="card mb-3 h-100" style="width: 20rem;">
                    <img src="./images/heros/hero-forum.jpg" style="width: 95%;" class="card-img-top mt-2" alt="...">
                    <div class="card-body mt-4">
                        <h5 class="card-title">Forum</h5>
                        <p class="card-text" style="text-align: justify;">Tell us about your experiences with stress or how you deal with stress and become a helper for many people.</p>
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

  <div class="route-banner" >
    <div class="container">
    <div class="row">
          <h3 class="display-4">Don't underestimate your mental problems. Check your mental health here</h3>
    </div>
  </div>
  </div>

        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default LandingPage;
