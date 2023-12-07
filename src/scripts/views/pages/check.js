const Check = {
  async render() {
    return `
    <div class="px-5 pt-4 w-100 hero">
    <img class="w-100 rounded banner-hero" src="./images/heros/check-hero.png" alt="hero-check">
</div>
<div class="w-100 container">
    <div class="layer1">
        <div class="overlay">
            <div class="d-flex align-items-center px-2 pl-5 new-title">
                <h4 class="fs-4 px-4 pt-5  page-title1"><b>Mental Health Checker</b></h4>
            </div>
        </div>
        <div class="para1">
            <p>Stress can happen to anyone at any time. It can be caused by serious and trivial things. Although it
                is natural, stress can harm your health if not managed properly. Let's check your mental health
                here!</p>
        </div>
    </div>

    <div class="layer2">
        <div class="overlay">
            <div class="d-flex align-items-center px2 pl-5 new-title">
                <h4 class="fs-4 px-4 pt-5  page-title2"><b>How This Stress Test Works</b></h4>
            </div>
        </div>
        <div class="para2">
            <p>This stress test uses the Perceived Stress Scale (PSS). Originally created by Cohen et al (1983), it is a highly recognised psychological tool for measuring the perception of stress that's clinically validated and widely used by the NHS and other reputable medical services. It forms part of a wider-ranging self-assessment undertaken by participants of the Be Mindful program, which also includes tests for Depression (PHQ9) and Anxiety (GAD7). <br /> <br />
                The Perceived Stress Scale (PSS) measures the degree to which situations in your life are perceived as stressful. The series of questions have been designed to assess how unpredictable, uncontrollable, and overloaded you feel your life to be, as well as a direct questione about your current level of experienced stress.
                The PSS questions ask about thoughts and feelings during the last month. They are easy to understand and are of a general nature. This makes the test relatively free from bias for or against any specific subpopulation group.</p>
        </div>
    </div>


</div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Check;
