const LandingPage = {
  async render() {
    return `

    <div class="jumbotron">
    <div class="container ">
      <div class="row">
        <div class="col-md-6">
          <h1 class="display-4 ">Take Care of Your Mental Health</h1>
          <p class="lead">Soulution, Best Solution for Your Soul</p>
        </div>
        <div class="col-md-6">
          <img src="./images/heros/hero.jpg" alt="Hero Image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>

  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="./images/heros/hero.jpg" alt="Banner Image" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h2 class="display-4">Mental health is important for you</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="route-banner col-md-6" >
    <div class="container">
    <div class="row">
          <h3 class="display-4 col-md-6">Don't underestimate your mental problems. Check your mental health here</h3>
          <a class="btn btn-primary btn-lg col-md-6" href="#/home" role="button">Get Started</a>
    </div>
  </div>

        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default LandingPage;
