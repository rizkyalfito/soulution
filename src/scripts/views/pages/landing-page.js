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
          <a class="btn btn-primary btn-lg" href="#/home" role="button">Get Started</a>
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
                <div class="card mb-3 h-100" style="width: 15rem;">
                    <img src="./images/heros/hero-check.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Check</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mx-auto">
                <div class="card mb-3 h-100" style="width: 15rem;">
                    <img src="./images/heros/hero-tips.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Tips</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mx-auto">
                <div class="card mb-3 h-100" style="width: 15rem;">
                    <img src="./images/heros/hero-forum.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Forum</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
