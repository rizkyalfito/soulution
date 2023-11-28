import articleSource from "../../../data/source-article";
import { articleItemTemplate } from "../templates/articleCardTemplate";

const Home = {
  async render() {
    return `
    <div class="px-5 pt-4 w-100 Home-hero">
    <img class="w-100 rounded HomeImg-hero" src="./images/heros/homeHero1.png" height="350px" alt="Hero Home" />
    <p class="fw-bolder articleTagLine-hero">
      Take care of Your <br />
      Mental Health
    </p>
  </div>

  <h2 class="fs-3 px-5 pt-5">New Article</h2>

  <div id="shortTipsList"></div>
      `;
  },

  async afterRender() {
    const soulutionShortTips = await articleSource.article();
    const ArticleContainer = document.querySelector('#ArticleList');
    soulutionShortTips.forEach((articlePendek) => {
      ArticleContainer.innerHTML += articleItemTemplate(articlePendek);
    });
},
};

export default Home;
